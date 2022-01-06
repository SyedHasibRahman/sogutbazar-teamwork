import React from "react";
import SingleOrder from "./SingleOrder";

const orders = [
  {
    _id: "oidao23oi90aoi",
    category: "Harbal",
    name: "Adult Thai Diaper",
    price: 44,
    placedAt: "12/28/2021, 10:23:21 AM",
    orderStatus: "Pending",
  },
  {
    _id: "oidao23oi9sdoi",
    category: "Harbal",
    name: "Adult Thai Diaper",
    price: 44,
    placedAt: "12/28/2021, 10:23:21 AM",
    orderStatus: "Pending",
  },
  {
    _id: "oidao2wew90aoi",
    category: "Harbal",
    name: "Adult Thai Diaper",
    price: 44,
    placedAt: "12/28/2021, 10:23:21 AM",
    orderStatus: "Pending",
  },
];

const MyOrders = () => {
  return (
    <div
      className="form-container mt-0 text-dark"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="">
        <h2 className="text-center text-dark">My Orders</h2>
      </div>
      <div>
        {orders.map((order) => (
          <SingleOrder key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MyOrders; 
