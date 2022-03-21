import React, { useEffect } from "react";
import BookingCard from "../booking/BookingCard";
const bookings = require("../../bookings.json");
const url = "http://localhost:5000/api/bookings";

function AdminDashboard() {
  useEffect(() => {
    const getBookings = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      return result;
    };
    getBookings();
  }, []);

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
