import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = searchVal => {
    const filterArr = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    console.log(filterArr);
    setBookings(filterArr);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          throw new Error("SOmething bad with connection");
        }
        return res.json();
      })
      .then(
        data => {
          setBookings(data);
          setLoading(false);
        },
        error => {
          setError(error.toString());
          console.log(error);
          setLoading(false);
        }
      );
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <p>The bookings are loading...</p>
        ) : error != "" ? (
          <p>{error}</p>
        ) : (
          <SearchResults results={bookings} setBookings={setBookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
