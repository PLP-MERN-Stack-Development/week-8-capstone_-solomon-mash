const express = require("express");
const router = express.Router();
const Rating = require("../../models/RatingModel");
const Bike = require("../../models/BikeModel");
const protect = require("../../middleware/authMiddleware");

// GET /api/ratings/:rentorId
router.get("/:rentorId", protect, async (req, res) => {
  try {
    const rentorId = req.params.rentorId;

    // Find all bikes owned by this rentor
    const bikes = await Bike.find({ userRef: rentorId }).select("_id");

    const bikeIds = bikes.map(bike => bike._id);

    // Find ratings for these bikes
    const ratings = await Rating.find({ bike: { $in: bikeIds } })
      .populate("user", "first_name last_name")
      .populate("bike", "name");

    const totalRatings = ratings.length;
    const averageRating =
      totalRatings > 0
        ? (ratings.reduce((sum, r) => sum + r.rating, 0) / totalRatings).toFixed(2)
        : "0.00";

    res.json({ averageRating, totalRatings, ratings });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch ratings" });
  }
});

module.exports = router;
