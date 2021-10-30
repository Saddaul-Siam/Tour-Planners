import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container" style={{paddingBottom:'30rem'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                <Link className="" to="/">
                  <img src="https://i.ibb.co/PgxWpBR/logo-main-img.png" alt="" width="168" height="44" /></Link>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <i className="fab fa-instagram-square"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-twitter-square"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-youtube-square"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-facebook-square"></i>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    ProMedica is an online Hospitals in Bangladesh created in 2021 by Saddaul Siam
                  </small>
                </p>

                <p className="mt-5">
                  <small>© All Copyright ProMedica 2021</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="footer-menu-container">
                <ul>
                  <Link className="text-info text-decoration-none" to="/home"><li className="footer-menu">Home</li></Link>
                  <Link className="text-info text-decoration-none" to="/services"><li className="footer-menu">Services</li></Link>
                  <Link className="text-info text-decoration-none" to="/doctors"><li className="footer-menu">Doctors</li></Link>
                  <Link className="text-info text-decoration-none" to="/about"><li className="footer-menu"> About us</li></Link>
                  <Link className="text-info text-decoration-none" to="/login"><li className="footer-menu">Login</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex justify-content-center left-container text-start">
                <div>
                  <h4>Working hours</h4>
                  <p>Mon – Fri: 9 a.m. – 5 p.m.
                    Sat – Sun: Closed</p>
                  <h4><i className="fas fa-hospital-alt"></i> Hospital: Pabna, Dahaka, Bangladesh</h4>
                  <p><i className="fas fa-envelope"></i> Email:saddadul.siam@gmail.com</p>
                  <p><i className="fas fa-phone-alt"></i> Phone: +8801311333277</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;