const express = require('express');
const router = express.Router();
const Booking = require('../models/BookingModel');
const protect = require('../middleware/authMiddleware');
const User = require('../models/User');



// GET /api/stats/rentor/:rentorId
router.get('/stats/rentor/:rentorId', async (req, res) => {
  const { rentorId } = req.params;  try {
    const bookings = await Booking.find({ rentor: rentorId });
    
    const totalEarnings = bookings.reduce((sum, b) => sum + parseFloat(b.total), 0);
    const totalBookings = bookings.length;
    const activeRides = bookings.filter(b => b.status === "active").length;
    const avgRating = (
      bookings.reduce((sum, b) => sum + (b.rating || 0), 0) /
      bookings.filter(b => b.rating).length
    ).toFixed(1);

    res.json({
      totalEarnings,
      totalBookings,
      activeRides,
      averageRating: isNaN(avgRating) ? 0 : avgRating,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to compute stats" });
  }
});

// GET /api/stats/client
router.get('/stats/client', protect, async (req, res) => {
  const clientId = req.user.id; 
  
  try {
    const bookings = await Booking.find({ user: clientId });
    const favorites = await User.findById(clientId);
    const favoritesLength = favorites.favorites.length;

    const bookedRides = bookings.length
    const activeRides = bookings.filter(b => b.status === "active").length;
    const avgRating = (
      bookings.reduce((sum, b) => sum + (b.rating || 0), 0) /
      bookings.filter(b => b.rating).length
    ).toFixed(1);

    res.json({
      favoritesLength,
      bookedRides,
      activeRides,
      averageRating: isNaN(avgRating) ? 0 : avgRating,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to compute stats" });
  }
});

module.exports = router;
