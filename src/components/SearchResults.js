import React from "react";
import { useState } from "react";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

const SearchResults = props => {
  const [color, setColor] = useState("white");
  function changeColor(e) {
    if (e.target.parentElement.style.backgroundColor == "white") {
      setColor((e.target.parentElement.style.backgroundColor = "grey"));
    } else {
      setColor((e.target.parentElement.style.backgroundColor = "white"));
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((el, index) => (
          <tr key={index} onClick={changeColor}>
            <th scope="row">{el.title}</th>
            <td>{el.firstName}</td>
            <td>{el.surname}</td>
            <td>{el.email}</td>
            <td>{el.roomId}</td>
            <td>{el.checkInDate}</td>
            <td>{el.checkOutDate}</td>
            <td>
              {differenceInCalendarDays(
                new Date(el.checkOutDate),
                new Date(el.checkInDate)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
