import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BookingDetails = () => {
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false)
  const email = "ami@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email, isDeleted]);
  // console.log(orders);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteTours/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(result => {
        setIsDeleted(result);

      })
  }

  return (
    <div>
      <h1>I am Dashboard {orders.length}</h1>
      <div className="all-products">
        <div className="row container text-center">
          {orders?.map((pd) => (
            <div className="col-md-6 col-lg-4">
              <div className=" border border p-2 m-2">
                <h4>{pd?.email}</h4>
                <h5>{pd?.name}</h5>
                <h5>{pd?.price}</h5>
                <h6>{pd?.discription}</h6>
                <button onClick={() => handleDelete(pd._id)} className="btn btn-danger m-2">delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BookingDetails;