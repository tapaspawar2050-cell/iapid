import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50">

      {/* 🔶 TOP BAR */}
      <div className="bg-[#F7931E]">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="IAP-ID"
              className="h-14 w-14 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-black font-bold text-2xl">IAP-ID</h1>
              <p className="text-black text-xs">
                INTERNATIONAL ACADEMY OF PATHOLOGY <br />
                INDIAN DIVISION
              </p>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="hidden md:flex items-center gap-6 text-black text-sm ml-auto">
  
  <span className="flex items-center gap-2">
    ✉ secretary.iapid25@gmail.com
  </span>

  <div className="flex items-center gap-4 text-lg">
    <FaFacebookF className="cursor-pointer" />
    <FaTwitter className="cursor-pointer" />
    <FaGoogle className="cursor-pointer" />
  </div>

</div>

        </div>
      </div>

      {/* 🔹 MENU */}
      <div className="bg-[#f2f2f2] border-b-4 border-[#2E1A47]">
        <div className="max-w-[1400px] mx-auto px-6">
          <ul className="flex flex-wrap gap-6 py-3 text-sm font-medium text-black">
            <li><Link to="/about">About IAPID</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/conference">Conference/CME</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/ap-iap-2025">AP-IAP 2025</Link></li>
            <li><Link to="/bulletin">IAP Bulletin</Link></li>
            <li><Link to="/academic">IAP-ID Academic program 2026</Link></li>
          </ul>
        </div>
      </div>

    </header>
  );
};

export default Header;
