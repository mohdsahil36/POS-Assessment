import React from "react";

const UserDetails = ({ details }) => {
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Phone: {details.phone}</p>
      <p>Address: {details.address}</p>
      <p>Bio: {details.bio}</p>
    </div>
  );
};

export default UserDetails;
