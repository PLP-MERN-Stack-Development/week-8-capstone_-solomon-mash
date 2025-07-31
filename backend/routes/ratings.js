// routes/ratings.js
const express = require("express");
const router = express.Router();
const Rating = require("../models/RatingModel");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, async (req, res) => {
  const { bike, rentor, booking, score, comment } = req.body;

  try {
    const existing = await Rating.findOne({ booking });
    if (existing) {
      return res.status(400).json({ error: "You have already rated this booking." });
    }

    const rating = await Rating.create({
      user: req.user._id,
      bike,
      rentor,
      booking,
      score,
      comment,
    });

    res.status(201).json(rating);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit rating" });
  }
});

module.exports = router;
