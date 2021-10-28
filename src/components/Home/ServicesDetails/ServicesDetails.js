import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServicesDetails = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  const { name, img, location, price, discription } = service;
  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${id}`)
      .then(rse => rse.json())
      .then(data => setService(data))
  }, [id]);
  return (
    <div className="container pt-5 padding">
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid w-75" src={img} alt="" />
        </div>
        <div className="col-md-5">
          <h2>{name}</h2>
          <h4> {location}</h4>
          <h6>Price:$ {price}</h6>
          <p>{discription}</p>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <Link to="/tours"><Button className="btn rounded-pill px-4" variant="primary">See all</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;