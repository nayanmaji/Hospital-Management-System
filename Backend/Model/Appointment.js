const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  age: Number,
  gender: String,
  date: Date,
  departments: String,
  doctor: String,
  issues: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);