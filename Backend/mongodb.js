const mongoose = require('mongoose');

const mongourl = process.env.MongoDB;

const connectDB = async () => {
    try {
        await mongoose.connect(mongourl);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;