import { parseWithOptions } from "date-fns/fp";
import React from "react";

const CustomerProfile = proprs => {
  return <div className="profile">Customer {proprs.clickedButton} profile</div>;
};

export default CustomerProfile;
