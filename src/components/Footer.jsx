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
    <footer className="w-full">

      {/* Main Container */}
      <div
        className="bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        {/* Content Wrapper */}
        <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-16">

          {/* LEFT SIDE CONTENT ONLY */}
          <div className="w-full md:w-[60%]">

            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">

              {/* Column 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Useful links
                </h3>
                <ul className="space-y-3 text-lg font-semibold">
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
                <h3 className="text-2xl font-bold mb-6">
                  Privacy
                </h3>
                <ul className="space-y-3 text-lg font-semibold">
                  <li>
                    <Link to="/newsletter" className="hover:text-blue-600 transition">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Contact Info
                </h3>

                <a
                  href="mailto:Secretary.IAPID25@gmail.com"
                  className="flex items-start gap-3 mb-4 text-lg font-semibold hover:text-blue-600 transition"
                >
                  <FaEnvelope className="mt-1" />
                  Secretary.IAPID25@gmail.com
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nizam's+Institute+of+Medical+Science+Punjagutta+Hyderabad+500082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-lg font-semibold hover:text-blue-600 transition"
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
            <div className="flex flex-col md:flex-row items-start gap-8 mt-12">

              {/* Social Icons */}
              <div className="flex gap-5">
                <div className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition">
                  <FaFacebookF />
                </div>
                <div className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
                  <FaTwitter />
                </div>
                <div className="bg-red-500 text-white p-3 rounded-full hover:scale-110 transition">
                  <FaGoogle />
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex w-full md:w-[420px]">
                <input
                  type="email"
                  placeholder="Newsletter"
                  className="w-full px-5 py-3 rounded-l-full border border-gray-400 outline-none"
                />
                <button className="px-6 py-3 bg-black text-white rounded-r-full hover:bg-gray-800 transition">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 mt-8 text-sm font-semibold">
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
