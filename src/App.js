// Importing React library
import React from "react";

// Importing Router tools
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Membership from "./pages/Membership";
import Conference from "./pages/Conference";
import GalleryPage from "./pages/GalleryPage";
import GalleryFolder from "./pages/GalleryFolder";   // ✅ NEW
import APIAP2025 from "./pages/AP_IAP_2025";
import Newsletter from "./pages/Newsletter";
import Programs from "./pages/Programs";

function App() {
  return (
    <Router>

      {/* Header - Visible on all pages */}
      <Header />

      {/* Main Routes */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Newsletter */}
        <Route path="/newsletter" element={<Newsletter />} />

        {/* Membership */}
        <Route path="/membership" element={<Membership />} />

        {/* Conference */}
        <Route path="/conference" element={<Conference />} />

        {/* Gallery Main Page */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* ✅ Dynamic Gallery Folder Page */}
        <Route path="/gallery/:folderName" element={<GalleryFolder />} />

        {/* AP IAP 2025 */}
        <Route path="/ap-iap-2025" element={<APIAP2025 />} />

        {/* Programs */}
        <Route path="/program" element={<Programs />} />

      </Routes>

      {/* Footer - Visible on all pages */}
      <Footer />

    </Router>
  );
}

export default App;