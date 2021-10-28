import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    <div>
      <h4>Modern & Beautiful</h4>
      <h1>Explore the World for Yourself</h1>
      <div className="container py-5">
        <div className="row">
          {
            services.map(service => <Tour key={service._id} service={service} ></Tour>)
          }
        </div>
      </div>
    </div >
  );
};

export default Tours;