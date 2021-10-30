import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const BookingDetails = () => {
  const { user } = useAuth()
  const [booking, setBooking] = useState([]);
  const history = useHistory();
  const [isDeleted, setIsDeleted] = useState(false);
  const email = `${user.email}`;

  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [email, isDeleted]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/deleteTours/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            alert('Deleted successfully')
          }
          setIsDeleted(result);
        })
    }
  };

  const handleProcedToCheckout = () => {
    history.push('/shipping')
  }

  return (
    <div>
      <h1>I am Dashboard {booking.length}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row  text-center">
              {booking?.map((pd) => (
                <div className="col-md-4">
                  <div className=" border p-2 m-2">
                    <img className="img-fluid" src={pd.img} alt="" />
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
            <h2>You added all tours</h2>
            {
              booking?.map(dt => <div><table className="table">
                <thead>
                  <tr>
                    <th scope="col">Tours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{dt.name}</td>
                  </tr>
                  <tr>
                    <td >Location:</td>
                    <td >{dt.location}</td>
                  </tr>
                  <tr>
                    <td >Price:</td>
                    <td >{dt.price}</td>
                  </tr>
                </tbody>
              </table></div>)
            }
            <button onClick={handleProcedToCheckout} className="btn btn-primary m-2">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BookingDetails;