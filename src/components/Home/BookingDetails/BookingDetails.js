/* import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const BookingDetails = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  const email = `${user.email}`;

  useEffect(() => {
    fetch(`https://tour-planners.herokuapp.com/myBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [email, isDeleted]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://tour-planners.herokuapp.com/deleteTours/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Deleted successfully");
          }
          setIsDeleted(result);
        });
    }
  };

  const handleProcedToCheckout = () => {
    navigate("/shipping");
  };

  return (
    <div>
      <h1 className="pt-3">Tours Booking {booking.length}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row  text-center">
              {booking?.map((pd) => (
                <div className="col-md-4" key={pd._id}>
                  <div
                    style={{ height: "800px" }}
                    className="card mt-5 myCard "
                  >
                    <div style={{ height: "300px" }} className="inner">
                      <img
                        style={{ height: "300px" }}
                        src={pd.img}
                        className="card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="card-body overflow-auto scrollbar-hidden">
                      <h5 className="card-title">{pd.name}</h5>
                      <strong className="card-text">{pd.location}</strong>
                      <p>{pd.description}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(pd._id)}
                      className="btn btn-danger m-2"
                    >
                      Remove Booking
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <h2>You added all tours</h2>
            {booking?.map((dt) => (
              <div>
                <table className="table">
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
                      <td>Location:</td>
                      <td>{dt.location}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>$ {dt.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
            <button
              onClick={handleProcedToCheckout}
              className="btn btn-info rounded-pill m-5"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
 */

import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { getStoredCart, removeFromDb } from "../../../utilities/fakedb";

const BookingDetails = () => {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  console.log(carts);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product._id === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCarts(storedCart);
    }
  }, [products]);

  for (const product of carts) {
    const total = parseInt(product.price) * parseInt(product.quantity);
    product.total = total;
  }

  let totalShoppingCost = 0;
  for (const product of carts) {
    totalShoppingCost = totalShoppingCost + product.total;
  }

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    })
      .then((result) => {
        if (result.isConfirmed) {
          removeFromDb(id);
        }
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const handleOrder = () => {
    const order = {};
    order.user = user.displayName;
    order.email = user.email;
    order.order = carts;
    order.status = "pending";
    fetch("https://limitless-hollows-74908.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate(`/contactInformation/${data.insertedId}`);
        }
      });
  };
  return (
    <div className="bg-secondary p-3">
      <Row>
        <Col xs={12} md={8}>
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {carts.length && (
              <tbody>
                {carts?.map((pd) => (
                  <tr key={pd._id}>
                    <td>
                      <img width="100" height="100" src={pd.img} alt="" />
                    </td>
                    <td>
                      <p className="text-white">{pd.name}</p>
                    </td>
                    <td>
                      <p className="text-white">$ {pd.price}</p>
                    </td>
                    <td>
                      <p>{pd.quantity}</p>
                    </td>
                    <td>
                      <p className="text-white">$ {pd.total}</p>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleRemove(pd._id)}
                        variant="primary"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
        </Col>
        <Col xs={12} md={4}>
          <h4 className="text-black ms-4 py-2">Cart Totals</h4>
          <Row className="text-black d-flex justify-content-center">
            <Col xs={12} md={5} className="py-3 border text-white">
              Subtotal
            </Col>
            <Col xs={12} md={5} className="py-3 border text-white">
              $ {totalShoppingCost}
            </Col>
            <Col xs={12} md={5} className="py-3 border text-white">
              Total
            </Col>
            <Col xs={12} md={5} className="py-3 border text-white">
              $ {totalShoppingCost}
            </Col>
          </Row>
          {carts.length && (
            <Button
              variant="primary"
              className="ms-4 mt-3 text-white"
              onClick={handleOrder}
            >
              Proceed to checkout
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BookingDetails;
