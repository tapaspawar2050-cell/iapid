import React from "react";

const Membership = () => {
  return (
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          Membership
        </h1>

        {/* DOWNLOAD LINKS SECTION */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-14 space-y-6 text-lg">

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

        {/* FEES SECTION */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            Fees w.e.f 1st January 2023
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-4">
            <p>
              <strong>Annual Membership Fee:</strong> ₹ 1000
            </p>
            <p>
              <strong>5 Years Membership Fee:</strong> ₹ 5000
            </p>
            <p>
              <strong>*Associate Membership Fee (Annual):</strong> ₹ 500
            </p>

            <p className="mt-6 text-gray-700">
              *IAP-ID has started Associate Membership for postgraduate students in Pathology and others. 
              The Associate Members would have no voting rights or other statutory rights of full members. 
              These members can become full members after attaining their postgraduate qualification.
              For further details please contact the Secretary & Treasurer, IAP-ID.
            </p>
          </div>
        </div>

        {/* PAYMENT DETAILS */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            Payment Details
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-6">

            <p>
              Please send the membership fee by Demand Draft / Cheque drawn in favour of:
            </p>

            <p className="font-semibold">
              "SECRETARY & TREASURER, IAP- INDIAN DIVISION"
            </p>

            <p>
              Payable at "Hyderabad".
            </p>

            <hr className="my-4" />

            <h3 className="text-2xl font-semibold">
              For Online Transfer of Membership Fee:
            </h3>

            <p><strong>Account Name:</strong> Secretary Treasurer IAP- Indian Division</p>
            <p><strong>Name:</strong> Dr Megha Uppin</p>
            <p><strong>Account Number:</strong> 3632000100082636</p>
            <p><strong>MICR Code:</strong> 500024012</p>
            <p><strong>IFSC Code:</strong> PUNB0363200</p>

            <p className="mt-4">
              Membership by DD / Cheque drawn in favour of 
              "Secretary & Treasurer, IAP- Indian Division". 
              Payable at Hyderabad.
            </p>
          </div>
        </div>

        {/* MAILING ADDRESS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Mail the Forms To
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-lg space-y-2">

            <p className="font-semibold">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer</p>
            <p>IAP - Indian Division</p>
            <p>Department of Pathology</p>
            <p>Nizam's Institute of Medical Science</p>
            <p>Punjagutta Hyderabad 500082</p>
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

export default Membership;
