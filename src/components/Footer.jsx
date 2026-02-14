import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../assets/footer_bg_1.jpg";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden">

      <div className="relative min-h-[550px] md:h-[70vh] flex items-center">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: `url(${footerBg})` }}
        ></div>

        {/* Medical White Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-blue-100/40"></div>

        {/* 💎 Ultra Realistic Main Glass Bubble */}
        <div className="absolute right-16 top-1/4 w-[340px] h-[340px] 
                        rounded-full 
                        bg-white/30 
                        backdrop-blur-2xl 
                        border border-white/40 
                        shadow-[0_0_80px_rgba(255,255,255,0.8)]
                        animate-float-slow animate-soft-pulse">
        </div>

        {/* 🌊 Floating Small Bubbles */}
        <div className="absolute right-44 top-20 w-10 h-10 
                        bg-white/50 rounded-full 
                        backdrop-blur-xl 
                        shadow-lg animate-float-fast"></div>

        <div className="absolute right-64 bottom-24 w-6 h-6 
                        bg-white/60 rounded-full 
                        backdrop-blur-md 
                        shadow-md animate-float-slow"></div>

        <div className="absolute right-80 top-40 w-4 h-4 
                        bg-white/70 rounded-full 
                        animate-float-fast"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-16 lg:px-24 py-16 w-full">

          <div className="w-full md:w-[60%]">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

              {/* Column 1 */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-5">
                  Useful Links
                </h3>

                <ul className="space-y-3 text-base md:text-lg text-gray-800">
                  <li>
                    <Link to="/membership" className="hover:text-blue-600 transition">
                      Membership
                    </Link>
                  </li>
                  <li>
                    <Link to="/conference" className="hover:text-blue-600 transition">
                      Conference/CME
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-5">
                  Privacy
                </h3>

                <ul className="space-y-3 text-base md:text-lg text-gray-800">
                  <li>
                    <Link to="/newsletter" className="hover:text-blue-600 transition">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-5">
                  Contact Info
                </h3>

                <a
                  href="mailto:Secretary.IAPID25@gmail.com"
                  className="flex items-start gap-3 mb-4 text-gray-800 hover:text-blue-600 transition"
                >
                  <FaEnvelope className="mt-1" />
                  Secretary.IAPID25@gmail.com
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nizam's+Institute+of+Medical+Science+Punjagutta+Hyderabad+500082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-800 hover:text-blue-600 transition"
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

            {/* Social + Newsletter */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-12">

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

              <div className="flex w-full sm:w-[380px]">
                <input
                  type="email"
                  placeholder="Newsletter"
                  className="w-full px-5 py-3 border border-gray-400 rounded-l-full outline-none bg-white/80 backdrop-blur-md"
                />
                <button className="px-6 py-3 bg-blue-700 text-white rounded-r-full hover:bg-blue-800 transition">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="pt-10 mt-10 text-sm text-gray-700">
              Copyright ©2026 All rights reserved | Design by :
              Triosoft Technologies Pvt. Ltd.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
