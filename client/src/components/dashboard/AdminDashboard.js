import React from "react";
import BookingCard from "../booking/BookingCard";
const bookings = require("../../bookings.json");

function AdminDashboard() {
  const getBookings = () => {
    var axios = require("axios");
  
  };
  return (
    <>
      <h1>Welcome to Admin Dashboard</h1>
      {bookings.map((booking) => (
        <div className="border-2 border-gray-900">
          <BookingCard props={booking} />
        </div>
      ))}
    </>
  );
}

export default AdminDashboard;
