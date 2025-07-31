// routes/bikes.js or routes/users.js depending on organization
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Bike = require('../models/BikeModel');

// GET /api/users/:id/bikes
router.get('/users/:id/bikes', async (req, res) => {
  try {
    const userId = req.params.id;

    // Get user
    const user = await User.findById(userId).select('first_name last_name');
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Get bikes uploaded by the user
    const bikes = await Bike.find({ userRef: userId });
    if (!user) return res.status(404).json({ message: 'Bike not found' });


    res.json({
      userId: user._id,
      name: `${user.first_name} ${user.last_name}`,
      bikes,
    });
  } catch (error) {
    console.error('Error fetching user bikes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
