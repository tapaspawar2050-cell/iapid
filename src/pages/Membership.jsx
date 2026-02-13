// Importing React library
// React is needed to create components
import React from "react";

// This is Membership component
// It shows membership forms, fees, payment details and address
const Membership = () => {

  // return means what we want to show on the screen
  return (

    // <section> is the full page container
    // bg-[#dcdcdc] → light grey background
    // py-20 → padding top and bottom
    // font-serif → serif font style
    // text-black → black text color
    // min-h-screen → minimum full screen height
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= PAGE TITLE ================= */}
        {/* Big heading at top */}
        <h1 className="text-5xl font-bold mb-10">
          Membership
        </h1>

        {/* ================= DOWNLOAD LINKS SECTION ================= */}
        {/* White box that contains download links */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-14 space-y-6 text-lg">

          {/* Membership Form */}
          <p>
            Membership Form{" "}
            {/* This looks like a link (but not real link yet) */}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          {/* Associate Membership Form */}
          <p>
            Associate Membership Form (Post Graduate students, etc.){" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

          {/* Members list - different dates */}
          <p>
            Members List Active Members list as on 1st May 2025{" "}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Download HERE
            </span>
          </p>

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

          {/* Section heading */}
          <h2 className="text-3xl font-bold mb-6">
            Fees w.e.f 1st January 2023
          </h2>

          {/* White box for fees details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-4">

            {/* Fee details */}
            <p>
              <strong>Annual Membership Fee:</strong> ₹ 1000
            </p>

            <p>
              <strong>5 Years Membership Fee:</strong> ₹ 5000
            </p>

            <p>
              <strong>*Associate Membership Fee (Annual):</strong> ₹ 500
            </p>

            {/* Extra information about associate membership */}
            <p className="mt-6 text-gray-700">
              *Associate Members (like postgraduate students) cannot vote.
              After completing their degree, they can become full members.
            </p>
          </div>
        </div>

        {/* ================= PAYMENT DETAILS ================= */}
        <div className="mb-14">

          {/* Section title */}
          <h2 className="text-3xl font-bold mb-6">
            Payment Details
          </h2>

          {/* White box for payment information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-6">

            <p>
              Please send the membership fee by Demand Draft / Cheque:
            </p>

            {/* Account name in bold */}
            <p className="font-semibold">
              "SECRETARY & TREASURER, IAP- INDIAN DIVISION"
            </p>

            <p>
              Payable at "Hyderabad".
            </p>

            {/* Horizontal line for separation */}
            <hr className="my-4" />

            {/* Online payment heading */}
            <h3 className="text-2xl font-semibold">
              For Online Transfer of Membership Fee:
            </h3>

            {/* Bank details */}
            <p><strong>Account Name:</strong> Secretary Treasurer IAP- Indian Division</p>
            <p><strong>Name:</strong> Dr Megha Uppin</p>
            <p><strong>Account Number:</strong> 3632000100082636</p>
            <p><strong>MICR Code:</strong> 500024012</p>
            <p><strong>IFSC Code:</strong> PUNB0363200</p>

          </div>
        </div>

        {/* ================= MAILING ADDRESS ================= */}
        <div>

          {/* Section heading */}
          <h2 className="text-3xl font-bold mb-6">
            Mail the Forms To
          </h2>

          {/* Address box */}
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

// Exporting Membership component
// So we can use it in App.js or other pages
export default Membership;
