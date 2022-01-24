const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  booking_type: {
    type: String,
    required: true,
  },
  booking_time: {
    type: Date,
  },
  location: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = User = mongoose.model("bookings", BookingSchema);
