import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const { user } = useAuth()

  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then(res => res.json())
      .then(data => setTours(data))
  }, []);

  const handleAddToCart = (index) => {
    const data = tours[index];
    data.email = `${user.email}`;
    data.status = "pending";
    console.log(data);
    fetch(`http://localhost:5000/addOrders`, {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.insertedId) {
          alert("add hoise boss ");
        }
        else {
          alert("add korte pari nai");
        }
      });
  };
  return (
    <div>
      <h4>Modern & Beautiful</h4>
      <h1>Explore the World for Yourself</h1>
      <div className="container py-5">
        <div className="row">
          {
            tours.map((service, index) => <div className="col-sm-6 col-md-6 col-lg-3" key={service._id}>
              <Card className="border-0" style={{ width: '18rem' }}>
                <div className="inner">
                  <Card.Img className="" variant="top" src={service.img} />
                </div>
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.location}</Card.Text>
                  <Card.Text>{service.price}</Card.Text>
                  <Button onClick={() => handleAddToCart(index)} variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div >)
          }
        </div>
      </div>
    </div >
  );
};

export default Tours;