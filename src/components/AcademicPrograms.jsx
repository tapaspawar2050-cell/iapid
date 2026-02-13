// React library import kar rahe hain
import React from "react";

// Poster image import kar rahe hain (assets folder se)
import apIapPoster from "../assets/iap-profile.jpg";

// Functional Component bana rahe hain
const AcademicPrograms = () => {
  return (

    // Section tag pura page ka background aur spacing set karta hai
    <section className="bg-[#dcdcdc] min-h-screen py-10 md:py-16 font-serif text-black">
      
      {/* Center container jo content ko middle me rakhta hai */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== PAGE TITLE ===== */}
        {/* Yeh page ka main heading hai */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-10 md:mb-16 leading-tight">
          IAP-ID Academic Programs 2026
        </h1>

        {/* ===== TOP SECTION (Image + Right Side Content) ===== */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-16">

          {/* ===== IMAGE SECTION ===== */}
          <div className="relative group">

            {/* Glow Border (hover karne par light effect aayega) */}
            <div
              className="absolute -inset-1 rounded-2xl 
                         bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 
                         opacity-0 group-hover:opacity-100 
                         blur-lg transition duration-500 
                         pointer-events-none"
            ></div>

            {/* White Card jisme image hai */}
            <div
              className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-lg
                         transition duration-500 transform
                         group-hover:scale-105 group-hover:-translate-y-2"
            >

              {/* Poster Image */}
              <img
                src={apIapPoster} // image source
                alt="IAP-ID Academic Program Poster" // accessibility ke liye
                loading="lazy" // image tab load hogi jab zarurat ho
                draggable="false" // image drag nahi hogi
                className="w-full rounded-lg select-none outline-none focus:outline-none"
              />

              {/* Light Glass Effect hover par */}
              <div
                className="absolute inset-0 rounded-2xl 
                           bg-white/10
                           opacity-0 group-hover:opacity-100
                           transition duration-500
                           pointer-events-none"
              ></div>

              {/* Orange Border hover par */}
              <div
                className="absolute inset-0 rounded-2xl
                           ring-2 ring-orange-400
                           opacity-0 group-hover:opacity-100
                           transition duration-500
                           pointer-events-none"
              ></div>

            </div>
          </div>

          {/* ===== RIGHT SIDE TEXT CONTENT ===== */}
          <div className="text-base sm:text-lg md:text-[20px] leading-relaxed space-y-6">

            {/* Simple paragraph */}
            <p>
              This is for your information regarding IAP-ID Academic Programs
              2026. The IAP-ID has the following programs during the course of
              the year:
            </p>

            {/* Bullet List */}
            <ul className="list-disc pl-6 md:pl-8 space-y-3 md:space-y-4">
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
        <div className="text-base sm:text-lg md:text-[19px] leading-relaxed space-y-6">

          {/* Paragraph 1 */}
          <p>
            Those members desirous of organizing and hosting the Mid Year Teaching
            Program 2026 or Annual CME 2026 should send their proposals and its theme
            in the formats uploaded on the website of the International Academy of
            Pathology - Indian Division (IAP-ID) to the Secretary & Treasurer,
            Dr. Megha Uppin (address on website).
          </p>

          {/* Paragraph 2 */}
          <p>
            For the Annual Conference 2026 (held along with IAPM Conference)
            those desirous of being Moderators for Slide seminar or Symposium
            should send their names along with the proposed titles to the
            Secretary and Treasurer, IAP-ID.
          </p>

          {/* Paragraph 3 */}
          <p>
            As per the decision of the General Body certain topics may be suggested
            as possible subjects for Slide seminar and Symposium.
          </p>

          {/* Last Date Highlight */}
          <p>
            All proposals should reach the Secretary & Treasurer, IAP-ID,
            in prescribed formats latest by{" "}
            <span className="font-bold text-red-600">
              30th October 2025
            </span>.
          </p>

          {/* ===== DOWNLOAD BUTTON ===== */}
          {/* Is button par click karne se document download hoga */}
          <a
            href="/IAP-ID-proposal-format.doc" // file public folder me honi chahiye
            download // ye attribute download karwata hai
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
          >
            Download Proposal Format
          </a>

          {/* Membership Instruction */}
          <p>
            Kindly note that those sending proposals must ensure that their
            membership is updated and mention their Membership number.
          </p>

          {/* Moderator Rule */}
          <p>
            The Moderators whose topics are selected should ensure that all
            speakers selected are existing members of IAP-ID.
          </p>

          {/* ===== CONTACT SECTION ===== */}
          <div className="mt-8">

            {/* Contact Heading */}
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              The proposals should be sent to:
            </h3>

            {/* Contact Details */}
            <p className="font-bold text-lg md:text-xl">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of Pathology</p>
            <p>Nizam's Institute of Medical Sciences</p>
            <p>Punjagutta Hyderabad 500082</p>

            {/* Email Link */}
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:Secretary.IAPID25@gmail.com" // email open karega
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

// Component export kar rahe hain taaki dusre file me use ho sake
export default AcademicPrograms;
