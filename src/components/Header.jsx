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
    <>
      {/* 🔶 TOP SOCIAL BAR */}
      <div className="w-full bg-white py-3 shadow-sm hidden md:block font-[Georgia,'Times_New_Roman',serif]">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-5 pr-6">
          <FaFacebookF className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
          <FaTwitter className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
          <FaGoogle className="text-gray-600 cursor-pointer hover:text-[#F7931E] transition" />
        </div>
      </div>

      {/* ✅ Sticky Header */}
      <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg font-[Georgia,'Times_New_Roman',serif]">

        {/* 💎 LOGO SECTION */}
        <div className="bg-[#F7931E]/90 backdrop-blur-md border-b border-white/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-1 py-2">

            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="IAP-ID Logo"
                className="h-12 md:h-14"
              />
            </Link>

            {/* 📧 Email */}
            <div className="hidden md:flex items-center space-x-2">
              <FaEnvelope className="text-black" />
              <a
                href="mailto:secretary.iapid25@gmail.com?subject=Inquiry from IAP-ID Website"
                className="text-black hover:text-white hover:underline transition tracking-wide"
              >
                secretary.iapid25@gmail.com
              </a>
            </div>

            {/* 📱 Mobile Button */}
            <button
              className="md:hidden text-2xl text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

        {/* 🧭 NAVIGATION */}
        <nav className="bg-white border-t border-gray-200">

          {/* Desktop Menu */}
          <div className="hidden md:flex max-w-7xl mx-auto justify-center space-x-11 py-3 font-semibold tracking-wide">

            <Link to="/about" className="hover:text-[#F7931E]">About IAPID</Link>
            <Link to="/newsletter" className="hover:text-[#F7931E]">Newsletter</Link>
            <Link to="/membership" className="hover:text-[#F7931E]">Membership</Link>
            <Link to="/conference" className="hover:text-[#F7931E]">Conference/CME</Link>
            <Link to="/gallery" className="hover:text-[#F7931E]">Gallery</Link>

            {/* 🔥 UPDATED IAP BULLETIN LINK */}
            <a
              href="https://news.iapcentral.org/bulletin-subscriptions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7931E]"
            >
              IAP Bulletin
            </a>

            <Link to="/ap-iap-2025" className="hover:text-[#F7931E]">AP-IAP 2025</Link>
            <Link to="/program" className="hover:text-[#F7931E]">Academic Program 2026</Link>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4 font-semibold tracking-wide shadow-lg">

              <Link to="/about" onClick={() => setMenuOpen(false)}>About IAPID</Link>
              <Link to="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</Link>
              <Link to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
              <Link to="/conference" onClick={() => setMenuOpen(false)}>Conference/CME</Link>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

              {/* 🔥 UPDATED IAP BULLETIN MOBILE LINK */}
              <a
                href="https://news.iapcentral.org/bulletin-subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                IAP Bulletin
              </a>

              <Link to="/ap-iap-2025" onClick={() => setMenuOpen(false)}>AP-IAP 2025</Link>
              <Link to="/program" onClick={() => setMenuOpen(false)}>Academic Program 2026</Link>

            </div>
          )}

        </nav>
      </header>
    </>
  );
};

export default Header;