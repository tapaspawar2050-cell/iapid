import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Assuming these are your local assets
import img1 from "../assets/conf1.jpg";
import img2 from "../assets/conf2.jpg";
import img3 from "../assets/conf3.jpg";
import img4 from "../assets/conf4.jpg";
import img5 from "../assets/conf5.jpg";
import img6 from "../assets/conf6.jpg";
import img7 from "../assets/conf7.jpg";
import img8 from "../assets/conf8.jpg";
import img9 from "../assets/conf9.jpg";

const conferenceData = [
  { title: "MYTP - 2024", images: [img1, img2, img3] },
  { title: "Annual Conference of IAP-ID 2024", images: [img4, img5, img6] },
  { title: "APCON - IAPID 2025", images: [img7, img8, img9] },
];

// ===============================
// CARD COMPONENT
// ===============================

const ConferenceCard = ({ title, images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[350px] mx-auto p-4 transition-transform duration-300 hover:scale-105">
      {/* Header with Title */}
      <div className="bg-[#4D4545] text-white text-center py-3 px-2 rounded-t-md mb-4 h-[60px] flex items-center justify-center">
        <h3 className="text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
          {title}
        </h3>
      </div>

      {/* Image Slider Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-gray-100 shadow-inner">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} slide ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation Arrows (Only visible on hover/desktop or always on mobile) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

// ===============================
// MAIN SECTION
// ===============================

const AnnualConference = () => {
  return (
    <section className="py-16 bg-[#F3F4F6] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#333] mb-12 relative pb-4">
          Annual Conference
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#4D4545]"></span>
        </h2>

        {/* Grid Layout:
            - Mobile: 1 column (grid-cols-1)
            - Tablet: 2 columns (sm:grid-cols-2)
            - Desktop: 3 columns (lg:grid-cols-3)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
          {conferenceData.map((item, index) => (
            <ConferenceCard
              key={index}
              title={item.title}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnualConference;