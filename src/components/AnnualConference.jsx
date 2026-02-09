import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import conf1 from "../assets/conf1.jpg";
import conf2 from "../assets/conf2.jpg";
import conf3 from "../assets/conf3.jpg";

const conferences = [
  {
    title: "MYTP - 2024",
    image: conf1,
  },
  {
    title: "Annual Conference of IAP-ID 2024",
    image: conf2,
  },
  {
    title: "APCON - IAPID 2025",
    image: conf3,
  },
];

const AnnualConference = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === conferences.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? conferences.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Annual Conference
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {conferences.map((conf, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gray-700 text-white text-center py-3 font-semibold">
                    {conf.title}
                  </div>

                  <img
                    src={conf.image}
                    alt={conf.title}
                    className="w-full h-[420px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnnualConference;
