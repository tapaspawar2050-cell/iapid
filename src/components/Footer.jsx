// React import kar rahe hain
import React from "react";

// React Router ka Link import (page change karne ke liye)
import { Link } from "react-router-dom";

// Background image import kar rahe hain
import footerBg from "../assets/footer_bg_1.jpg";

// Icons import kar rahe hain
import {
  FaEnvelope,      // Email icon
  FaMapMarkerAlt,  // Location icon
  FaFacebookF,     // Facebook icon
  FaTwitter,       // Twitter icon
  FaGoogle,        // Google icon
} from "react-icons/fa";


// ===============================
// ✅ Footer Component Start
// ===============================
const Footer = () => {
  return (

    // Footer main container
    <footer className="w-full overflow-hidden">

      {/* ================= Background Section ================= */}
      <div className="relative min-h-[500px] md:h-[65vh] flex items-center">

        {/* 🔥 Background Image (Zoom Animation ke saath) */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat md:bg-fixed animate-zoom"
          style={{ backgroundImage: `url(${footerBg})` }}
        ></div>

        {/* White gradient layer (Text clear dikhane ke liye) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>

        {/* 🌊 Right side glowing circle effect */}
        <div className="absolute right-10 top-1/4 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-glow"></div>

        {/* ✨ Chhote floating dots decoration ke liye */}
        <div className="absolute right-20 top-20 w-4 h-4 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute right-40 bottom-20 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute right-60 top-40 w-2 h-2 bg-white/50 rounded-full animate-float"></div>

        {/* ================= Main Content ================= */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-16 lg:px-24 py-14 w-full">

          {/* Left side content width */}
          <div className="w-full md:w-[60%]">

            {/* 3 Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {/* ================= Column 1 ================= */}
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-black mb-5 drop-shadow-md">
                  Useful Links
                </h3>

                {/* Links list */}
                <ul className="space-y-3 text-base md:text-lg font-extrabold text-black drop-shadow-md">
                  <li>
                    {/* Link dusre page par le jayega */}
                    <Link to="/membership" className="hover:text-orange-600 transition">
                      Membership
                    </Link>
                  </li>
                  <li>
                    <Link to="/conference" className="hover:text-orange-600 transition">
                      Conference/CME
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ================= Column 2 ================= */}
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-black mb-5 drop-shadow-md">
                  Privacy
                </h3>

                <ul className="space-y-3 text-base md:text-lg font-extrabold text-black drop-shadow-md">
                  <li>
                    <Link to="/newsletter" className="hover:text-orange-600 transition">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ================= Column 3 ================= */}
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-black mb-5 drop-shadow-md">
                  Contact Info
                </h3>

                {/* Email Link */}
                <a
                  href="mailto:Secretary.IAPID25@gmail.com"
                  className="flex items-start gap-3 mb-4 font-extrabold text-black hover:text-orange-600 transition drop-shadow-md"
                >
                  <FaEnvelope className="mt-1" />
                  Secretary.IAPID25@gmail.com
                </a>

                {/* Google Map Link */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nizam's+Institute+of+Medical+Science+Punjagutta+Hyderabad+500082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-extrabold text-black hover:text-orange-600 transition drop-shadow-md"
                >
                  <FaMapMarkerAlt className="mt-1" />
                  <span>
                    Nizam's Institute of Medical Science
                    <br />
                    Punjagutta Hyderabad 500082
                  </span>
                </a>
              </div>
            </div>


            {/* ================= Social Icons + Newsletter ================= */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-10">

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="bg-black text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer">
                  <FaTwitter />
                </div>
                <div className="bg-red-600 text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer">
                  <FaGoogle />
                </div>
              </div>

              {/* Newsletter Input + Button */}
              <div className="flex w-full sm:w-[380px]">
                <input
                  type="email"
                  placeholder="Newsletter"
                  className="w-full px-5 py-3 border border-gray-500 rounded-l-full outline-none font-bold shadow-md"
                />
                <button className="px-6 py-3 bg-black text-white font-bold rounded-r-full hover:bg-orange-600 transition shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            {/* ================= Copyright ================= */}
            <div className="pt-8 mt-8 text-sm font-extrabold text-black drop-shadow-md">
              Copyright ©2026 All rights reserved | Design by :
              Triosoft Technologies Pvt. Ltd.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

// Component export kar rahe hain
export default Footer;
