import React from "react";

function BookingForm({ props }) {
  return (
    <div className="flex-col border-2 border-black p-4 m-8 bg-black">
      <div className="flex justify-center">
        <p className="text-blue-700">{props.booking_type}</p>
        <p className="text-green-700">{props.status}</p>
      </div>
      <div>I am here</div>
      <p className="">{props.location}</p>
      <p className="">{props.booking_date}</p>
    </div>
  );
}

export default BookingForm;
