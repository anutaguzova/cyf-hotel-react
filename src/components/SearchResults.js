import React from "react";
import { useState } from "react";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [clickedRow, setClickedRow] = useState();
  const [order, setOrder] = useState("ASC");
  const [clickedButton, setClickedButton] = useState(0);

  function sorting(col) {
    if (order === "ASC") {
      const sorted = props.results.sort((a, b) => (a[col] > b[col] ? 1 : -1));
      props.setBookings(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = props.results.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      props.setBookings(sorted);
      setOrder("ASC");
    }
  }

  function changeColor(index) {
    setClickedRow(index);
  }

  function clickButton(id) {
    console.log(id);
    setClickedButton(id);
    // console.log(setClickedButton(index))
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => sorting("title")}>
              Title
            </th>
            <th scope="col" onClick={() => sorting("firstName")}>
              First name
            </th>
            <th scope="col" onClick={() => sorting("surname")}>
              Surname
            </th>
            <th scope="col" onClick={() => sorting("email")}>
              Email
            </th>
            <th scope="col" onClick={() => sorting("roomId")}>
              Room id
            </th>
            <th scope="col" onClick={() => sorting("checkInDate")}>
              Check in date
            </th>
            <th scope="col" onClick={() => sorting("checkOutDate")}>
              Check out date
            </th>
            <th scope="col" onClick={() => sorting("nights")}>
              Number of nights
            </th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((el, index) => {
            el.nights = differenceInCalendarDays(
              new Date(el.checkOutDate),
              new Date(el.checkInDate)
            );

            return (
              <tr
                key={index}
                onClick={() => changeColor(index)}
                className={clickedRow === index ? "grey" : "white"}
              >
                <th scope="row">{el.title}</th>
                <td>{el.firstName}</td>
                <td>{el.surname}</td>
                <td>{el.email}</td>
                <td>{el.roomId}</td>
                <td>{el.checkInDate}</td>
                <td>{el.checkOutDate}</td>
                <td>{el.nights}</td>
                <td>
                  <button id={el.id} onClick={() => clickButton(el.id)}>
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {clickedButton > 0 ? (
        <CustomerProfile clickedButton={clickedButton} />
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default SearchResults;
