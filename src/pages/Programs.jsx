// Importing React library
// React helps us create components (parts of website)
import React from "react";

// Creating AcademicProgram2026 component
// This page shows information about academic programs for year 2026
const AcademicProgram2026 = () => {

  // return means what we want to show on the screen
  return (

    // Main section of the page
    // bg-[#dcdcdc] → light grey background
    // py-20 → padding top and bottom
    // min-h-screen → full screen height minimum
    // font-serif → serif style font
    // text-black → black text color
    <section className="bg-[#dcdcdc] py-20 min-h-screen font-serif text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= PAGE TITLE ================= */}
        {/* Big heading at top center */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          IAP-ID Academic Programs 2026
        </h1>

        {/* ================= INTRO PARAGRAPH ================= */}
        {/* Simple introduction text */}
        <p className="text-lg mb-6 leading-relaxed">
          This is for your information regarding IAP-ID Academic Programs 2026.
          The IAP-ID has the following programs during the course of the year:
        </p>

        {/* ================= PROGRAM LIST ================= */}
        {/* ul means unordered list (bullet points) */}
        <ul className="list-disc pl-8 text-lg space-y-3 mb-10">

          {/* First program */}
          <li>
            <strong>Mid-Year Teaching Program</strong> (usually a Workshop) in April or May
          </li>

          {/* Second program */}
          <li>
            <strong>IAP-ID Annual CME</strong> usually in August or September.
          </li>

          {/* Third program */}
          <li>
            <strong>Annual Conference</strong> (usually held with IAPM Conference) 
            usually November or December having a symposium and slide seminar.
          </li>

        </ul>

        {/* ================= HOSTING PROPOSALS INFO ================= */}
        {/* Information for members who want to host programs */}
        <p className="text-lg mb-6 leading-relaxed">
          Members who want to organize Mid Year Teaching Program 2026 
          or Annual CME 2026 should send their proposal and theme 
          to the Secretary & Treasurer.
        </p>

        {/* ================= MODERATOR INFO ================= */}
        {/* Information for people who want to become moderators */}
        <p className="text-lg mb-6 leading-relaxed">
          People who want to become Moderators for Slide seminar or Symposium 
          should send their name and topic title to the Secretary & Treasurer.
        </p>

        {/* ================= TOPIC SELECTION RULE ================= */}
        {/* Rule about how moderators are selected */}
        <p className="text-lg mb-6 leading-relaxed">
          The final moderator will be selected by the Council and General Body 
          based on who is most suitable for the topic.
        </p>

        {/* ================= DEADLINE SECTION ================= */}
        {/* Important last date */}
        <p className="text-lg mb-6 leading-relaxed">
          All proposals must reach before{" "}
          
          {/* Deadline date in red and bold */}
          <span className="font-bold text-red-600">
            30th October 2025
          </span>, 
          
          so they can be discussed and approved.
        </p>

        {/* ================= DOWNLOAD LINK ================= */}
        {/* Link to download proposal format */}
        <div className="mb-8">
          <a
            href="#"
            className="text-blue-700 font-semibold underline hover:text-blue-900"
          >
            Click here to download the format for the proposal from the IAP ID website
          </a>
        </div>

        {/* ================= MEMBERSHIP RULE ================= */}
        {/* Important rule about membership */}
        <p className="text-lg mb-6 leading-relaxed">
          Only members with active membership can send proposals.
          Membership number must be mentioned in the form.
        </p>

        <p className="text-lg mb-10 leading-relaxed">
          Selected moderators must ensure that all speakers are members of IAP-ID.
        </p>

        {/* ================= CONTACT SECTION ================= */}
        {/* White box containing contact details */}
        <div className="bg-white p-8 rounded-xl shadow-lg">

          {/* Contact heading */}
          <h2 className="text-2xl font-bold mb-4">
            Proposals Should Be Sent To:
          </h2>

          {/* Contact details */}
          <p className="mb-2 font-semibold">Dr. Megha Uppin</p>
          <p>Secretary & Treasurer IAP-ID</p>

          <p>
            Professor, Department of Pathology<br />
            Nizam's Institute of Medical Sciences<br />
            Punjagutta, Hyderabad – 500082
          </p>

          {/* Email link */}
          <p className="mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Secretary.IAPID25@gmail.com"
              className="text-blue-700 hover:underline"
            >
              Secretary.IAPID25@gmail.com
            </a>
          </p>

        </div>

      </div>
    </section>
  );
};

// Exporting component
// So we can use it in App.js or other pages
export default AcademicProgram2026;
