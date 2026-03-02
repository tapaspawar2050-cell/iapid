import React from "react";

const Membership = () => {

  const downloads = [
    {
      label: "Membership Form",
      file: "/membership_form.pdf"
    },
    {
      label: "Associate Membership Form",
      sub: "(Post Graduate students, etc.)",
      file: "/associatemembershipfrom_iapid2.pdf"
    },
    {
      label: "Members List",
      sub: "Active Members list as on 1st May 2025",
      file: "/active_members_list_may_2025.pdf"
    },
    {
      label: "Members List",
      sub: "Active Members list as on 1st June 2024",
      file: "/Active_members_list_2024.pdf"
    },
    {
      label: "Members List",
      sub: "Active Members list as on 1st January 2024",
      file: "/Active_members_list.pdf"
    },
    {
      label: "Members List",
      sub: "Active Members list as on 1st September 2023",
      file: "/ACTIVE_MEMBERS_IAP_ID_23.pdf"
    },
    {
      label: "Members List",
      sub: "Active Members list as on 1st March 2023",
      file: "/ACTIVE_MEMBERS_IAP_ID_23.pdf"
    },
  ];

  return (
    <section className="bg-white py-12 font-serif text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl border-b border-gray-300 pb-4 mb-8 uppercase tracking-wide">
          MEMBERSHIP
        </h1>

        {/* DOWNLOAD LINKS */}
        <div className="space-y-8 mb-12">
          {downloads.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
              <p className="text-[#a11d43] font-bold text-xl">
                {item.label}{" "}
                {item.sub && (
                  <span className="text-gray-600 font-normal">
                    {item.sub}
                  </span>
                )}
                <a
                  href={item.file}
                  download
                  className="text-[#c71585] italic font-normal text-lg ml-2 hover:underline"
                >
                  Download HERE
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* FEES SECTION */}
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

        {/* INFORMATION SECTION */}
        <div className="space-y-10 text-[16px] leading-relaxed text-gray-800">

          <p className="italic">
            *IAP-ID has started Associate Membership for postgraduate students in Pathology and others.
          </p>

          {/* DD / Cheque Info */}
          <div>
            <p>Please send the membership fee by Demand Draft / Cheque drawn in favour of</p>
            <p className="font-bold">
              "SECRETARY & TREASURER, IAP- INDIAN DIVISION" payable at "Hyderabad".
            </p>
          </div>

          {/* MAIL ADDRESS */}
          <div>
            <h3 className="text-[#a11d43] text-2xl font-bold mb-3">
              Mail the forms to:
            </h3>

            <div className="space-y-1">
              <p className="font-bold">Dr. Megha Uppin</p>
              <p>Secretary & Treasurer</p>
              <p>IAP - Indian Division</p>
              <p>Department of Pathology</p>
              <p>Nizam's Institute of Medical Sciences</p>
              <p>Punjagutta Hyderabad 500082</p>
              <p>
                Email:{" "}
                <span className="text-blue-600">
                  secretary.iapid25@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* ONLINE TRANSFER SECTION (NEW ADDED) */}
          <div>
            <h3 className="text-[#a11d43] text-2xl font-bold mb-4">
              For Online Transfer of Membership Fee:
            </h3>

            <div className="space-y-2">
              <p>Secretary Treasurer IAP- Indian Division</p>
              <p>Dr Megha Uppin</p>
              <p>Secretary and Treasurer</p>
              <p>Account Number - 3632000100082636</p>
              <p>For NEFT Transfer - MICR Code - 500024012</p>
              <p>IFSC Code - PUNB0363200</p>
              <p>
                Membership by DD / Cheque drawn in favour of 
                "Secretary & Treasurer, IAP- Indian Division". 
                Payable at Hyderabad.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Membership;