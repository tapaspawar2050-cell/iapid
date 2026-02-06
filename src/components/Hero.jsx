import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 h-[500px] md:h-[600px] flex items-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
            The International Academy of Pathology
          </h1>
          <p className="text-white text-xl md:text-2xl mb-2">Indian Division</p>
          <p className="text-white text-lg md:text-xl mb-8">A World Wide Organization</p>
          
          <Link 
            to="/membership" 
            className="inline-flex items-center bg-iap-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Membership
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>

      {/* Latest News Box */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="bg-iap-orange text-white px-6 py-3 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg">Latest News</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;