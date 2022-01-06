import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const [orders, setOrders] = useState([]);
  const { user, SignOut } = useAuth();

  const email = `${user.email}`;
  useEffect(() => {
    fetch(`https://tour-planners.herokuapp.com/myBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none text-white" to="/">
            Tour Planners
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="text-decoration-none text-white bg-dark"
                to="/home"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="text-decoration-none text-white bg-dark"
                to="/tours"
              >
                Tours
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="text-decoration-none text-white bg-dark"
                to="/bookingDetails"
              >
                Booking Details
              </NavLink>
            </Nav.Link>

            {user.email && (
              <Nav.Link>
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  className="text-decoration-none text-white bg-dark"
                  to="/myOrders"
                >
                  My Orders
                </NavLink>
              </Nav.Link>
            )}
            <Nav.Link>
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="text-decoration-none text-white bg-dark"
                to="/bookingDetails"
              >
                <i className="bi bi-cart2"></i>{" "}
                <span className="text-white text-decoration-none">
                  {orders.length}
                </span>
              </NavLink>
            </Nav.Link>
            {user.email && (
              <Nav.Link>
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  className="text-decoration-none text-white bg-dark"
                  to="/addTours"
                >
                  Add Tours
                </NavLink>
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link>
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  className="text-decoration-none text-white bg-dark"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </Nav.Link>
            )}
            {user.displayName ? (
              <Nav.Link className="nav-link disabled " to="">
                {user.displayName}
              </Nav.Link>
            ) : (
              <Link className="nav-link disabled" to="">
                {user.email}
              </Link>
            )}

            {user.email ? (
              <button
                onClick={SignOut}
                className="btn btn-info rounded-pill my-0"
              >
                Log Out
              </button>
            ) : (
              <Nav.Link>
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  className="text-decoration-none text-white"
                  to="/login"
                >
                  Login
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
