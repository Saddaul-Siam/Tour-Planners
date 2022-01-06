import React, { useEffect, useState } from "react";
import ManageAllOrder from "./ManageAllOrder";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div className="">
      <h2 className="py-3">This is a Dashboard only use Admin</h2>
      <h4 className="py-3">All Orders Here :{orders.length}</h4>
      {orders.map((order) => (
        <ManageAllOrder order={order} key={order._id}></ManageAllOrder>
      ))}
    </div>
  );
};

export default ManageAllOrders;
