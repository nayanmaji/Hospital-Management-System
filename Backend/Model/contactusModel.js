const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        default: false
      }
}, {
    timestamps: true,
});

const ContactUs = mongoose.model('ContactUs', contactusSchema);

module.exports = ContactUs;
