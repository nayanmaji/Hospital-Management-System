const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Route to get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
