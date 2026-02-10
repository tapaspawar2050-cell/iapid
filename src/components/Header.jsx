import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaGoogle, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full">

      {/* WHITE TOP STRIP */}
      <div className="bg-white py-2">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4 pr-6">
          <FaFacebookF className="text-gray-600 cursor-pointer" />
          <FaTwitter className="text-gray-600 cursor-pointer" />
          <FaGoogle className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* ORANGE BAR */}
      <div className="bg-[#F7931E] py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          <div className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="h-14" />
            <div>
              <h1 className="text-2xl font-bold">IAP-ID</h1>
              <p className="text-sm">INTERNATIONAL ACADEMY OF PATHOLOGY - INDIAN DIVISION</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span className="font-semibold">secretary.iapid25@gmail.com</span>
          </div>

        </div>
      </div>

      {/* MENU BAR */}
      <nav className="bg-gray-200 py-3">
        <div className="max-w-7xl mx-auto flex justify-center space-x-8 font-semibold">
          <Link to="/">About IAPID</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/conference">Conference/CME</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/program">IAP-ID Academic Program 2026</Link>
        </div>
      </nav>

    </header>
  );
};

export default Header;
