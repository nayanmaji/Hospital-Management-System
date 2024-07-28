const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String 
    },
    age:{
        type: Number
    },
    gender:{
        type:String
    },
    date: { 
        type: Date 
    },
    departments: { 
        type: String 
    },
    doctor: { 
        type: String 
    },
    issues: { 
        type: String 
    }
}, {
    timestamps: true
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
