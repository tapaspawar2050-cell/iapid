import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import profileImg from "../assets/iap-profile.jpg"; // portrait image

const AcademicPrograms = () => {
  return (
    <section className="bg-[#f2f2f2] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* LEFT IMAGE / SLIDER */}
        <div className="flex justify-center">
          <div className="relative bg-white p-6 shadow-lg w-[320px]">

            <img
              src={profileImg}
              alt="IAP-ID"
              className="w-full object-cover"
            />

            {/* Arrows (design purpose) */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-xl">
              <FaChevronLeft />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-xl">
              <FaChevronRight />
            </button>

            {/* Bottom badge */}
            <div className="absolute -bottom-4 left-4 bg-black text-white px-4 py-2 text-sm rounded-full">
              IAP 2024
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-serif font-bold text-black mb-6">
            IAP-ID Academic Programs 2026
          </h2>

          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            This is for your information regarding IAP-ID Academic Programs 2026.
            The IAP-ID has the following programs during the course of the year:
          </p>

          <ul className="space-y-6 text-lg text-gray-900 list-disc pl-6">
            <li>
              Mid-Year Teaching Program (usually a Workshop) in April or May
            </li>
            <li>
              IAP-ID Annual CME usually in August or September.
            </li>
            <li>
              Annual Conference (usually held in conjunction with IAPM Conference)
              usually November or December having a symposium and slide seminar.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AcademicPrograms;
