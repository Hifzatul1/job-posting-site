const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to Database
connectDB();

// API Routes
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
