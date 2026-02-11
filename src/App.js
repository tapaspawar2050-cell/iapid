import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Membership from "./pages/Membership";
import Conference from "./pages/Conference";
import GalleryPage from "./pages/GalleryPage";
import APIAP2025 from "./pages/AP_IAP_2025";
import Newsletter from "./pages/Newsletter";
import Programs from "./pages/Programs";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/ap-iap-2025" element={<APIAP2025 />} />
        <Route path="/program" element={<Programs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
