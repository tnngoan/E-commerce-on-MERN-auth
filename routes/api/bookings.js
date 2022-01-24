const express = require("express");
const router = express.Router();

// Load input validation
// const validateBookingInput = require("../../validation/booking");

// Load Booking model
const Booking = require("../../models/Booking");

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/create", (req, res) => {
  const booking_type = req.body.booking_type;
  const name = req.body.user.name;
  const location = req.body.location;
  const date = req.body.booking_date;

  // Create new booking
  const newBooking = new Booking({
    booking_type,
    name,
    location,
    date,
  });
  newBooking
    .save()
    .then((booking) => res.json(booking))
    .catch((err) => console.log(err));
});

router.get("/bookings", () => {
  // Check if user is admin
  Booking.find({});
});

module.exports = router;
