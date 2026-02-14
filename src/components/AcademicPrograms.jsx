import React from "react";
import apIapPoster from "../assets/iap-profile.jpg";

const AcademicPrograms = () => {
  return (
    // overflow-x-hidden horizontal scroll prevent karega
    <section className="bg-[#dcdcdc] min-h-screen py-8 sm:py-10 md:py-16 font-serif text-black overflow-x-hidden">
      
      {/* Responsive Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== PAGE TITLE ===== */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-16 leading-tight">
          IAP-ID Academic Programs 2026
        </h1>

        {/* ===== TOP SECTION ===== */}
        {/* Mobile: 1 column | Desktop: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-start mb-10 md:mb-16">

          {/* ===== IMAGE SECTION ===== */}
          <div className="relative group w-full">

            {/* Glow Effect */}
            <div
              className="absolute -inset-1 rounded-2xl 
                         bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 
                         opacity-0 group-hover:opacity-100 
                         blur-lg transition duration-500 
                         pointer-events-none"
            ></div>

            {/* Card */}
            <div
              className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-lg
                         transition duration-500 transform
                         group-hover:scale-105 group-hover:-translate-y-2"
            >

              {/* Responsive Image */}
              <img
                src={apIapPoster}
                alt="IAP-ID Academic Program Poster"
                loading="lazy"
                draggable="false"
                className="w-full h-auto object-cover rounded-lg select-none"
              />

              {/* Glass Overlay */}
              <div
                className="absolute inset-0 rounded-2xl 
                           bg-white/10
                           opacity-0 group-hover:opacity-100
                           transition duration-500
                           pointer-events-none"
              ></div>

              {/* Orange Border */}
              <div
                className="absolute inset-0 rounded-2xl
                           ring-2 ring-orange-400
                           opacity-0 group-hover:opacity-100
                           transition duration-500
                           pointer-events-none"
              ></div>

            </div>
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed space-y-5 sm:space-y-6">

            <p>
              This is for your information regarding IAP-ID Academic Programs
              2026. The IAP-ID has the following programs during the course of
              the year:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 md:space-y-4">
              <li>Mid-Year Teaching Program (usually a Workshop) in April or May</li>
              <li>IAP-ID Annual CME usually in August or September.</li>
              <li>
                Annual Conference (usually held in conjunction with IAPM Conference)
                usually November or December having a symposium and slide seminar.
              </li>
            </ul>

          </div>
        </div>

        {/* ===== FULL DETAILS SECTION ===== */}
        <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-5 sm:space-y-6">

          <p>
            Those members desirous of organizing and hosting the Mid Year Teaching
            Program 2026 or Annual CME 2026 should send their proposals and its theme
            in the formats uploaded on the website of the International Academy of
            Pathology - Indian Division (IAP-ID) to the Secretary & Treasurer,
            Dr. Megha Uppin (address on website).
          </p>

          <p>
            For the Annual Conference 2026 (held along with IAPM Conference)
            those desirous of being Moderators for Slide seminar or Symposium
            should send their names along with the proposed titles to the
            Secretary and Treasurer, IAP-ID.
          </p>

          <p>
            As per the decision of the General Body certain topics may be suggested
            as possible subjects for Slide seminar and Symposium.
          </p>

          <p>
            All proposals should reach the Secretary & Treasurer, IAP-ID,
            in prescribed formats latest by{" "}
            <span className="font-bold text-red-600">
              30th October 2025
            </span>.
          </p>
{/* ===== DOWNLOAD LINK (Screenshot Style) ===== */}
<p className="mt-6 text-base sm:text-lg md:text-[19px] leading-relaxed">
  <a
    href="/IAP-ID-proposal-format.doc"
    download
    className="text-red-600 font-semibold hover:underline"
  >
    Click here
  </a>{" "}
  to download the format for the proposal from the IAP ID website.
</p>


          <p>
            Kindly note that those sending proposals must ensure that their
            membership is updated and mention their Membership number.
          </p>

          <p>
            The Moderators whose topics are selected should ensure that all
            speakers selected are existing members of IAP-ID.
          </p>

          {/* ===== CONTACT SECTION ===== */}
          <div className="mt-8">

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              The proposals should be sent to:
            </h3>

            <p className="font-bold text-base sm:text-lg md:text-xl">
              Dr. Megha Uppin
            </p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of Pathology</p>
            <p>Nizam's Institute of Medical Sciences</p>
            <p>Punjagutta Hyderabad 500082</p>

            <p className="mt-3 break-words">
              Email:{" "}
              <a
                href="mailto:Secretary.IAPID25@gmail.com"
                className="text-orange-600 font-semibold hover:underline"
              >
                Secretary.IAPID25@gmail.com
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicPrograms;
