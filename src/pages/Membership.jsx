import React from "react";

const Membership = () => {
  return (
    <section className="bg-white py-12 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-3xl font-normal border-b border-gray-300 pb-4 mb-8 uppercase tracking-wide">
          MEMBERSHIP
        </h1>

        {/* ================= DOWNLOAD LINKS SECTION ================= */}
        <div className="space-y-8 mb-12">
          {[
            { label: "Membership Form", link: "#" },
            { label: "Associate Membership Form", sub: "(Post Graduate students, etc.)", link: "#" },
            { label: "Members List", sub: "Active Members list as on 1st May 2025", link: "#" },
            { label: "Members List", sub: "Active Members list as on 1st June 2024", link: "#" },
            { label: "Members List", sub: "Active Members list as on 1st January 2024", link: "#" },
            { label: "Members List", sub: "Active Members list as on 1st September 2023", link: "#" },
            { label: "Members List", sub: "Active Members list as on 1st March 2023", link: "#" },
          ].map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
              <p className="text-[#a11d43] font-bold text-xl">
                {item.label} {item.sub && <span className="text-gray-600 font-normal">{item.sub}</span>}
                <span className="text-[#c71585] italic font-normal text-lg ml-2 cursor-pointer hover:underline">
                  Download HERE
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* ================= FEES SECTION (ORANGE BANNER) ================= */}
        <div className="my-16 shadow-xl border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-[#fecb00] text-black text-center py-3 font-bold text-lg border-b border-gray-300">
            Fees w.e.f 1st January 2023
          </div>
          
          <div className="p-8 space-y-6 text-lg">
            <div className="flex justify-between border-b pb-2">
              <span>Annual Membership Fee:</span>
              <span className="font-bold">₹ 1000</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>5 years Membership Fee:</span>
              <span className="font-bold">₹ 5000</span>
            </div>
            <div className="flex justify-between">
              <span>*Associate Membership Fee (Annual):</span>
              <span className="font-bold">₹ 500</span>
            </div>
          </div>
        </div>

        {/* ================= EXTRA INFO & PAYMENT DETAILS ================= */}
        <div className="space-y-8 text-[15px] leading-relaxed italic text-gray-800">
          <p>
            *IAP-ID has started Associate Membership for postgraduate students in Pathology and others. The Associate Members would have no voting rights or other statutory rights of full members. These members can become full members after attaining their postgraduate qualification. For the further details please contact the Secretary & Treasurer, IAP-ID
          </p>

          <div className="pt-4">
            <p>Please send the membership fee by Demand Draft / Cheque drawn in favour of</p>
            <p className="font-bold not-italic">
              "SECRETARY & TREASURER, IAP- INDIAN DIVISION" <span className="font-normal">payable at</span> "Hyderabad".
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-[#a11d43] text-2xl font-bold not-italic">Mail the forms to:</h3>
            <div className="not-italic text-gray-900 font-medium">
              <p className="font-bold">Dr. Megha Uppin</p>
              <p>Secretary & Treasurer</p>
              <p>IAP - Indian Division,</p>
              <p>Department of pathology Nizam's institute of medical science</p>
              <p>Punjagutta Hyderabad 500082</p>
              <p>Email: <span className="text-blue-600">secretary.iapid25@gmail.com</span></p>
            </div>
          </div>

          <div className="space-y-2 pt-6">
            <h3 className="text-[#a11d43] text-2xl font-bold not-italic">For Online Transfer of Membership Fee:</h3>
            <div className="not-italic text-gray-800">
              <p>Secretary Treasurer IAP- Indian Division</p>
              <p>Dr Megha Uppin</p>
              <p>Secretary and Treasurer</p>
              <p>Account Number - 3632000100082636</p>
              <p>For NEFT Transfer - MICR Code - 500024012</p>
              <p>IFSC Code - PUNB0363200</p>
              <p className="mt-4">Membership by DD / Cheque drawn in favour of "Secretary & Treasurer, IAP- Indian Division". Payable at Hyderabad .</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;