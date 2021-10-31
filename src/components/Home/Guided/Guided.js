import React from 'react';
import './Guided.css';

const Guided = () => {
  return (
    <div className="py-5">
      <div className="background">
        <div className="container">
          <div className="row padding">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-start">
              <h4 className="text-info">Know More About Our Guided Tours</h4>
              <h1 className="text-white">Find your dream tour today! Take a look at our most popular Tours</h1>
              <button className="btn btn-info p-2 text-white mt-5 fs-5">View Tours</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guided;