const { connect, default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
    dr_id: {
        type: String,
        required: true
    },
    dr_Name: {
        type: String,
        required: true
    },
    dr_specialties: {
        type: String,
        required: true
    },
    dr_fees: {
        type: Number,
        required: true
    },
    dr_qualifications: {
        type: String,
        required: true
    },
    dr_experience: {
        type: String,
        required: true
    },
    dr_contactInformation: {
        type: String,
        required: true
    },
    dr_img: [],
    dr_password: {
        type: String,
        required: true
    },
    role: { type: String, default: 'doctor' }
}, {
    timestamps: true,
});

// Password hashing middleware
doctorSchema.pre('save', async function(next) {
    if (!this.isModified('dr_password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.dr_password = await bcrypt.hash(this.dr_password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
