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
  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/"> <Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home"> <Nav.Link>Home</Nav.Link></Link>

            <Link to="/tours"> <Nav.Link>Tours</Nav.Link></Link>

            <Link to="/addTours"><Nav.Link>Add Tours</Nav.Link></Link>

            <Link to="/bookingDetails"><Nav.Link>Booking Details</Nav.Link></Link>

            <Link to="/bookingDetails"><Nav.Link><i className="bi bi-cart2"></i> {orders.length}</Nav.Link></Link>

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

