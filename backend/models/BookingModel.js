const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bike",
    required: true,
  },
  user: {  // ← the one booking the bike
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  rentor: {  // ← the owner of the bike
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  rentDuration: Number,
  pickupTime: String,
  returnTime: String,

  serviceFee: String,
  subtotal: String,
  total: String,

  // Consider changing these to Numbers for calculations
  // or we'll parseFloat() them in analytics APIs

  phoneNumber: String,
  email: String,

  // For security: consider removing or encrypting payment info
  cardNumber: String,
  expiryDate: String,
  cvv: String,

  status: {
    type: String,
    enum: ["to be picked", "active", "completed", "not booked"],
    default: "not booked",
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;