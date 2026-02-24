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
    <div className="bg-white rounded-xl shadow-lg w-full max-w-[300px] mx-auto p-4">

      {/* Header */}
      <div className="bg-[#4D4545] text-white text-center py-3 px-3 rounded-md mb-4 min-h-[65px] flex items-center justify-center">
        <h3 className="text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
          {title}
        </h3>
      </div>

      {/* Image Slider */}
      <div className="overflow-hidden relative rounded-lg h-[330px]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              <img
                src={img}
                alt={`${title}-${i}`}
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TOTAL_SLIDES - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  return (
    <section className="py-14 bg-[#E6E6E6] relative group">
      <div className="max-w-6xl mx-auto px-4 relative">

        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black border-b-2 border-black inline-block pb-1">
            Annual Conference
          </h2>
        </div>

        {/* Arrows - Visible Only On Hover */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-gray-200"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-gray-200"
        >
          <ChevronRight size={26} />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {conferenceData.map((item, index) => (
            <ConferenceCard
              key={index}
              title={item.title}
              images={item.images}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {[...Array(TOTAL_SLIDES)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
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