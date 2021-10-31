import React from 'react';
import { useHistory } from 'react-router';
import './Offers.css';

const Offers = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/tours')
  }
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-6 background1 d-flex justify-content-center align-items-center">
          <div className="text-start">
            <h4 className="text-light ">Enjoy Summer Deals</h4>
            <h1 className="text-white">Up to 30% Discount!</h1>
            <button onClick={handleClick} className="btn rounded-pill btn-info px-3 py-2  mt-5 fs-5">View Tours</button>
          </div>
        </div>
        <div className="col-md-6 background2">

        </div>
      </div>
    </div>
  );
};

export default Offers;