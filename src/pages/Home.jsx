import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import AnnualConference from '../components/AnnualConference';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <AnnualConference />
      <Gallery />
    </div>
  );
};

export default Home;