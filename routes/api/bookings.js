const express = require("express");
const router = express.Router();
require("dotenv").config();

// Load input validation
// const validateBookingInput = require("../../validation/booking");

// Load Booking model
const Booking = require("../../models/Booking");

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/bookings", (req, res) => {
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

router.get("/bookings", (req, res) => {
  var data = JSON.stringify({
    collection: "bookings",
    database: "test",
    dataSource: "FullertonHealth",
    projection: {
      _id: 1,
    },
  })
    .then((bookings) => bookings.json(booking))
    .catch((err) => console.log(err));
});

module.exports = router;
