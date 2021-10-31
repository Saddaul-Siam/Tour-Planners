import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Footer.css";

const Footer = () => {
  const { user } = useAuth()
  return (
    <div>
      <div className="footer-container" style={{ paddingBottom: '30rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                <Link className="text-white text-decoration-none" to="/"><h2>Tour Planners</h2></Link>
                <br />
                <div className="icons-container d-flex text-center ">
                  <div>
                    <a className="icon" href="https://www.instagram.com/saddaul.siam/" > <i className="bi bi-instagram"></i></a>
                  </div>
                  <div>
                    <a className="icon" href="https://twitter.com/tuitardotcom?lang=en" > <i className="bi bi-twitter"></i></a>
                  </div>
                  <div>
                    <a className="icon" href="https://www.youtube.com/c/ProgrammingHero" > <i className="bi bi-youtube"></i></a>
                  </div>
                  <div>
                    <a className="icon" href="https://www.facebook.com/SaddaulSiam" >  <i className="bi bi-facebook"></i></a>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    Tour Planners is an online tour booking website in the world. created in 2021 by Saddaul Siam
                  </small>
                </p>
                <p className="mt-5">
                  <small>© All Copyright Tour Planners 2021</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="footer-menu-container">
                <ul>
                  <Link className="text-info text-decoration-none" to="/home"><li className="footer-menu">Home</li></Link>
                  <Link className="text-info text-decoration-none" to="/tours"><li className="footer-menu">Tours</li></Link>
                  <Link className="text-info text-decoration-none" to="/bookingDetails"><li className="footer-menu">Book Details</li></Link>
                  {user.email && <Link className="text-info text-decoration-none" to="/myOrders"><li className="footer-menu">My Orders</li></Link>}
                  <Link className="text-info text-decoration-none" to="/login"><li className="footer-menu">Login</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex justify-content-center left-container text-start">
                <div>
                  <h4><i className="bi bi-person-workspace"></i> Working hours</h4>
                  <p>Mon – Fri: 9 a.m. – 5 p.m.
                    Sat – Sun: Closed</p>
                  <h4><i className="bi bi-building"></i> Office: Dhaka, Bangladesh</h4>
                  <p><i className="bi bi-envelope"></i> Email:saddadul.siam@gmail.com</p>
                  <p><i className="bi bi-phone"></i> Phone: +8801311333277</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Footer;