const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
    a_id: {
        type: String,
        required: true
    },
    a_Name: {
        type: String,
        required: true
    },
    a_password: {
        type: String,
        required: true
    },
    role: { type: String, default: 'admin' }
}, {
    timestamps: true,
});

// Password hashing middleware
adminSchema.pre('save', async function(next) {
    if (!this.isModified('a_password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.a_password = await bcrypt.hash(this.a_password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
