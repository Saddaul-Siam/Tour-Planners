import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const BookingDetails = () => {
  const { user } = useAuth()
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false)
  const email = `${user.email}`;

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
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row  text-center">
              {orders?.map((pd) => (
                <div className="col-md-4">
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
          <div className="col-md-3">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingDetails;