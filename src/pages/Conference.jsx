// Importing React library
import React from "react";

// This is ConferenceCME component
// It shows information about Conference and CME programs
const ConferenceCME = () => {

  // return means what we want to display on the screen
  return (

    // section is a big container for the full page
    // It has background color, padding and minimum full screen height
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-5xl font-bold mb-10">
          Conference / CME
        </h1>

        {/* ================= INTRO SECTION ================= */}
        {/* White box with shadow */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-14 text-lg leading-relaxed space-y-6">

          {/* Paragraph 1 */}
          <p>
            The IAP-ID organizes various academic activities throughout the year
            including the Mid Year Teaching Program, Annual CME and the Annual
            Conference held along with the IAPM Conference.
          </p>

          {/* Paragraph 2 */}
          <p>
            Participation in Conferences, Slide Seminars and CME programs is
            open to members of IAP-ID. Members receive priority registration,
            academic updates and access to scientific discussions.
          </p>

          {/* Important note */}
          <p className="font-semibold">
            Kindly ensure your membership is active before registering for any
            Conference / CME program.
          </p>
        </div>

        {/* ================= MEMBERSHIP SECTION ================= */}
        <h2 className="text-4xl font-bold mb-8">
          Membership Details
        </h2>

        {/* ================= DOWNLOAD LINKS ================= */}
        {/* White box containing download links */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-14 space-y-6 text-lg">

          {/* Each paragraph contains a download option */}

          <p>
            Membership Form{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          <p>
            Associate Membership Form (Post Graduate students, etc.){" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          <p>
            Members List Active Members list as on 1st May 2025{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          {/* More member list download links */}
          <p>
            Members List Active Members list as on 1st June 2024{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          <p>
            Members List Active Members list as on 1st January 2024{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          <p>
            Members List Active Members list as on 1st September 2023{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          <p>
            Members List Active Members list as on 1st March 2023{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

        </div>

        {/* ================= FEES SECTION ================= */}
        <div className="mb-14">

          {/* Section title */}
          <h2 className="text-3xl font-bold mb-6">
            Fees w.e.f 1st January 2023
          </h2>

          {/* White box for fees details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-4">

            {/* Membership fees */}
            <p><strong>Annual Membership Fee:</strong> ₹ 1000</p>
            <p><strong>5 Years Membership Fee:</strong> ₹ 5000</p>
            <p><strong>*Associate Membership Fee (Annual):</strong> ₹ 500</p>

            {/* Extra explanation */}
            <p className="mt-6 text-gray-700">
              *IAP-ID has started Associate Membership for postgraduate students
              in Pathology and others. Associate Members have no voting rights.
              They can become full members after attaining their postgraduate qualification.
              For further details please contact the Secretary & Treasurer, IAP-ID.
            </p>
          </div>
        </div>

        {/* ================= PAYMENT DETAILS ================= */}
        <div className="mb-14">

          <h2 className="text-3xl font-bold mb-6">
            Payment Details
          </h2>

          {/* White box for payment information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-6">

            {/* Payment method by Cheque/DD */}
            <p>
              Please send the membership fee by Demand Draft / Cheque drawn in favour of:
            </p>

            {/* Account name */}
            <p className="font-semibold">
              "SECRETARY & TREASURER, IAP- INDIAN DIVISION"
            </p>

            <p>Payable at Hyderabad.</p>

            {/* Line separator */}
            <hr className="my-4" />

            {/* Online transfer section */}
            <h3 className="text-2xl font-semibold">
              For Online Transfer
            </h3>

            {/* Bank details */}
            <p><strong>Account Name:</strong> Secretary Treasurer IAP- Indian Division</p>
            <p><strong>Name:</strong> Dr Megha Uppin</p>
            <p><strong>Account Number:</strong> 3632000100082636</p>
            <p><strong>MICR Code:</strong> 500024012</p>
            <p><strong>IFSC Code:</strong> PUNB0363200</p>

            {/* Reminder about cheque */}
            <p className="mt-4">
              Membership by DD / Cheque drawn in favour of 
              "Secretary & Treasurer, IAP- Indian Division". 
              Payable at Hyderabad.
            </p>
          </div>
        </div>

        {/* ================= MAILING ADDRESS ================= */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Mail the Forms To
          </h2>

          {/* White box with address */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-2">

            <p className="font-semibold">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer</p>
            <p>IAP - Indian Division</p>
            <p>Department of Pathology</p>
            <p>Nizam's Institute of Medical Science</p>
            <p>Punjagutta Hyderabad 500082</p>

            {/* Email address */}
            <p>
              Email:{" "}
              <span className="text-orange-600 font-semibold">
                secretary.iapid25@gmail.com
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// Exporting component so we can use it in other files
export default ConferenceCME;
