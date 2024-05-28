const router = require('express').Router();
const Log = require('../models/logmodel');

// Get all logs
router.get('/', async (req, res) => {
    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (error) {
        res.json({ message: error });
    }
});

// Get logs by date
router.get('/date/:date', async (req, res) => {
    const date = new Date(req.params.date);
    // Ensure the date is in ISO format to ignore time
    const startOfDay = new Date(date.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setUTCHours(23, 59, 59, 999));

    try {
        const logs = await Log.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });
        res.json(logs);
    } catch (error) {
        res.json({ message: error });
    }
});

// Post a log
router.post('/', async (req, res) => {
    const log = new Log(req.body);
    try {
        const savedLog = await log.save();
        res.json(savedLog);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
