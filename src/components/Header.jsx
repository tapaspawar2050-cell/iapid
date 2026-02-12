import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg">
      
      {/* 🔶 TOP SOCIAL BAR */}
      <div className="py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4 pr-6">
          <FaFacebookF className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
          <FaTwitter className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
          <FaGoogle className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
        </div>
      </div>

      {/* 💎 GLASS LOGO BAR */}
      <div className="bg-[#F7931E]/90 backdrop-blur-md border-b border-white/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* 🔥 LOGO WITH ANIMATION */}
          <Link
            to="/"
            className="relative flex items-center space-x-3 group overflow-hidden"
          >
            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-active:opacity-20 group-active:scale-110 transition duration-300"></span>

            <img
              src={logo}
              alt="IAP-ID Logo"
              className="h-12 md:h-14 transition-transform duration-300 group-hover:scale-105"
            />

            <div className="relative">
              <h1 className="text-xl md:text-2xl font-bold text-black">
                IAP-ID
              </h1>

              {/* 🔥 Animated Underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>

              <p className="text-xs md:text-sm leading-tight text-black">
                INTERNATIONAL ACADEMY OF PATHOLOGY – INDIAN DIVISION
              </p>
            </div>
          </Link>

          {/* EMAIL */}
          <div className="hidden md:flex items-center space-x-2">
            <FaEnvelope className="text-black" />
            <a
              href="mailto:secretary.iapid25@gmail.com?subject=Inquiry from IAP-ID Website"
              className="font-bold text-black hover:text-white hover:underline transition"
            >
              secretary.iapid25@gmail.com
            </a>
          </div>

          {/* 🍔 MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* 🧭 NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md border-t border-gray-200">
        
        <div className="hidden md:flex max-w-7xl mx-auto justify-center space-x-8 py-3 font-semibold">
          
          {[
            { name: "About IAPID", path: "/about" },
            { name: "Newsletter", path: "/newsletter" },
            { name: "Membership", path: "/membership" },
            { name: "Conference/CME", path: "/conference" },
            { name: "Gallery", path: "/gallery" },
            { name: "AP-IAP 2025", path: "/ap-iap-2025" },
            { name: "Academic Program 2026", path: "/program" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group hover:text-[#F7931E] transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#F7931E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4 font-semibold shadow-lg">
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

export default Header;
