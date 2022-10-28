import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
