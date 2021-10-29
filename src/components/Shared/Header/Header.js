import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const [orders, setOrders] = useState([]);
  const { user, SignOut } = useAuth()

  const email = `${user.email}`;
  // console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  },[email]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/tours">Tours</Link></Nav.Link>
            <Nav.Link><Link to="/addTours">Add Tours</Link></Nav.Link>
            <Nav.Link><Link to="/bookingDetails">Booking Details</Link></Nav.Link>
            <Nav.Link><Link to="/bookingDetails"><i class="bi bi-cart2"></i> {orders.length}</Link></Nav.Link>
            {user.displayName ? <Nav.Link className="nav-link disabled text-white" to="">{user.displayName}</Nav.Link>
              : <Link className="nav-link disabled" to="">{user.email}</Link>}

            {user.email ?
              <button onClick={SignOut}>Log Out</button>
              : <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Header;

