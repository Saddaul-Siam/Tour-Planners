/* import React, { useEffect, useState } from "react";
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
 */
import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
// import { useSelector } from "react-redux";

const ManageAllOrders = () => {
  let count = 0;
  const Swal = require("sweetalert2");
  const { user } = useAuth();
  // const user = useSelector((state) => state.statesCounter.user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "you will Cancel never back to many",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel order ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tour-planners.herokuapp.com/deleteOrders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your order cancel successful",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            }
          });
      }
    });
  };

  const handleStatusUpdate = (id) => {
    const status = {
      id: id,
      status: "approved",
    };
    console.log(status);
    fetch("https://tour-planners.herokuapp.com/orderStatusUpdate", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order approved successful",
          });
        }
      });
  };

  return (
    <Container fluid>
      <div className="d-flex justify-content-center pb-5">
        <h2>Manage All Orders</h2>
      </div>
      {orders.length ? (
        ""
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
      {orders.length && (
        <Table responsive striped bordered hover variant="dark">
          {/* table header */}
          <thead>
            <tr className="text-center">
              <th className="fs-3 text-white">Sl</th>
              <th className="fs-3 text-white">UserName</th>
              <th className="fs-3 text-white">Order_ID</th>
              <th className="fs-3 text-white">Payment</th>
              <th className="fs-3 text-white">Status</th>
              <th className="fs-3 text-white">Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {/* looping data */}

            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="fs-4 text-white ">{++count}</td>
                <td className="fs-4 text-white ">{order.name}</td>
                <td className="fs-4 text-white ">{order._id.slice(20, 25)}</td>
                <td className="fs-4 text-white ">
                  {order.payment ? "Paid" : "Unpaid"}
                </td>
                <td className="fs-4 text-white ">
                  {order.status === "approved" ? (
                    "Approved"
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => handleStatusUpdate(order._id)}
                    >
                      Approved
                    </Button>
                  )}
                </td>
                <td className="fs-4 text-white ">
                  <Button
                    variant="primary"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManageAllOrders;
