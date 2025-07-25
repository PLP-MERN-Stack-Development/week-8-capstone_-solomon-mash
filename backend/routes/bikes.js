const express = require('express');
const router = express.Router();
const Bike = require('../models/BikeModel');

router.post('/', async (req, res) => {
  try {
    const bike = new Bike(req.body);
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(500).json({ error: 'Bike creation failed.' });
  }
});

// GET /api/bikes - Get all bikes
router.get('/', async (req, res) => {
  try {
    const bikes = await Bike.find({ available: true }).sort({ createdAt: -1 });
    res.status(200).json(bikes);
  } catch (err) {
    console.error('Error fetching bikes:', err);
    res.status(500).json({ error: 'Server error while fetching bikes' });
  }
});


// GET /api/bikes/:id - Get a specific bike by ID
router.get('/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);

    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }

    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching bike:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
