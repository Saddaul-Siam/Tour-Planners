import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Orders from "../Orders/Orders";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrders] = useState([]);
  const email = user.email;
  // console.log(email);
  useEffect(() => {
    fetch(`https://tour-planners.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);

  return (
    <div>
      <div className="pb-5">
        <h2>My orders: {myOrder.length}</h2>
      </div>
      {myOrder.map((order) => (
        <Orders key={order._id} order={order}></Orders>
      ))}
    </div>
  );
};

export default MyOrders;
