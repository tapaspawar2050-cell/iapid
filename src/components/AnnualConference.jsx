import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images
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

// ================= CARD COMPONENT =================

const ConferenceCard = ({ title, images }) => {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, images.length]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm w-full max-w-[340px] mx-auto p-4 transition duration-300">
      
      {/* Dark Header Title (Match Screenshot) */}
      <div className="bg-[#4D4545] text-white text-center py-3 px-3 rounded-t-sm mb-4 min-h-[65px] flex items-center justify-center">
        <h3 className="text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
          {title}
        </h3>
      </div>

      {/* Slider Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} slide ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation Arrows (Clean Style) */}
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/40 text-white p-1 rounded-full transition"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/40 text-white p-1 rounded-full transition"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

// ================= MAIN COMPONENT =================

const AnnualConference = () => {
  return (
    /* bg-[#E6E6E6] is the exact light grey from the screenshot background */
    <section className="py-16 bg-[#E6E6E6] min-h-screen"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Left Aligned Heading with Underline style */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black inline-block relative border-b-[3px] border-black pb-1">
            Annual Conference
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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