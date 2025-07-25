const express = require("express");
const router = express.Router();
const Booking = require("../models/BookingModel");
const Bike = require("../models/BikeModel");


// @route   POST /api/bookings

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
      serviceFee,
      subtotal,
      total,
    } = req.body;

    // Basic validation
    if (
      !bike || !rentDuration || !pickupTime || !returnTime ||
      !firstName || !lastName || !phoneNumber || !email ||
      !cardNumber || !expiryDate || !cvv ||!total
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
      serviceFee,
      subtotal,
      total,
      cardNumber,
      expiryDate,
      cvv,
    });
    const savedBooking = await booking.save();
    await Bike.findByIdAndUpdate(bike, { available: false });

    res.status(201).json({ bookingId: savedBooking._id });

  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/bookings/:id
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("bike");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    console.error("Error fetching booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
