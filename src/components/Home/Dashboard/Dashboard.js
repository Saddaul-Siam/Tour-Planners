import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./dash.css";
const Dashboard = () => {
  const { user } = useAuth();
  const togle = () => {
    let el = document.getElementById("wrapper");
    let toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
  };

  return (
    <Container fluid className=" prim-bg d-flex" id="wrapper">
      <Row id="sidebar-wrapper">
        <Container className="text-center bg-white">
          <div className="sidebar-heading text-info text-center py-4 primary-text fs-4 fw-bold text-uppercase">
            <i className="fas fa-user-secret text-secondary"></i>{" "}
            {/* {admin ? "admin" : `${user.displayName}`} */}
            {user.displayName}
          </div>
          <ListGroup variant="flush" className=" text-start nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard`}
            >
              <ListGroup.Item className=" border-end-0 border-top-0 border-start-0 text-info">
                <i className="fas fa-home text-info"></i> Home
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/bookingDetails`}
            >
              <ListGroup.Item className=" border-end-0 border-top-0 border-start-0 text-info">
                <i className="fas fa-cart-plus text-info"></i> Cart
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/myOrders`}
            >
              <ListGroup.Item className=" border-end-0 border-top-0 border-start-0 text-info">
                <i className="fas fa-folder-plus text-info"></i> My Orders
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/review`}
            >
              <ListGroup.Item className=" border-end-0 border-top-0 border-start-0 text-info">
                <i class="fas fa-comment-alt"></i> Add review
              </ListGroup.Item>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/admin`}
            >
              <ListGroup.Item className=" border-end-0 border-top-0 border-start-0 text-info">
                <i className="fas fa-user-lock text-info"></i> Add Admin
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/addTours`}
            >
              <ListGroup.Item className=" border-end-0 border-top-0 border-start-0 text-info">
                <i className="fas fa-user-check text-info"></i> Add Tours{" "}
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/manageAllOrders`}
            >
              <ListGroup.Item className="border-end-0 border-top-0 border-start-0 text-info">
                <i class="fas fa-shopping-bag"></i> Manage All Orders
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/dashboard/manageProducts`}
            >
              <ListGroup.Item className="border-end-0 border-top-0 border-start-0 text-info">
                <i className="fas fa-cart-arrow-down text-info"></i>Manage
                Product
              </ListGroup.Item>
            </NavLink>
          </ListGroup>
        </Container>
      </Row>
      <Row id="page-content-wrapper">
        <div className="hamburger">
          <span className="ms-auto  fs-3">
            <i
              onClick={togle}
              className="fas fa-align-left green"
              id="menu-toggle"
            ></i>
          </span>
        </div>
        <Col className="main-content">
          <div className="content">
            <Outlet />
          </div>
          {/* nested routes */}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

/* import React, { useEffect, useState } from 'react';
import DashboardDetails from '../DashboardDetails/DashboardDetails';

const Dashboard = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);
  console.log(orders);
  return (
    <div className="">
      <h2 className="py-3">This is a Dashboard only use Admin</h2>
      <h4 className="py-3">All Orders Here :{orders.length}</h4>
      {
        orders.map(order => <DashboardDetails order={order} key={order._id}></DashboardDetails>)
      }
    </div>
  );
};

export default Dashboard; */
