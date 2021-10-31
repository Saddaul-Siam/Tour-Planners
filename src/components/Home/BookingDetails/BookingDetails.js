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
    fetch(`https://tour-planners.herokuapp.com/myBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [email, isDeleted]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`https://tour-planners.herokuapp.com/deleteTours/${id}`, {
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
      <h1 className="pt-3">Tours Booking {booking.length}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row  text-center">
              {booking?.map((pd) => (
                <div className="col-md-4" key={pd._id}>
                  <div style={{ height: "800px" }} className="card mt-5 myCard ">
                    <div style={{ height: "300px" }} >
                      <img style={{ height: "300px" }} src={pd.img} className="card-img-top img-fluid" alt="..." />
                    </div>
                    <div className="card-body overflow-auto scrollbar-hidden">
                      <h5 className="card-title">{pd.name}</h5>
                      <strong className="card-text">{pd.location}</strong>
                      <p>{pd.description}</p>
                    </div>
                    <button onClick={() => handleDelete(pd._id)} className="btn btn-danger m-2">Remove Booking</button>
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
                    <td >Price</td>
                    <td >$ {dt.price}</td>
                  </tr>
                </tbody>
              </table></div>)
            }
            <button onClick={handleProcedToCheckout} className="btn btn-primary m-5">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BookingDetails;