const express = require('express');
const router = express.Router();
const Bike = require('../models/BikeModel');
const protect = require('../middleware/authMiddleware');


// GET /api/bikes/rentor - Get all bikes by rentor (from token)
router.get('/rentor', protect, async (req, res) => {
  const rentorId = req.user.id;

  try {
    const bikes = await Bike.find({ userRef: rentorId });

    if (!bikes || bikes.length === 0) {
      return res.status(404).json({ message: 'No bikes found for this rentor' });
    }

    res.status(200).json(bikes);
  } catch (error) {
    console.error('Error fetching bikes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
