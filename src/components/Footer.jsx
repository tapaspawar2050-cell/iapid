import React from 'react';
import footerBg from "../assets/footer_bg_1.jpg";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative pt-16 pb-8 border-t-4 border-iap-orange text-gray-800 bg-no-repeat"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: "right center",
        backgroundSize: "contain"
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Useful links</h3>
          <ul className="space-y-3 font-semibold">
            <li>Membership</li>
            <li>Conference/CME</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Privacy</h3>
          <ul className="space-y-3 font-semibold">
            <li>Newsletter</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Info</h3>

          <div className="flex items-start gap-3 mb-3 font-semibold">
            <FaEnvelope className="text-orange-500 mt-1" />
            Secretary.IAPID25@gmail.com
          </div>

          <div className="flex items-start gap-3 font-semibold">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <span>
              Nizam's Institute of Medical Science<br/>
              Punjagutta Hyderabad 500082
            </span>
          </div>

          {/* Newsletter */}
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Newsletter"
              className="w-full px-4 py-2 border rounded-l-full outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-full">
              Subscribe
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            <div className="bg-blue-600 text-white p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaTwitter /></div>
            <div className="bg-red-500 text-white p-2 rounded-full"><FaGoogle /></div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm font-semibold mt-12 border-t border-gray-300 pt-6 relative z-10">
        Copyright ©2026 All rights reserved | Design by : Triosoft Technologies Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
