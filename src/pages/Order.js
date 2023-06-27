import React from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  return (
    <div className="order">
      <h1>{location.state?.msg}</h1>
    </div>
  );
};

export default Order;