const { connect, default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs');
const Appointment = require('./bookApt');

const patientSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    pphone: { 
        type: String, 
        required: true 
    },
    pemail: { 
        type: String, 
        required: true
    },
    page:{
        type: Number
    },
    pgender:{
        type:String,
        required: true
    },
    ppassword:{
        type: String,
    },
    role: { type: String, default: 'patient' }
}, {
    timestamps: true
});

// Password hashing middleware
patientSchema.pre('save', async function(next) {
    if (!this.isModified('ppassword')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.ppassword = await bcrypt.hash(this.ppassword, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Populate appointments based on pphone
patientSchema.statics.findWithAppointments = async function(pphone) {
    const patient = await this.findOne({ pphone });
    if (!patient) {
      throw new Error('Patient not found');
    }
    const appointments = await Appointment.find({ phone: pphone });
    return { patient, appointments };
  };
  

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
