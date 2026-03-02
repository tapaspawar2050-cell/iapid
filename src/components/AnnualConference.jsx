import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const TOTAL_SLIDES = 3;

const ConferenceCard = ({ title, images, activeIndex }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-[320px] mx-auto p-4">

      {/* Header */}
      <div className="bg-[#4D4545] text-white text-center py-3 rounded-md mb-4 min-h-[65px] flex items-center justify-center">
        <h3 className="text-sm md:text-base font-bold uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {/* Image Slider */}
      <div className="overflow-hidden rounded-lg h-[330px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{ width: `${100 / images.length}%` }}
              className="h-full flex-shrink-0"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnnualConference = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 5000); // ✅ 5 seconds
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TOTAL_SLIDES - 1 : prev - 1
    );
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-14 bg-[#E6E6E6] relative group overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">

        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-serif font-bold border-b-2 border-black inline-block">
            Annual Conference
          </h2>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-gray-200 z-10"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-gray-200 z-10"
        >
          <ChevronRight size={26} />
        </button>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferenceData.map((item, index) => (
            <ConferenceCard
              key={index}
              title={item.title}
              images={item.images}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {[...Array(TOTAL_SLIDES)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                resetAutoSlide();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-black scale-125"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AnnualConference;