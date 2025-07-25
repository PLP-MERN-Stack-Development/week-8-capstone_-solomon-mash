const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();
const express = require("express");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection error:", err));

app.use("/api/auth", authRoutes);
app.use('/api/bikes', require('./routes/bikes'));
app.use('/api/upload', uploadRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
