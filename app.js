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
const allowedOrigins = ['http://localhost:3000', 'https://job-posting-site-1-7qrm.onrender.com', 'https://www.hireeco.in'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
