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
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      
      {/* 🔶 TOP SOCIAL BAR */}
      <div className="bg-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4 pr-6">
          <FaFacebookF className="text-gray-600 cursor-pointer hover:text-[#F7931E]" />
          <FaTwitter className="text-gray-600 cursor-pointer hover:text-[#F7931E]" />
          <FaGoogle className="text-gray-600 cursor-pointer hover:text-[#F7931E]" />
        </div>
      </div>

      {/* 🟧 LOGO BAR */}
      <div className="bg-[#F7931E] py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="h-12 md:h-14" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-black">
                IAP-ID
              </h1>
              <p className="text-xs md:text-sm leading-tight text-black">
                INTERNATIONAL ACADEMY OF PATHOLOGY – INDIAN DIVISION
              </p>
            </div>
          </div>

          {/* EMAIL (Desktop only) */}
          <div className="hidden md:flex items-center space-x-2">
            <FaEnvelope className="text-black" />
            <a
              href="mailto:secretary.iapid25@gmail.com?subject=Inquiry from IAP-ID Website"
              className="font-bold text-black hover:text-white hover:underline transition"
            >
              secretary.iapid25@gmail.com
            </a>
          </div>

          {/* 🍔 HAMBURGER (Mobile only) */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* 🧭 NAVBAR */}
      <nav className="bg-gray-200">
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex max-w-7xl mx-auto justify-center space-x-8 py-3 font-semibold">
          
          <Link to="/about" className="hover:text-[#F7931E]">
            About IAPID
          </Link>

          <Link to="/newsletter" className="hover:text-[#F7931E]">
            Newsletter
          </Link>

          <Link to="/membership" className="hover:text-[#F7931E]">
            Membership
          </Link>

          <Link to="/conference" className="hover:text-[#F7931E]">
            Conference/CME
          </Link>

          <Link to="/gallery" className="hover:text-[#F7931E]">
            Gallery
          </Link>

          {/* ✅ NEW ADDED LINK */}
          <Link to="/ap-iap-2025" className="hover:text-[#F7931E] font-bold">
            AP-IAP 2025
          </Link>

          <Link to="/program" className="hover:text-[#F7931E]">
            Academic Program 2026
          </Link>

        </div>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-gray-100 px-6 py-4 space-y-4 font-semibold">
            
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About IAPID
            </Link>

            <Link to="/newsletter" onClick={() => setMenuOpen(false)}>
              Newsletter
            </Link>

            <Link to="/membership" onClick={() => setMenuOpen(false)}>
              Membership
            </Link>

            <Link to="/conference" onClick={() => setMenuOpen(false)}>
              Conference/CME
            </Link>

            <Link to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>

            {/* ✅ NEW MOBILE LINK */}
            <Link to="/ap-iap-2025" onClick={() => setMenuOpen(false)}>
              AP-IAP 2025
            </Link>

            <Link to="/program" onClick={() => setMenuOpen(false)}>
              Academic Program 2026
            </Link>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
