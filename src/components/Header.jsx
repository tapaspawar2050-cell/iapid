import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'About IAPID', path: '/about' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Membership', path: '/membership' },
    { name: 'Conference/CME', path: '/conference' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'AP-IAP 2025', path: '/ap-iap-2025' },
    { name: 'IAP Bulletin', path: '/bulletin' },
    { name: 'IAP-ID Academic program 2026', path: '/academic-program' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-iap-orange py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/logo.png" 
              alt="IAP-ID Logo" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-white font-bold text-xl md:text-2xl">IAP-ID</h1>
              <p className="text-white text-xs md:text-sm">INTERNATIONAL ACADEMY OF PATHOLOGY - INDIAN DIVISION</p>
            </div>
          </div>
          
          {/* Social Icons & Email */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-gray-200 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                <FaGoogle size={20} />
              </a>
            </div>
            <a 
              href="mailto:secretary.iapid25@gmail.com" 
              className="text-white text-sm hover:underline"
            >
              ✉ secretary.iapid25@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-gray-700 hover:text-iap-orange transition font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="block text-gray-700 hover:text-iap-orange transition py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;