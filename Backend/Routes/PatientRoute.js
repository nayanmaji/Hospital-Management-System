const express = require('express');
const router = express.Router();
const Patient = require('../Model/patientModel'); 
const Appointment = require('../Model/bookApt'); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.PATIENT_JWT_SECRET;

router.post('/signup', async (req, res) => {
  try {
    const { pname,pphone,pemail,page,pgender,ppassword } = req.body;

    const existingPatient = await Patient.findOne({ pphone });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient with this ID already exists' });
    }

    const newPatient = new Patient({ pname,pphone,pemail,page,pgender,ppassword });

    await newPatient.save();
    res.status(201).json({ message: 'Doctor signed up successfully' });
  } catch (error) {
    console.error('Error signing up doctor:', error);
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  try {
    const patient = await Patient.findOne({ pphone: phone });
    if (!patient) {
      return res.status(400).json({ message: 'Patient not found' });
    }

    const isMatch = await bcrypt.compare(password, patient.ppassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const tokenp = jwt.sign({ phone: patient.pphone }, JWT_SECRET, { expiresIn: 60 * 5 });
    res.json({ tokenp,patient });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});



// Route to handle fetching patient data with appointments
router.get('/list', async (req, res) => {
  try {
    // Find all patients from the Patient model
    const patients = await Patient.find();

    // Find all appointments, and group them by phone number
    const appointments = await Appointment.find();
    
    // Create a mapping of appointments by phone number
    const appointmentMap = appointments.reduce((acc, appointment) => {
      if (!acc[appointment.phone]) {
        acc[appointment.phone] = [];
      }
      acc[appointment.phone].push(appointment);
      return acc;
    }, {});

    // Fetch appointments for all patients and include those from appointments
    const patientsWithAppointments = await Promise.all(
      patients.map(async patient => {
        const patientAppointments = appointmentMap[patient.pphone] || [];
        return {
          patientInfo: patient,
          appointments: patientAppointments
        };
      })
    );

    // Include patients who are only in the appointments list but not in the Patient model
    const appointmentPatients = appointments
      .filter(appointment => !patients.some(patient => patient.pphone === appointment.phone))
      .map(appointment => ({
        patientInfo: { // Assuming you want to show minimal patient info
          pname: appointment.name,
          pphone: appointment.phone,
          pemail: appointment.email,
          page: appointment.age,
          pgender: appointment.gender,
        },
        appointments: [appointment]
      }));

    // Combine both lists
    const combinedList = [...patientsWithAppointments, ...appointmentPatients];

    res.status(200).json(combinedList);
  } catch (error) {
    console.error('Error fetching patients with appointments:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
