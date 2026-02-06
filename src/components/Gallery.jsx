import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    "/images/gallery/photo1.jpg",
    "/images/gallery/photo2.jpg",
    "/images/gallery/photo3.jpg",
    "/images/gallery/photo4.jpg",
    "/images/gallery/photo5.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          See our latest photos from Academic
        </h2>

        <div className="max-w-7xl mx-auto relative">
          {/* Photo Carousel */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="min-w-full">
                  <img 
                    src={photo} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-iap-orange text-white p-4 rounded-full hover:bg-orange-600 transition shadow-lg"
          >
            <FaChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-iap-orange text-white p-4 rounded-full hover:bg-orange-600 transition shadow-lg"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === index ? 'bg-iap-orange' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;