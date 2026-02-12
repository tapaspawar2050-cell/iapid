import React from "react";
import apIapPoster from "../assets/iap-profile.jpg";

const AcademicPrograms = () => {
  return (
    <section className="bg-[#dcdcdc] min-h-screen py-16 font-serif text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-6xl font-bold text-center mb-16">
          IAP-ID Academic Programs 2026
        </h1>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

          {/* LEFT IMAGE */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img
              src={apIapPoster}
              alt="IAP Profile"
              className="w-full rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-[20px] leading-relaxed space-y-6">
            <p>
              This is for your information regarding IAP-ID Academic Programs
              2026. The IAP-ID has the following programs during the course of
              the year:
            </p>

            <ul className="list-disc pl-8 space-y-4">
              <li>
                Mid-Year Teaching Program (usually a Workshop) in April or May
              </li>
              <li>
                IAP-ID Annual CME usually in August or September.
              </li>
              <li>
                Annual Conference (usually held in conjunction with IAPM
                Conference) usually November or December having a symposium and
                slide seminar.
              </li>
            </ul>
          </div>
        </div>

        {/* FULL WIDTH CONTENT */}
        <div className="text-[19px] leading-relaxed space-y-6">

          <p>
            Those members desirous of organizing and hosting the Mid Year
            Teaching Program 2026 or Annual CME 2026 should send their
            proposals and its theme in the formats uploaded on the website of
            the International Academy of Pathology - Indian Division (IAP-ID)
            to the Secretary & Treasurer, Dr. Megha Uppin (address on website).
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
            However, as per the decision of the Council and General Body of the
            IAP-ID, the person selected as moderator shall be the one who is
            felt to be best suited for the particular topic of Slide seminar
            and/or Symposium.
          </p>

          <p>
            All proposals should reach the Secretary & Treasurer, IAP-ID, in
            prescribed formats latest by{" "}
            <span className="font-bold text-red-600">
              30th October 2025
            </span>, so as the same proposals could be discussed and approved
            by the Council and General Body of the IAP-ID.
          </p>

          <p className="text-red-600 font-semibold hover:underline cursor-pointer">
            Click here to download the format for the proposal from the IAP ID website
          </p>

          <p>
            Kindly note that, those who are sending the proposals it is mandatory
            that their membership is updated and should mention their Membership
            no in the proposal form. Also, if the membership has expired, it
            should be renewed till date along with the payment of arrears.
          </p>

          <p>
            The Moderators whose topics are selected for various academic
            programs should ensure that all the speakers selected are either
            existing members of IAP-ID and if not should become members of
            IAP-ID.
          </p>

          {/* CONTACT SECTION */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">
              The proposals should be sent to:
            </h3>

            <p className="font-bold text-xl">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of Pathology</p>
            <p>Nizam's Institute of Medical Sciences</p>
            <p>Punjagutta Hyderabad 500082</p>

            <p className="mt-3">
              Email:{" "}
              <span className="text-orange-600 font-semibold">
                Secretary.IAPID25@gmail.com
              </span>
            </p>
          </div>

          {/* READ MORE BUTTON */}
          <div className="text-right mt-10">
            <button className="text-black font-semibold hover:underline">
              Read More &gt;&gt;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicPrograms;
