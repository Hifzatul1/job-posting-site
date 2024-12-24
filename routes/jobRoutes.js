const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// Add a new job
router.post("/", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch job by ID
router.get("/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;