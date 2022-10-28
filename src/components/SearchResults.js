import React from "react";

const SearchResults = props => {
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
        </tr>
      </thead>
      <tbody>
        {props.results.map((el, index) => (
          <tr key={index}>
            <th scope="row">{el.title}</th>
            <td>{el.firstName}</td>
            <td>{el.surname}</td>
            <td>{el.email}</td>
            <td>{el.roomId}</td>
            <td>{el.checkInDate}</td>
            <td>{el.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
