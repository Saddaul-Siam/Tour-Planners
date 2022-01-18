import React from "react";
import { Carousel } from "react-bootstrap";

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
          <Carousel.Caption style={{ paddingBottom: "40rem" }}>
            <h1>Welcome To Tour Planners</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-3-slider-image-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption style={{ paddingBottom: "40rem" }}>
            <h1>Explore The World For Yourself</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-3-slider-image-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{ paddingBottom: "40rem" }}>
            <h1>Booking Tours On 'Tour Planners' And Explore The World</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
