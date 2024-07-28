const express = require("express");
const router = express.Router();
const dr = require('../Model/drModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.DOCTOR_JWT_SECRET;

router.get('/getdoctors', async (req, res) => {
  try {
    const doctors = await dr.find({});
    res.send(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return res.status(400).json({ message: error.message });
  }
});

router.get('/departments', async (req, res) => {
  try {
    const departments = await dr.distinct('dr_specialties');
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { dr_id, dr_Name, dr_specialties, dr_fees, dr_qualifications, dr_experience, dr_contactInformation, dr_img, dr_password } = req.body;

    const existingDoctor = await dr.findOne({ dr_id });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor with this ID already exists' });
    }

    const newDoctor = new dr({
      dr_id,
      dr_Name,
      dr_specialties,
      dr_fees,
      dr_qualifications,
      dr_experience,
      dr_contactInformation,
      dr_img,
      dr_password
    });

    await newDoctor.save();
    res.status(201).json({ message: 'Doctor signed up successfully' });
  } catch (error) {
    console.error('Error signing up doctor:', error);
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { id, password } = req.body;

  try {
    const doctor = await dr.findOne({ dr_id: id });
    if (!doctor) {
      return res.status(400).json({ message: 'Doctor not found' });
    }

    const isMatch = await bcrypt.compare(password, doctor.dr_password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const dtoken = jwt.sign({ id: doctor.dr_id }, JWT_SECRET, { expiresIn: 60 * 5 });
    res.json({
      dtoken,
      doctor: {
        id: doctor.dr_id,
        name: doctor.dr_Name,
        departments: doctor.dr_specialties
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to handle form doctor detils
router.get('/:id', async (req, res) => {
  try {
    const doctorId = req.params.id;
    const Dr = await dr.find({ dr_id: doctorId });
    res.status(200).json(Dr);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: error.message });
  }
});

// Route to update a doctor's data
router.put('/update/:id', async (req, res) => {
  try {
    const doctorId = req.params.id;
    const updateData = req.body;

    // Find doctor by ID and update
    const updatedDoctor = await dr.findOneAndUpdate({ dr_id: doctorId }, updateData, { new: true });

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(updatedDoctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({ message: error.message });
  }
});


// Route to delete a doctor's data
router.delete('/delete/:id', async (req, res) => {
  try {
    const doctorId = req.params.id;

    // Find doctor by ID and delete
    const deletedDoctor = await dr.findOneAndDelete({ dr_id: doctorId });

    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
