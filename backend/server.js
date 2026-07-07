const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 LifePayAI Backend Running Successfully",
  });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "LifePayAI API Working Successfully",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});