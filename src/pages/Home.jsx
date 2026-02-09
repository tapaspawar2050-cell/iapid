import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import AnnualConference from "../components/AnnualConference";
import Gallery from "../components/Gallery";
import ConferenceCarousel from "../components/ConferenceCarousel";


const Home = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Programs />
      <AnnualConference />
        <ConferenceCarousel />
      <Gallery />
    </main>
  );
};

export default Home;
