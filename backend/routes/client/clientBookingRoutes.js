const Booking = require('../../models/BookingModel');
const express = require('express');
const router = express.Router();
const protect = require('../../middleware/authMiddleware.js');
const User = require('../../models/User.js');
// GET /api/client/rentals/current
router.get('/client/rentals/current', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.id})
      .populate('bike')
      .populate('rentor', 'first_name last_name phone email') // optional
      .sort({ startDate: -1 });

    res.status(200).json(bookings);
  } catch (err) {
    console.error('Error fetching current rentals:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/client/rentals/history
router.get('/client/rentals/history', protect, async (req, res) => {
  try {
    const history = await Booking.find({
      user: req.user.id,
      status: 'Completed',
    })
      .populate('bike')
      .sort({ endDate: -1 });

    res.status(200).json(history);
  } catch (err) {
    console.error('Error fetching rental history:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/client/profile
router.get('/client/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('first_name last_name email createdAt');

    res.json({
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
      memberSince: user.createdAt,
    });
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports=router;