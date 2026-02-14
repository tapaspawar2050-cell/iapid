// React library import kar rahe hain (component banane ke liye)
import React from "react";

// React Router ka Link use karte hain page change karne ke liye
import { Link } from "react-router-dom";

// Background image import kar rahe hain
import footerBg from "../assets/footer_bg_1.jpg";

// Icons import kar rahe hain (social media aur contact icons)
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

// Footer naam ka component bana rahe hain
const Footer = () => {
  return (

    // Footer ka main container
    <footer className="w-full overflow-hidden">

      {/* Yeh section background image aur content ko hold karega */}
      <div className="relative min-h-[430px] md:h-[30vh] flex items-center">

        {/* Background Image */}
        {/* Absolute ka matlab yeh image pura background cover karegi */}
        <div
          className="absolute inset-1 bg-cover bg-right bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: `url(${footerBg})` }}
        ></div>

        {/* White transparent gradient (thoda halka safed effect dene ke liye) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/10 to-blue-20/10"></div>

        {/* Main Content yahan se start hota hai */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-16 lg:px-24 py-16 w-full">

          {/* Left side content (50% width) */}
          <div className="w-full md:w-[50%]">

            {/* 3 column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

              {/* Column 1 - Useful Links */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-5">
                  Useful Links
                </h3>

                <ul className="space-y-3 text-base md:text-lg text-gray-800">
                  {/* Membership page ka link */}
                  <li>
                    <Link to="/membership" className="hover:text-blue-600 transition">
                      Membership
                    </Link>
                  </li>

                  {/* Conference page ka link */}
                  <li>
                    <Link to="/conference" className="hover:text-blue-600 transition">
                      Conference/CME
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 - Privacy Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-5">
                  Privacy
                </h3>

                <ul className="space-y-3 text-base md:text-lg text-gray-800">
                  {/* Newsletter page ka link */}
                  <li>
                    <Link to="/newsletter" className="hover:text-blue-600 transition">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Contact Information */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-5">
                  Contact Info
                </h3>

                {/* Email link (click karne se mail open hoga) */}
                <a
                  href="mailto:Secretary.IAPID25@gmail.com"
                  className="flex items-start gap-3 mb-4 text-gray-800 hover:text-blue-600 transition"
                >
                  <FaEnvelope className="mt-1" />
                  Secretary.IAPID25@gmail.com
                </a>

                {/* Google Maps location link */}
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

            {/* Social Media icons + Newsletter input */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-12">

              {/* Social Media Icons */}
              <div className="flex gap-4">

                {/* Facebook icon */}
                <div className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer">
                  <FaFacebookF />
                </div>

                {/* Twitter icon */}
                <div className="bg-black text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer">
                  <FaTwitter />
                </div>

                {/* Google icon */}
                <div className="bg-red-600 text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer">
                  <FaGoogle />
                </div>
              </div>

              {/* Newsletter subscribe section */}
              <div className="flex w-full sm:w-[380px]">

                {/* Email input box */}
                <input
                  type="email"
                  placeholder="Newsletter"
                  className="w-full px-5 py-3 border border-gray-400 rounded-l-full outline-none bg-white/80 backdrop-blur-md"
                />

                {/* Subscribe button */}
                <button className="px-6 py-3 bg-blue-700 text-white rounded-r-full hover:bg-blue-800 transition">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Copyright text */}
            <div className="pt-10 mt-10 text-sm text-gray-800">
              Copyright ©2026 All rights reserved | Design by :
              Triosoft Technologies Pvt. Ltd.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

// Component ko export kar rahe hain taaki dusre file me use kar sakein
export default Footer;
