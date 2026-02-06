import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">Useful links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/membership" className="text-gray-600 hover:text-iap-orange transition">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/conference" className="text-gray-600 hover:text-iap-orange transition">
                  Conference/CME
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">Privacy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/newsletter" className="text-gray-600 hover:text-iap-orange transition">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaEnvelope className="text-iap-orange mt-1 mr-2 flex-shrink-0" />
                <a 
                  href="mailto:Secretary.IAPID25@gmail.com" 
                  className="text-gray-600 hover:text-iap-orange transition"
                >
                  Secretary.IAPID25@gmail.com
                </a>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-iap-orange mt-1 mr-2 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>Nizam's Institute of Medical Science</p>
                  <p>Punjagutta Hyderabad</p>
                  <p>500082</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscribe */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-2xl mx-auto">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="#" 
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
              >
                <FaGoogle size={20} />
              </a>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Newsletter" 
                className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-iap-orange flex-grow md:w-64"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-center text-gray-600 text-sm">
            Copyright ©2026 All rights Reserved | Design by : Triosoft Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;