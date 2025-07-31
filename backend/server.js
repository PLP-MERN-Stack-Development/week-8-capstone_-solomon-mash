const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
const bookingRoutes = require("./routes/bookingRoutes");
const userBikeRoutes = require('./routes/rentor'); // adjust path if needed
const statsRoutes = require('./routes/stats');
const analyticsRoutes = require("./routes/analytics/stats");
const ratingRoutes = require("./routes/ratings");
const ratingByIdRoutes = require("./routes/api/ratingRoutes");
const getBikesById=require('./routes/dashboardroutes');
const clientBookingRoutes = require('./routes/client/clientBookingRoutes');
const favoritesRoutes = require('./routes/client/favorites');
const userInfoRoutes = require('./routes/client/profile');


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
app.use('/api/', userBikeRoutes);
app.use('/api/', statsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/ratingz", ratingByIdRoutes);
app.use('/api/bikes/users', getBikesById);
app.use('/api/', clientBookingRoutes);
app.use('/api/client/favorites', favoritesRoutes);
app.use('/api', userInfoRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
