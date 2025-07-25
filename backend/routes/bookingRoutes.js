const express = require("express");
const router = express.Router();
const Booking = require("../models/BookingModel");
const Bike = require("../models/BikeModel");
// @route   POST /api/bookings
// @desc    Create a new booking
router.post("/", async (req, res) => {
  try {
    const {
      bike,
      rentDuration,
      pickupTime,
      returnTime,
      firstName,
      lastName,
      phoneNumber,
      email,
      cardNumber,
      expiryDate,
      cvv,
    } = req.body;

    // Basic validation
    if (
      !bike || !rentDuration || !pickupTime || !returnTime ||
      !firstName || !lastName || !phoneNumber || !email ||
      !cardNumber || !expiryDate || !cvv
    ) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const booking = new Booking({
      bike,
      rentDuration,
      pickupTime,
      returnTime,
      firstName,
      lastName,
      phoneNumber,
      email,
      cardNumber,
      expiryDate,
      cvv,
    });

    const savedBooking = await booking.save();
    await Bike.findByIdAndUpdate(bike, { available: false });

    res.status(201).json(savedBooking);
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
