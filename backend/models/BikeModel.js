const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: String,
  owner: String,
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', // Reference to the User model
    required: true,
  },
  location: String,
  type: String,
  distance: String,
  rentPricePerDay: Number,
  bikeImages: [String], // Store array of image URLs
  tags: [String],
  available: Boolean,
  description: String,
  year: Number,
  color: String,
}, { timestamps: true });

module.exports = mongoose.model('Bike', bikeSchema);
