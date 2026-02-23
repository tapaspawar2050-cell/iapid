import React from "react";
import apIapPoster from "../assets/iap-profile.jpg";

const AcademicPrograms = () => {
  return (
    <section className="bg-[#dcdcdc] w-full min-h-screen font-serif text-black overflow-x-hidden">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-16">

        {/* ===== TITLE ===== */}
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl 
                       font-bold text-center mb-12 md:mb-16 leading-tight">
          IAP-ID Academic Programs 2026
        </h1>

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ===== IMAGE CARD ===== */}
          <div className="flex justify-center md:justify-start">

            <div className="bg-white rounded-2xl shadow-xl p-6 
                            w-full max-w-md lg:max-w-lg
                            transition duration-500 hover:scale-105">

              <img
                src={apIapPoster}
                alt="IAP-ID Academic Program Poster"
                className="w-full h-auto rounded-lg object-cover"
                draggable="false"
              />

            </div>
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-6">

            <p>
              This is for your information regarding IAP-ID Academic Programs
              2026. The IAP-ID has the following programs during the course of
              the year:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                Mid-Year Teaching Program (usually a Workshop) in April or May
              </li>
              <li>
                IAP-ID Annual CME usually in August or September.
              </li>
              <li>
                Annual Conference (usually held in conjunction with IAPM
                Conference) usually November or December having a symposium
                and slide seminar.
              </li>
            </ul>

          </div>
        </div>

        {/* ===== FULL DETAILS SECTION ===== */}
        <div className="mt-14 text-base sm:text-lg md:text-xl leading-relaxed space-y-6">

          <p>
            Those members desirous of organizing and hosting the Mid Year
            Teaching Program 2026 or Annual CME 2026 should send their
            proposals and its theme in the formats uploaded on the website
            of the International Academy of Pathology - Indian Division
            (IAP-ID) to the Secretary & Treasurer, Dr. Megha Uppin
            (address on website).
          </p>

          <p>
            For the Annual Conference 2026 (held along with IAPM Conference)
            those desirous of being Moderators for Slide seminar or Symposium
            should send their names along with the proposed titles to the
            Secretary and Treasurer, IAP-ID.
          </p>

          <p>
            As per the decision of the General Body certain topics may be
            suggested as possible subjects for Slide seminar and Symposium.
          </p>

          <p>
            All proposals should reach the Secretary & Treasurer, IAP-ID,
            in prescribed formats latest by{" "}
            <span className="font-bold text-red-600">
              30th October 2025
            </span>.
          </p>

          {/* Download Link */}
          <p className="mt-6">
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
          <div className="mt-10">

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              The proposals should be sent to:
            </h3>

            <p className="font-bold text-lg md:text-xl">
              Dr. Megha Uppin
            </p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of Pathology</p>
            <p>Nizam's Institute of Medical Sciences</p>
            <p>Punjagutta Hyderabad 500082</p>

            <p className="mt-4 break-words">
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