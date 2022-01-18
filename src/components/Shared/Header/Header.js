import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { getStoredCart } from "../../../utilities/fakedb";

const Header = () => {
  const { user, SignOut } = useAuth();
  const saveCart = getStoredCart();
  console.log(saveCart);
  const [qut, setQut] = useState();

  useEffect(() => {
    let quantity = 0;
    for (const key in saveCart) {
      quantity += parseInt(saveCart[key]);
    }
    setQut(quantity);
  }, [saveCart, qut]);
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                to="/dashboard/bookingDetails"
              >
                <i className="bi bi-cart2"></i>{" "}
                <span className="text-white text-decoration-none">{qut}</span>
              </NavLink>
            </Nav.Link>
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
            {user?.email && (
              <img
                height="40"
                width="40"
                className="rounded-pill mx-3"
                src={
                  user?.photoURL ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sWItJHAxNH9OOPWQ9urcp2EaSKTu-Cw4UA&usqp=CAU"
                }
                alt=""
              />
            )}
            {user.email ? (
              <button
                onClick={SignOut}
                className="btn btn-info rounded-pill my-0 mx-1"
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
