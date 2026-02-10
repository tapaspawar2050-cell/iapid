import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import AcademicPrograms from "../components/AcademicPrograms"; 
import AnnualConference from "../components/AnnualConference";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Programs />
      <AcademicPrograms /> 
      <AnnualConference />
      <Gallery />
    </main>
  );
};

export default Home;