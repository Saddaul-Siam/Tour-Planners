import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { addToDb } from "../../../utilities/fakedb";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  const handleAddToDb = (id) => {
    addToDb(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add to cart successful",
    }).then((result) => {
      if (result.isConfirmed) {
        // window.location.reload();
      }
    });
  };
  const handleClick = () => {
    navigate("/bookingDetails");
    window.location.reload();
  };
  return (
    <div>
      <h1 className="pt-5">Explore the World for Yourself</h1>
      <h5>Modern & Beautiful</h5>
      <div className="container py-5">
        <div className="row">
          {tours.map((service) => (
            <div className="col-sm-6 col-md-6 col-lg-3" key={service._id}>
              <div className="card mt-5 myCard" style={{ minHeight: "37rem" }}>
                <div className="inner">
                  <img
                    style={{ height: "300px" }}
                    src={service.img}
                    className="card-img-top img-fluid p-2"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{service.name}</h4>
                  <strong className="card-text">{service.location}</strong>
                  <p className="text-start">
                    {service.description
                      .split(" ")
                      .slice(0, 20)
                      .toString()
                      .replace(/,/g, " ")}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <h4>Price: $ {service.price}</h4>
                  <Button
                    onClick={() => handleAddToDb(service._id)}
                    variant="info"
                    className="rounded-pill"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-info rounded-pill mt-5"
          onClick={handleClick}
        >
          Booking Details
        </button>
      </div>
    </div>
  );
};

export default Tours;
