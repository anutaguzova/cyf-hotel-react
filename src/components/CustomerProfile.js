import React from "react";
import { useState, useEffect } from "react";

const CustomerProfile = ({ clickedButton }) => {
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${clickedButton}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfileInfo(data);
      });
  }, [clickedButton]);

  return profileInfo != null ? (
    <ul>
      <li>Customer id : {profileInfo.id}</li>
      <li>Customer id : {profileInfo.firstName}</li>
      <li>Customer id : {profileInfo.email}</li>
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default CustomerProfile;
