// routes/favorites.js
const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Bike = require('../../models/BikeModel');
const protect = require('../../middleware/authMiddleware');

// GET /api/client/favorites
router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favorites');
    res.json(user.favorites);
  } catch (err) {
    console.error('Error fetching favorites:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/client/favorites/:bikeId
router.post('/:bikeId', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const bikeId = req.params.bikeId;
    if (!user.favorites.includes(bikeId)) {
      user.favorites.push(bikeId);
      await user.save();
      res.json({ message: 'Bike added to favorites' });
    } else {
      res.status(400).json({ message: 'Bike already in favorites' });
    }
  } catch (err) {
    console.error('Error adding to favorites:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /api/client/favorites/:bikeId
router.delete('/:bikeId', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const bikeId = req.params.bikeId;

    user.favorites = user.favorites.filter(fav => fav.toString() !== bikeId);
    await user.save();

    res.json({ message: 'Bike removed from favorites' });
  } catch (err) {
    console.error('Error removing from favorites:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
