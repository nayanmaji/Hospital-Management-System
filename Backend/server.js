require('dotenv').config()
const express = require('express');
const connectDB = require('./mongodb');

const drRoutes = require('./Routes/drRoutes');
const bookApt = require('./Routes/appointmentRoutes');
const PatientRoute = require('./Routes/PatientRoute');
const adminRoute = require('./Routes/adminRoutes');
const app = express();

const startServer = async () => {
    await connectDB();
    app.use(express.json());
    app.use(process.env.drRoutes, drRoutes);
    app.use(process.env.PatientRoute,PatientRoute);
    app.use(process.env.bookApt,bookApt);
    app.use(process.env.adminRoute,adminRoute);

    app.listen(process.env.SERVER_PORT, () => {
        console.log('Server is running');
    });
};



startServer();
