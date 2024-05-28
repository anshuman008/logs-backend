const express = require('express');
const mongoose = require('mongoose');
const log = require('./routes/log');
const app = express();
const PORT = 8080;
const cors = require('cors');
const dotenv = require('dotenv')


dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Connect to the database
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Failed to connect to DB", error);
        process.exit(1); // Exit the process with failure
    }
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is Started at Port ${PORT}`);
});

// Use the log router
app.use('/log', log);

// Connect to the database
connectDB();
