import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  const handleAddToCart = (index) => {
    if (user.email) {
      const data = tours[index];
      data.email = `${user.email}`;
      data.status = "pending";
      console.log(data);
      fetch(`https://tour-planners.herokuapp.com/addBooking`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert(
              "Successfully Added !! See Details On Booking Details Route "
            );
            // window.location.reload();
          } else {
            alert("add korte pari nai");
          }
        });
    } else {
      history.push("/login");
    }
  };
  const handleClick = () => {
    history.push("/bookingDetails");
    window.location.reload();
  };
  return (
    <div>
      <h1 className="pt-5">Explore the World for Yourself</h1>
      <h5>Modern & Beautiful</h5>
      <div className="container py-5">
        <div className="row">
          {tours.map((service, index) => (
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
                    onClick={() => handleAddToCart(index)}
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
