// We are importing React and useState
// useState helps us store and change values inside the component
import React, { useState } from "react";

// Link helps us move from one page to another without reloading
import { Link } from "react-router-dom";

// Importing logo image
import logo from "../assets/logo.png";

// Importing icons (small pictures) from react-icons library
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// This is our Header component (top part of website)
const Header = () => {

  // menuOpen is a variable
  // setMenuOpen is used to change its value
  // false means mobile menu is closed at start
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    // Header tag is the top section of website
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg">
      
      {/* 🔶 TOP SOCIAL BAR */}
      {/* This part shows social media icons (only on medium and big screens) */}
      <div className="py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4 pr-6">

          {/* Facebook icon */}
          <FaFacebookF className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />

          {/* Twitter icon */}
          <FaTwitter className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />

          {/* Google icon */}
          <FaGoogle className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
        </div>
      </div>

      {/* 💎 LOGO BAR */}
      {/* This section contains logo and email */}
      <div className="bg-[#F7931E]/90 backdrop-blur-md border-b border-white/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* 🔥 LOGO SECTION */}
          {/* Clicking this will take user to home page */}
          <Link
            to="/"
            className="relative flex items-center space-x-3 group overflow-hidden"
          >

            {/* This creates a small animation effect when clicked */}
            <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-active:opacity-20 group-active:scale-110 transition duration-300"></span>

            {/* Logo image */}
            <img
              src={logo}
              alt="IAP-ID Logo"
              className="h-12 md:h-14 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Website title */}
            <div className="relative">
              <h1 className="text-xl md:text-2xl font-bold text-black">
                IAP-ID
              </h1>

              {/* Animated line under text */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>

              {/* Full name of organization */}
              <p className="text-xs md:text-sm leading-tight text-black">
                INTERNATIONAL ACADEMY OF PATHOLOGY – INDIAN DIVISION
              </p>
            </div>
          </Link>

          {/* 📧 EMAIL SECTION */}
          {/* This shows email address (only on medium and large screens) */}
          <div className="hidden md:flex items-center space-x-2">

            {/* Email icon */}
            <FaEnvelope className="text-black" />

            {/* When clicked, it opens email app */}
            <a
              href="mailto:secretary.iapid25@gmail.com?subject=Inquiry from IAP-ID Website"
              className="font-bold text-black hover:text-white hover:underline transition"
            >
              secretary.iapid25@gmail.com
            </a>
          </div>

          {/* 🍔 MOBILE MENU BUTTON */}
          {/* This button appears only on small screens */}
          <button
            className="md:hidden text-2xl text-black"
            
            // When clicked, it changes menuOpen value
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {/* If menuOpen is true show X icon, else show bars icon */}
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* 🧭 NAVIGATION BAR */}
      <nav className="bg-white/80 backdrop-blur-md border-t border-gray-200">
        
        {/* Desktop Menu (only visible on medium and large screens) */}
        <div className="hidden md:flex max-w-7xl mx-auto justify-center space-x-8 py-3 font-semibold">
          
          {/* We are creating menu items using map */}
          {[
            { name: "About IAPID", path: "/about" },
            { name: "Newsletter", path: "/newsletter" },
            { name: "Membership", path: "/membership" },
            { name: "Conference/CME", path: "/conference" },
            { name: "Gallery", path: "/gallery" },
            { name: "AP-IAP 2025", path: "/ap-iap-2025" },
            { name: "Academic Program 2026", path: "/program" },
          ].map((item, index) => (

            // Link creates clickable navigation
            <Link
              key={index}
              to={item.path}
              className="relative group hover:text-[#F7931E] transition"
            >
              {item.name}

              {/* Underline animation on hover */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#F7931E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 📱 MOBILE MENU */}
        {/* This part shows only when menuOpen is true */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4 font-semibold shadow-lg">

            {/* Each link closes menu after clicking */}
            <Link to="/about" onClick={() => setMenuOpen(false)}>About IAPID</Link>
            <Link to="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</Link>
            <Link to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
            <Link to="/conference" onClick={() => setMenuOpen(false)}>Conference/CME</Link>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/ap-iap-2025" onClick={() => setMenuOpen(false)}>AP-IAP 2025</Link>
            <Link to="/program" onClick={() => setMenuOpen(false)}>Academic Program 2026</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

// Exporting the Header component so we can use it in App.js
export default Header;
