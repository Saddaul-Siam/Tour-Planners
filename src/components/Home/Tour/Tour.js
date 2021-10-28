import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Tour = ({ service }) => {
  const { name, img, location, price, _id } = service;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/service/${_id}`)
  }
  return (
    <div className="col-sm-6 col-md-6 col-lg-3">
      <Card className="border-0" style={{ width: '18rem' }}>
        <div className="inner">
          <Card.Img className="" variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{location}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button onClick={handleClick} variant="primary">Book Now</Button>
        </Card.Body>
      </Card>
    </div >
  );
};

export default Tour;