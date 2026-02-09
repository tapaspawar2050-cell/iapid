import React from 'react';
import footerBg from "../assets/footer_bg_1.jpg";
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="pt-12 pb-6 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: "right center",
        backgroundSize: "cover"
      }}
    >
      {/* LEFT SIDE CONTENT CONTAINER */}
      <div className="max-w-6xl ml-16 px-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-black">

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Useful links</h3>
            <ul className="space-y-2 font-semibold">
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/conference">Conference/CME</Link></li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="font-bold text-xl mb-4">Privacy</h3>
            <ul className="space-y-2 font-semibold">
              <li><Link to="/newsletter">Newsletter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>

            <div className="flex items-start mb-2 font-semibold">
              <FaEnvelope className="text-orange-500 mt-1 mr-2" />
              Secretary.IAPID25@gmail.com
            </div>

            <div className="flex items-start font-semibold">
              <FaMapMarkerAlt className="text-orange-500 mt-1 mr-2" />
              <div>
                Nizam's Institute of Medical Science <br/>
                Punjagutta Hyderabad <br/>
                500082
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL + NEWSLETTER */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between">

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a className="bg-blue-600 text-white p-3 rounded-full"><FaFacebook /></a>
            <a className="bg-black text-white p-3 rounded-full"><FaTwitter /></a>
            <a className="bg-red-500 text-white p-3 rounded-full"><FaGoogle /></a>
          </div>

          <div className="flex">
            <input
              type="email"
              placeholder="Newsletter"
              className="px-4 py-2 border rounded-l-full outline-none"
            />
            <button className="bg-black text-white px-6 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-6 font-semibold text-black">
          Copyright ©2026 All rights reserved | Design by : Triosoft Technologies Pvt. Ltd.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
