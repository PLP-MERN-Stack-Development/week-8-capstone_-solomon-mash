const express = require("express");
const router = express.Router();
const Booking = require("../../models/BookingModel");
const protect = require("../../middleware/authMiddleware");
const Bike = require('../../models/BikeModel');
const Rating = require("../../models/RatingModel");



router.get("/rentor", protect, async (req, res) => {
  try {
    const rentorId = req.user._id;
    const ratings = await Rating.find({ rentor: rentorId });

    const averageRating = ratings.length > 0
  ? (ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length).toFixed(2)
  : "N/A";

    const [bookings, bikes] = await Promise.all([
      Booking.find({ rentor: rentorId })
        .populate("user", "first_name last_name")
        .populate("bike", "name"),
      Bike.find({ "userRef": rentorId }),
    ]);

    const totalBookings = bookings.length;
    const totalBikes = bikes.length;
    const totalEarnings = bookings.reduce((sum, b) => sum + parseFloat(b.total), 0);
    const serviceCharge = bookings.reduce((sum, b) => sum + parseFloat(b.serviceFee || 0), 0);
    const netEarnings = totalEarnings - serviceCharge;

    const now = new Date();
    const thisMonth = now.getMonth();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const thisYear = now.getFullYear();
    const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;

    let earningsThisMonth = 0;
    let earningsLastMonth = 0;
    let serviceChargeThisMonth = 0;
    let serviceChargeLastMonth = 0;
    let completedBookings = 0;
    let totalRentDuration = 0;

    bookings.forEach(b => {
      const bookingDate = new Date(b.createdAt);
      const month = bookingDate.getMonth();
      const year = bookingDate.getFullYear();
      const amount = parseFloat(b.total);
      const fee = parseFloat(b.serviceFee || 0);

      if (month === thisMonth && year === thisYear) {
        earningsThisMonth += amount;
        serviceChargeThisMonth += fee;
      }

      if (month === lastMonth && year === lastMonthYear) {
        earningsLastMonth += amount;
        serviceChargeLastMonth += fee;
      }
    if (determineStatus(b) === "Completed") {
        completedBookings += 1;
      }
    totalRentDuration += b.rentDuration;
    });

    const netEarningsThisMonth = earningsThisMonth - serviceChargeThisMonth;
    const netEarningsLastMonth = earningsLastMonth - serviceChargeLastMonth;


    const bookingRate = totalBikes > 0 ? ((totalBookings / totalBikes)*100).toFixed(2) + '%' : "0.00";
    const returnRate = totalBookings > 0 ? ((completedBookings / totalBookings)*100).toFixed(2) + '%' : "0.00";
    const avgRentDuration = totalBookings > 0 ? (totalRentDuration / totalBookings).toFixed(1) : "0";


    const bookedRides = bookings.map(b => ({
      name: `${b.user.first_name} ${b.user.last_name}`,
      bike: `${b.bike.name}`,
      amountPaid: b.total,
      rentDuration: b.rentDuration,
      status: determineStatus(b),
    }));

    res.json({
      totalBookings,
      totalEarnings,
      serviceCharge,
      netEarnings,
      earningsThisMonth,
      earningsLastMonth,
      serviceChargeThisMonth,
      serviceChargeLastMonth,
      netEarningsThisMonth,
      netEarningsLastMonth,
      performance: {
        bookingRate,
        returnRate,
        avgRentDuration,
        averageRating,
      },
      bookedRides,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

function determineStatus(booking) {
  const now = new Date();
  const returnTime = new Date(booking.returnTime);
  const pickupTime = new Date(booking.pickupTime);

  if (now < pickupTime) return "To Be Picked";
  if (now >= pickupTime && now < returnTime) return "Active";
  return "Completed";
}

module.exports = router;
