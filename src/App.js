// Importing React library
// React is used to create website components
import React from "react";

// Importing Router tools from react-router-dom
// These help us move between pages without reloading website
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Header and Footer
// These will appear on every page
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing all pages of website
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Membership from "./pages/Membership";
import Conference from "./pages/Conference";
import GalleryPage from "./pages/GalleryPage";
import APIAP2025 from "./pages/AP_IAP_2025";
import Newsletter from "./pages/Newsletter";
import Programs from "./pages/Programs";

// Main App function
// This controls the whole website
function App() {

  // return means what we want to show on screen
  return (

    // Router wraps the whole website
    // It enables page navigation
    <Router>

      {/* Header appears on top of every page */}
      <Header />

      {/* Routes section decides which page to show */}
      <Routes>

        {/* 
          path="/" means home page
          When user visits website.com/
          It shows Home component
        */}
        <Route path="/" element={<Home />} />

        {/* About page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Newsletter page */}
        <Route path="/newsletter" element={<Newsletter />} />

        {/* Membership page */}
        <Route path="/membership" element={<Membership />} />

        {/* Conference page */}
        <Route path="/conference" element={<Conference />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* AP IAP 2025 page */}
        <Route path="/ap-iap-2025" element={<APIAP2025 />} />

        {/* Programs page */}
        <Route path="/program" element={<Programs />} />

      </Routes>

      {/* Footer appears at bottom of every page */}
      <Footer />

    </Router>
  );
}

// Exporting App component
// So it can be used in index.js
export default App;
