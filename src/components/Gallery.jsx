import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import g1 from "../assets/gallery_1.jpg";
import g2 from "../assets/gallery_2.jpg";
import g3 from "../assets/gallery_3.jpg";
import g4 from "../assets/gallery_4.jpg";

const images = [g1, g2, g3, g4];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  // 🔹 Responsive images count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow]);

  // 🔹 Infinite Next
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };

  // 🔹 Infinite Prev
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#dcdcdc] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            See Our Latest Academic Moments
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative overflow-hidden">

          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsToShow
              }%)`,
            }}
          >
            {images.concat(images).map((img, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0 px-3
                  ${itemsToShow === 1 ? "w-full" : ""}
                  ${itemsToShow === 2 ? "w-1/2" : ""}
                  ${itemsToShow === 4 ? "w-1/4" : ""}
                `}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-500">
                  <img
                    src={img}
                    alt="gallery"
                    className="h-[320px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
