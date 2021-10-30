import React, { useState } from 'react';

const Orders = (props) => {
  // console.log(props);
  const orders = props.order?.order;
  // const [order, setOrder] = useState({})

  const { name, email, address, city, phone } = props.order;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Orders Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{name}</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <td >Email:</td>
                <td >{email}</td>
              </tr>
              <tr>
                <td >Address:</td>
                <td >{address}</td>
              </tr>
              <tr>
                <td >City:</td>
                <td >{city}</td>
              </tr>
              <tr>
                <td >Phone:</td>
                <td >{phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-8">
          <div className="d-flex flex-column">
            {
              orders.map(od => <div className="d-flex pb-5 justify-content-evenly">
                <img width="150px" src={od.img} alt="" />
                <h4>{od.name}</h4>
                <p>{od.status}</p>
              </div>)
            }
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Orders;
