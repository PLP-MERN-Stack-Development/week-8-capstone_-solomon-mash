// const mongoose = require('mongoose');

// const bikeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
//   location: { type: String, required: true },
//   type: { type: String, enum: ['city', 'mountain', 'electric'], required: true },
//   distance: { type: String, required: true },
//   rentPricePerDay: { type: Number, required: true },
//   bikeImages: [{ type: String, required: true }], // <-- updated
//   tags: [{ type: String }],
//   available: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now },
//   description: { type: String, required: true },
//   year: { type: String, required: true },
//   color: { type: String, required: true },
// });


// module.exports = mongoose.model('Bike', bikeSchema);


// models/Bike.js
const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: String,
  owner: String,
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
