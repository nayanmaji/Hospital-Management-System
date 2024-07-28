const express = require('express');
const router = express.Router();
const Appointment = require('../Model/bookApt'); 

// Route to handle form submission
router.post('/bookapt', async (req, res) => {
  try {
    const { name, phone, email, age, gender, date, departments, doctor, issues } = req.body;

    // Create a new appointment
    const newAppointment = new Appointment({
      name,
      phone,
      email,
      age,
      gender,
      date,
      departments,
      doctor,
      issues
    });

    // Save the appointment to the database
    await newAppointment.save();
    res.status(201).send('Application submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: error.message });
  }
});

// Route to handle fetching future or present appointments
router.get('/appointments/:doctor/:departments', async (req, res) => {
  try {
    const doctorName = req.params.doctor;
    const departmentName = req.params.departments;
    
    // Get the current date and time
    const currentDate = new Date();

    // Find appointments for the specific doctor and department, filtering out past dates
    const appointments = await Appointment.find({
      doctor: doctorName,
      departments: departmentName,
      date: { $gte: currentDate } // Only include appointments with dates in the future or present
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: error.message });
  }
});


// Route to handle list of past appointments
router.get('/appointments/:doctor/:departments/past', async (req, res) => {
  try {
    const doctorName = req.params.doctor;
    const departmentName = req.params.departments;

    // Get the current date
    const currentDate = new Date();

    // Fetch past appointments based on doctor, departments, and date
    const appointments = await Appointment.find({
      doctor: doctorName,
      departments: departmentName,
      date: { $lt: currentDate }  // $lt operator to find dates less than current date
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
