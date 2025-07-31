const express = require("express");
const router = express.Router();
const Booking = require("../models/BookingModel");
const Bike = require("../models/BikeModel");
const protect = require('../middleware/authMiddleware');


// @route   POST /api/bookings

router.post("/", protect, async (req, res) => {

  try {
    const userId = req.user.id; // assuming you have an auth middleware that adds req.user

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
    
    const bike_object = await Bike.findById(bike);
    
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
      user: userId,           // 👈 booker from JWT
      rentor: bike_object.userRef,           // 👈 assuming Bike has `owner: ObjectId` field
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
router.get("/booking/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("bike").populate("user");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    console.error("Error fetching booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});



router.get("/rentor-bookings", protect, async (req, res) => {
  try {
    const rentorId = req.user.id; // assuming the JWT middleware sets this

    const bookings = await Booking.find({ rentor: rentorId })
      .populate("bike")
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error("Error fetching Data:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// PATCH /api/bookings/return/:id
router.patch("/return/:id", protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("bike");
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // Update booking status
    booking.status = "completed";

    // Update bike availability
    if (booking.bike) {
      booking.bike.available = true;
      await booking.bike.save();
    }

    await booking.save();
    res.json({ message: "Booking marked as completed", booking });
  } catch (err) {
    console.error("Error updating booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH /api/bookings/return/:id
router.patch("/active/:id", protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("bike");
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // Update booking status
    booking.status = "active";

    // Update bike availability
    if (booking.bike) {
      booking.bike.available = false;
      await booking.bike.save();
    }

    await booking.save();
    res.json({ message: "Booking marked as Active", booking });
  } catch (err) {
    console.error("Error updating booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH /api/bookings/:id/cancel
router.patch('/bookings/:id/cancel', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking || booking.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    if (booking.status !== 'to be picked') {
      return res.status(400).json({ message: 'Only unpicked bookings can be cancelled' });
    }

    booking.status = 'not booked';
    await booking.save();

    res.json({ message: 'Booking cancelled' });
  } catch (err) {
    console.error('Cancel booking error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
