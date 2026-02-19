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
  { title: "MYTP - 2024", images: [img1, img2, img3] },
  { title: "Annual Conference of IAP-ID 2024", images: [img4, img5, img6] },
  { title: "APCON - IAPID 2025", images: [img7, img8, img9] },
];


// ===============================
// ✅ Conference Card
// ===============================

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
    <div
      className="bg-white rounded-2xl shadow-xl
                 w-full
                 max-w-[340px]
                 mx-auto
                 overflow-hidden
                 flex flex-col"
    >
      {/* Title */}
      <div className="bg-[#4A4444] text-white text-center 
                      py-3 sm:py-4
                      text-base sm:text-lg font-semibold">
        {title}
      </div>

      {/* Image Section */}
      <div
        className="relative w-full
                   h-[260px]
                   sm:h-[300px]
                   md:h-[340px]
                   lg:h-[380px]
                   overflow-hidden"
      >
        <img
          src={images[index]}
          alt={title}
          className="w-full h-full object-cover transition duration-500"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2
                     bg-white/90 hover:bg-white
                     p-2 rounded-full shadow-md"
        >
          <FaChevronLeft size={14} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2
                     bg-white/90 hover:bg-white
                     p-2 rounded-full shadow-md"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};


// ===============================
// ✅ Main Section
// ===============================

const AnnualConference = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#dcdcdc]">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl 
                     font-serif font-bold text-center mb-10 lg:mb-14">
        Annual Conference
      </h2>

      <div
        className="grid
                   grid-cols-1
                   sm:grid-cols-2
                   lg:grid-cols-3
                   gap-8 lg:gap-12
                   px-4 sm:px-8 lg:px-16"
      >
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
