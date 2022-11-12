import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    const filterArr = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    console.log(filterArr);
    setBookings(filterArr);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;
