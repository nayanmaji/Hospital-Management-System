const express = require("express");
const router = express.Router();
const admins = require('../Model/adminModel');
const ContactUs = require('../Model/contactusModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.ADMIN_JWT_SECRET;

router.post('/signup', async (req, res) => {
    try {
        const { a_id, a_Name, a_password } = req.body;
        const existingAdmin = await admins.findOne({ a_id });
        if (existingAdmin) {
            return res.status(400).alert({ message: 'Admin with this ID already exists' });
        }
        const newAdmin = new admins({ a_id, a_Name, a_password });
        await newAdmin.save();
        res.status(201).alert({ message: 'Admin signed up successfully' });
    } catch (error) {
        res.status(500).alert({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { id, password } = req.body;

    try {
        const admin = await admins.findOne({ a_id: id });
        if (!admin) {
            return res.status(400).alert({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.a_password);
        if (!isMatch) {
            return res.status(400).alert({ message: 'Invalid credentials' });
        }

        const atoken = jwt.sign({ id: admin.a_id }, JWT_SECRET, { expiresIn: 60 * 5 });
        res.json({
            atoken,
            admin: {
                id: admin.a_id,
            }
        });
    } catch (error) {
        res.status(500).alert({ message: 'Server error' });
    }
});

router.post('/contactus', async (req, res) => {
    try {
        const { email, subject, message } = req.body;
        const newContactUs = new ContactUs({ email, subject, message });
        await newContactUs.save();
        res.status(201).json({ message: 'successfully' });
    } catch (error) {
        console.error('Error :', error);
        res.status(500).json({ message: error.message });
    }
});

router.get('/getallcontactus', async (req, res) => {
    try {
      const Contacts = await ContactUs.find({});
      res.send(Contacts);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      return res.status(400).json({ message: error.message });
    }
  });

  // Endpoint to update the seen status of a contact message
router.put('/update-seen/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { seen } = req.body;
  
      const Contacts = await ContactUs.findByIdAndUpdate(id, { seen }, { new: true });
  
      if (!Contacts) {
        return res.status(404).json({ message: 'Contact not found' });
      }
  
      res.json(Contacts);
    } catch (error) {
      res.status(500).json({ message: 'Error updating contact status', error });
    }
  });

module.exports = router;
