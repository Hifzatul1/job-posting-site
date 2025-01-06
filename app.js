const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const dotenv = require('dotenv');
dotenv.config();

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://job-posting-site-1.onrender.com', 'https://www.hireeco.in/' ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Connect to Database
connectDB();

app.get('/', (req,res) => 
    {
    res.send('Welcome to the Job posting Site!');
});
// API Routes
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
