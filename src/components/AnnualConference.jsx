import React, { useState } from "react";

import conf1 from "../assets/conf1.jpg";
import conf2 from "../assets/conf2.jpg";
import conf3 from "../assets/conf3.jpg";
import conf4 from "../assets/conf4.jpg";
import conf5 from "../assets/conf5.jpg";

const conferences = [
  { title: "IAPID Annual CME 2025", image: conf1 },
  { title: "MYTP - 2024", image: conf2 },
  { title: "Annual Conference 2024", image: conf3 },
  { title: "Conference 2023", image: conf4 },
  { title: "Conference 2022", image: conf5 },
];

export default function AnnualConference() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < conferences.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="py-16 bg-gray-100 relative">
      <h2 className="text-3xl font-bold text-center mb-10">
        Annual Conference
      </h2>

      {/* slider */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 33.333}%)` }}
        >
          {conferences.map((item, i) => (
            <div key={i} className="w-1/3 px-4 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-slate-600 text-white text-center py-3 font-semibold">
                  {item.title}
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
