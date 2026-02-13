// Importing React
import React from "react";

// Importing poster image from assets folder
import apiapImg from "../assets/ap-iap-2025.png";

// This is APIAP2025 component
// It shows information about AP-IAP 2025 conference
const APIAP2025 = () => {

  // return means what we want to show on the screen
  return (

    // section is a big container for the whole page
    // It has background color, padding and full screen height
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid layout with 3 columns on medium and large screens */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* ================= LEFT SIDE - POSTER IMAGE ================= */}
          <div>
            <img
              src={apiapImg}   // showing imported image
              alt="AP-IAP 2025"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* ================= CENTER CONTENT ================= */}
          {/* md:col-span-1 means this takes 1 column space */}
          <div className="md:col-span-1 space-y-10">

            {/* -------- About the Opportunity -------- */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About the Opportunity
              </h2>

              {/* Paragraph explaining opportunity */}
              <p className="mb-4 text-lg">
                We are excited to announce an incredible opportunity for young
                Indian pathologists to showcase their research at the prestigious
                <span className="text-red-600 font-semibold">
                  {" "}14th Asia Pacific International Academy of Pathology Congress (AP-IAP 2025)
                </span>.
              </p>

              {/* Venue information */}
              <p className="text-lg mb-2">
                <strong>Venue:</strong> Centara Grand at Central Plaza Ladprao, Bangkok, Thailand
              </p>

              {/* Dates information */}
              <p className="text-lg">
                <strong>Dates:</strong> November 5 – 7, 2025
              </p>
            </div>

            {/* -------- Bursary Details -------- */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Bursary Details
              </h2>

              {/* Bullet points list */}
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Free Registration for the Congress</li>
                <li>Cash Grant of 10,000 Thai Baht</li>
              </ul>
            </div>

            {/* -------- Eligibility Criteria -------- */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Eligibility Criteria
              </h2>

              {/* Bullet list */}
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Completed MD/DNB in Pathology</li>
                <li>Age below 35 years</li>
                <li>
                  Must be a Member of IAP-ID
                  (*Membership can be applied for during submission*)
                </li>
              </ul>
            </div>

            {/* -------- How to Apply -------- */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                How to Apply
              </h2>

              {/* Steps heading */}
              <p className="font-semibold mb-2">
                Steps to Submit Your Abstract:
              </p>

              {/* Numbered list */}
              <ul className="list-decimal pl-6 text-lg space-y-2">

                {/* Step 1 */}
                <li>Write your abstract as per the guidelines.</li>

                {/* Step 2 */}
                <li>
                  Complete the IAP-ID membership application form
                  (if not already a member).
                </li>

                {/* Step 3 */}
                <li>
                  Email both documents to{" "}
                  <span className="text-orange-600 font-semibold">
                    secretary.IAPID25@gmail.com
                  </span>{" "}
                  before <strong>May 30, 2025</strong>.
                </li>
              </ul>

              {/* Deadline highlighted */}
              <p className="mt-4 font-semibold text-red-600">
                Deadline for Submission: May 30, 2025
              </p>
            </div>

            {/* -------- Candidate Announcement Box -------- */}
            {/* White box with shadow */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Candidate Announcement for AP-IAP Thailand
              </h2>

              <p><strong>Name:</strong> Dr Surabhi Jain</p>
              <p><strong>Institute:</strong> AIIMS New Delhi</p>
              <p>
                <strong>Topic:</strong> Copy number alterations of 9p24 can
                differentiate between Hodgkin lymphoma and Peripheral T-cell
                lymphomas: A diagnostic surrogate.
              </p>
            </div>

          </div>

          {/* ================= RIGHT SIDE - DOWNLOAD SECTION ================= */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">

              {/* Title */}
              <h2 className="text-2xl font-bold mb-6">
                Download Documents
              </h2>

              {/* List of downloadable files */}
              <ul className="space-y-4 text-lg">

                {/* Each link has download attribute */}
                {/* When clicked, file will download */}

                <li>
                  <a
                    href="/Abstract template 2025.docx"
                    download
                    className="text-pink-600 hover:underline"
                  >
                    Abstract Template 2025
                  </a>
                </li>

                <li>
                  <a
                    href="/Application form.docx"
                    download
                    className="text-pink-600 hover:underline"
                  >
                    IAP-ID Membership Application Form
                  </a>
                </li>

                <li>
                  <a
                    href="/E-poster preparation guide.pdf"
                    download
                    className="text-pink-600 hover:underline"
                  >
                    E-poster Preparation Guide
                  </a>
                </li>

                <li>
                  <a
                    href="/Indian Division_Traval bursaries letter IAP Thailand.pdf"
                    download
                    className="text-pink-600 hover:underline"
                  >
                    Indian Division Travel Bursaries Letter IAP Thailand
                  </a>
                </li>

                <li>
                  <a
                    href="/Poster template 2025.pptx"
                    download
                    className="text-pink-600 hover:underline"
                  >
                    Poster Template 2025
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// Exporting component so we can use it in other files
export default APIAP2025;
