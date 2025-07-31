// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const protect = require('../../middleware/authMiddleware');


// GET /api/profile - Get a specific userinfo by ID
router.get('/profile', protect, async (req, res) => {
  try {
    const userInfo = await User.findById(req.user.id);

    if (!userInfo) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(userInfo);
  } catch (error) {
    console.error('Error fetching User Details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router