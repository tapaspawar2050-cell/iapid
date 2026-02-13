// Importing React library
// React is needed to create components
import React from "react";

// Importing different sections (components) of the website
// Each one is like a different part of the homepage

import Hero from "../components/Hero";               // Top banner section
import About from "../components/About";             // About section
import AcademicPrograms from "../components/AcademicPrograms";  // Academic programs section
import AnnualConference from "../components/AnnualConference";  // Conference section
import Gallery from "../components/Gallery";         // Image gallery section

// This is Home component
// Home means the main page of the website
const Home = () => {

  // return means what we want to show on the screen
  return (

    // <main> is the main container of the page
    // w-full → full width
    // overflow-hidden → hides extra content if it goes outside
    <main className="w-full overflow-hidden">

      {/* Hero Section (Top Banner) */}
      {/* This is usually the first big section people see */}
      <Hero />

      {/* About Section */}
      {/* This shows information about the organization */}
      <About />

      {/* Academic Programs Section */}
      {/* This shows courses or programs */}
      <AcademicPrograms />

      {/* Annual Conference Section */}
      {/* This shows conference details */}
      <AnnualConference />

      {/* Gallery Section */}
      {/* This shows event photos */}
      <Gallery />

    </main>
  );
};

// Exporting Home component
// So we can use it inside App.js
export default Home;
