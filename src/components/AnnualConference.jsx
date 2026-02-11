import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  {
    title: "MYTP - 2024",
    images: [img1, img2, img3],
  },
  {
    title: "Annual Conference of IAP-ID 2024",
    images: [img4, img5, img6],
  },
  {
    title: "APCON - IAPID 2025",
    images: [img7, img8, img9],
  },
];


// ✅ Conference Card Component
const ConferenceCard = ({ title, images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl 
                    w-[320px] h-[480px] 
                    mx-auto overflow-hidden flex flex-col">

      {/* Title */}
      <div className="bg-[#4A4444] text-white text-center py-4 font-semibold text-lg">
        {title}
      </div>

      {/* Image Section */}
      <div className="relative flex-1 p-4">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <img
            src={images[index]}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 
                       bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 
                       bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};


// ✅ Main Section
const AnnualConference = () => {
  return (
    <section className="py-20 bg-[#dcdcdc]">
      <h2 className="text-4xl font-serif font-bold text-center mb-14">
        Annual Conference
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16">
        {conferenceData.map((item, index) => (
          <ConferenceCard
            key={index}
            title={item.title}
            images={item.images}
          />
        ))}
      </div>
    </section>
  );
};

export default AnnualConference;
