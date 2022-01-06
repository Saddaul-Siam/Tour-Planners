import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Orders from "../Orders/Orders";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrders] = useState([]);
  console.log(myOrder);
  const email = user.email;
  // console.log(email);
  useEffect(() => {
    fetch(`https://tour-planners.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);

  return (
    <div>
      <h2 className="py-5">This is my orders :{myOrder.length}</h2>
      {myOrder.map((order) => (
        <Orders key={order._id} order={order}></Orders>
      ))}
    </div>
  );
};

export default MyOrders;
