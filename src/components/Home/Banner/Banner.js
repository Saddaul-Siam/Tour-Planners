import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h3-rev-slider-img-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{paddingBottom:'40rem'}}>
            <h3>Welcome to tour planners</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-3-slider-image-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption style={{paddingBottom:'40rem'}}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-3-slider-image-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{paddingBottom:'40rem'}}>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;