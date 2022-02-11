import React from "react";
require("dotenv").config();
const axios = require("axios");

function Bookings() {
  const data = JSON.stringify({
    collection: "bookings",
    database: "test",
    dataSource: "FullertonHealth",
    projection: {},
  });

  const config = {
    method: "get",
    url:
      "https://data.mongodb-api.com/app/data-qcgag/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.API_KEY,
    },
    data: data,
  };

  axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error);
    });
  return <div></div>;
}

export default Bookings;
