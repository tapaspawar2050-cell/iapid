import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import profileImg from "../assets/iap-profile.jpg";

const AcademicPrograms2026 = () => {
  return (
    <section className="bg-[#d9d9d9] py-16 font-serif text-black">
      <div className="max-w-7xl mx-auto px-10">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* Left Arrow */}
            <button className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl">
              <FaChevronLeft />
            </button>

            {/* White Image Container */}
            <div className="bg-white p-6 shadow-sm w-[420px]">
              <img
                src={profileImg}
                alt="IAP Profile"
                className="w-full"
              />
            </div>

            {/* Right Arrow */}
            <button className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl">
              <FaChevronRight />
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h1 className="text-5xl font-bold mb-8">
              IAP-ID Academic Programs 2026
            </h1>

            <p className="text-xl leading-relaxed mb-8">
              This is for your information regarding IAP-ID Academic Programs 2026.
              The IAP-ID has the following programs during the course of the year:
            </p>

            <ul className="list-disc pl-8 space-y-6 text-xl leading-relaxed">
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

        {/* FULL WIDTH BOTTOM CONTENT */}
        <div className="mt-16 text-xl leading-relaxed space-y-8">

          <p>
            • Those members desirous of organizing and hosting the Mid Year
            Teaching Program 2026 or Annual CME 2026 should send their
            proposals and its theme in the formats uploaded on the website of
            the International Academy of Pathology - Indian Division (IAP-ID)
            to the Secretary & Treasurer, Dr. Megha Uppin (address on website).
          </p>

          <p>
            • For the Annual Conference 2026 (held along with IAPM Conference)
            those desirous of being Moderators for Slide seminar or Symposium
            should send their names along with the proposed titles to the
            Secretary and Treasurer, IAP-ID.
          </p>

          <p>
            • As per the decision of the General Body certain topics may be
            suggested as possible subjects for Slide seminar and Symposium.
            However, as per the decision of the Council and General Body of the
            IAP-ID, the person selected as moderator shall be the one who is
            felt to be best suited for the particular topic of Slide seminar
            and/or Symposium.
          </p>

          <p>
            • All proposals should reach the Secretary & Treasurer, IAP-ID, in
            prescribed formats latest by <strong>30th October 2025</strong>, so as
            the same proposals could be discussed and approved by the Council
            and General Body of the IAP-ID.
          </p>

          <p className="text-red-600">
            • Click here to download the format for the proposal from the IAP ID website
          </p>

          <p>
            • Kindly note that, those who are sending the proposals it is
            mandatory that their membership is updated and should mention
            their Membership no in the proposal form. Also, if the membership
            has expired, it should be renewed till date along with the payment
            of arrears.
          </p>

          <p>
            • The Moderators whose topics are selected for various academic
            programs should ensure that all the speakers selected are either
            existing members of IAP-ID and if not should become members of
            IAP-ID.
          </p>

          {/* ADDRESS SECTION */}
          <div className="mt-10">
            <p className="mb-4">
              The proposals should be sent to:
            </p>

            <p className="font-bold">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of pathology</p>
            <p>Nizam's institute of medical science</p>
            <p>Punjagutta Hyderabad 500082</p>
            <p>Email: Secretary.IAPID25@gmail.com</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicPrograms2026;
