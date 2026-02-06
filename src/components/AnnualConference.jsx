import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AnnualConference = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const conferences = [
    {
      title: "MYTP - 2024",
      image: "/images/gallery/mytp-2024.jpg",
      description: "Mid-Year Teaching Program 2024"
    },
    {
      title: "Annual Conference of IAP-ID 2024",
      image: "/images/gallery/conference-2024.jpg",
      description: "Annual Conference 2024"
    },
    {
      title: "APCON -IAPID 2025",
      image: "/images/gallery/apcon-2025.jpg",
      description: "APCON IAPID 2025"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === conferences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? conferences.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Annual Conference
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conferences.map((conf, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="bg-gray-700 text-white text-center py-3">
                    <h3 className="font-bold text-lg">{conf.title}</h3>
                  </div>
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={conf.image} 
                      alt={conf.title}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualConference;