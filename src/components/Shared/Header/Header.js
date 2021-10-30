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
        <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link className="text-decoration-none text-white" to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-white" to="/tours">Tours</Link></Nav.Link>

            <Nav.Link><Link className="text-decoration-none text-white" to="/bookingDetails">Booking Details</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-white" to="/myOrders">My Orders</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-white" to="/bookingDetails"><i className="bi bi-cart2"></i> <span className="text-white text-decoration-none">{orders.length}</span></Link></Nav.Link>
            {
              user.email &&
              <Nav.Link><Link className="text-decoration-none text-white" to="/addTours">Add Tours</Link></Nav.Link>
            }
            {
              user.email &&
              <Nav.Link><Link className="text-decoration-none text-white" to="/dashboard">Dashboard</Link></Nav.Link>
            }
            {user.displayName ? <Nav.Link className="nav-link disabled " to="">{user.displayName}</Nav.Link>
              : <Link className="nav-link disabled" to="">{user.email}</Link>}

            {user.email ?
              <button onClick={SignOut} className="btn btn-info rounded-pill my-0">Log Out</button>
              : <Nav.Link><Link className="text-decoration-none text-white" to="/login">Login</Link></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Header;

