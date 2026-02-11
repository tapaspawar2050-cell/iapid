import React from "react";
import apIapPoster from "../assets/AP-IAP 2025.png"; // 👈 add poster image inside assets

const APIAP2025 = () => {
  return (
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT POSTER */}
          <div>
            <img
              src={apIapPoster}
              alt="AP-IAP 2025"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="md:col-span-1 space-y-10">

            {/* About Opportunity */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About the Opportunity
              </h2>

              <p className="mb-4 text-lg">
                We are excited to announce an incredible opportunity for young
                Indian pathologists to showcase their research at the prestigious
                <span className="text-red-600 font-semibold">
                  {" "}14th Asia Pacific International Academy of Pathology Congress (AP-IAP 2025)
                </span>.
              </p>

              <p className="text-lg mb-2">
                <strong>Venue:</strong> Centara Grand at Central Plaza Ladprao, Bangkok, Thailand
              </p>

              <p className="text-lg">
                <strong>Dates:</strong> November 5 – 7, 2025
              </p>
            </div>

            {/* Bursary Details */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Bursary Details
              </h2>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Free Registration for the Congress</li>
                <li>Cash Grant of 10,000 Thai Baht</li>
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Eligibility Criteria
              </h2>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Completed MD/DNB in Pathology</li>
                <li>Age below 35 years</li>
                <li>
                  Must be a Member of IAP-ID
                  (*Membership can be applied for during submission*)
                </li>
              </ul>
            </div>

            {/* How to Apply */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                How to Apply
              </h2>

              <p className="font-semibold mb-2">
                Steps to Submit Your Abstract:
              </p>

              <ul className="list-decimal pl-6 text-lg space-y-2">
                <li>Write your abstract as per the guidelines.</li>
                <li>
                  Complete the IAP-ID membership application form
                  (if not already a member).
                </li>
                <li>
                  Email both documents to{" "}
                  <span className="text-orange-600 font-semibold">
                    secretary.IAPID25@gmail.com
                  </span>{" "}
                  before <strong>May 30, 2025</strong>.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-red-600">
                Deadline for Submission: May 30, 2025
              </p>
            </div>

            {/* Candidate Announcement */}
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

          {/* RIGHT DOWNLOAD SECTION */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                Download Documents
              </h2>

              <ul className="space-y-4 text-lg">

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

export default APIAP2025;
