import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import g1 from "../assets/gallery_1.jpg";
import g2 from "../assets/gallery_2.jpg";
import g3 from "../assets/gallery_3.jpg";
import g4 from "../assets/gallery_4.jpg";
import g5 from "../assets/gallery_5.jpg";
import g6 from "../assets/gallery_6.jpg";
import g7 from "../assets/gallery_7.jpg";
import g8 from "../assets/gallery_8.jpg";

const originalImages = [g1, g2, g3, g4, g5, g6, g7, g8];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setImagesPerView(1);
      else if (window.innerWidth < 1024) setImagesPerView(2);
      else setImagesPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < originalImages.length - imagesPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(originalImages.length - imagesPerView);
    }
  };

  return (
    <section className="bg-[#dcdcdc] py-12 overflow-hidden">
      <div className="max-w-full mx-auto">
        
        {/* Heading */}
        <div className="px-10 mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            See our latest photos from Academic
          </h2>
        </div>

        <div className="relative group">
          
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)`,
              }}
            >
              {originalImages.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / imagesPerView}%` }}
                >
                  <img
                    src={img}
                    alt={`gallery-${index}`}
                    className="h-[320px] w-full object-cover border-r border-gray-300 shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#87CEEB] hover:bg-cyan-400 text-black p-2 rounded-md opacity-80 hover:opacity-100 transition-all"
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#87CEEB] hover:bg-cyan-400 text-black p-2 rounded-md opacity-80 hover:opacity-100 transition-all"
          >
            <FaChevronRight size={16} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Gallery;