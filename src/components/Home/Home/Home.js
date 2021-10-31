import React from 'react';
import Banner from '../Banner/Banner';
import Guided from '../Guided/Guided';
import Offers from '../Offers/Offers';
import Tours from '../Tours/Tours';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tours></Tours>
      <Guided></Guided>
      <Offers></Offers>
    </div>
  );
};

export default Home;