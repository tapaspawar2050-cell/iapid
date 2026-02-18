import React from "react";

const AcademicProgram2026 = () => {
  return (
    <section className="bg-white py-12 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ================= PAGE HEADER & TITLE ================= */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          {/* Profile Image - Using iap-profile.jpg */}
          <div className="w-full md:w-1/3">
            <img 
              src="/iap-profile.jpg" 
              alt="IAP-ID Profile" 
              className="w-full border shadow-sm rounded-sm"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              IAP-ID Academic Programs 2026
            </h1>
            <p className="text-lg leading-relaxed text-gray-800">
              This is for your information regarding IAP-ID Academic Programs 2026. 
              The IAP-ID has the following programs during the course of the year:
            </p>
            
            {/* Program List */}
            <ul className="list-disc pl-6 mt-4 space-y-3 text-lg text-gray-800">
              <li><strong>Mid-Year Teaching Program</strong> (usually a Workshop) in April or May</li>
              <li><strong>IAP-ID Annual CME</strong> usually in August or September.</li>
              <li><strong>Annual Conference</strong> (usually held in conjunction with IAPM Conference) usually November or December having a symposium and slide seminar.</li>
            </ul>
          </div>
        </div>

        {/* ================= PROPOSAL GUIDELINES ================= */}
        <div className="space-y-6 text-[17px] leading-relaxed text-gray-800 border-t pt-8">
          <p>
            Those members desirous of organizing and hosting the Mid Year Teaching Program 2026 or Annual CME 2026 should 
            send their proposals and its theme in the formats uploaded on the website of the International Academy of Pathology - 
            Indian Division (IAP-ID) to the Secretary & Treasurer.
          </p>

          <p>
            For the Annual Conference 2026 (held along with IAPM Conference) those desirous of being Moderators for 
            Slide seminar or Symposium should send their names along with the proposed titles to the Secretary and Treasurer, IAP-ID.
          </p>

          <p>
            As per the decision of the General Body, certain topics may be suggested as subjects for Slide seminar and Symposium. 
            However, the person selected as moderator shall be the one who is felt to be best suited for the particular topic.
          </p>

          <p className="font-bold text-red-600 italic underline">
            All proposals should reach the Secretary & Treasurer, IAP-ID, in prescribed formats latest by 30th October 2025.
          </p>

          <div className="py-4">
            <a href="#" className="text-red-600 font-bold hover:underline">
              Click here to download the format for the proposal from the IAP ID website
            </a>
          </div>

          <p className="bg-yellow-50 p-4 border-l-4 border-yellow-400 italic">
            Kindly note that, those who are sending the proposals it is mandatory that their membership is updated and should 
            mention their Membership no in the proposal form. Also, if the membership has expired, it should be renewed till date 
            along with the payment of arrears.
          </p>

          <p>
            The Moderators whose topics are selected for various academic programs should ensure that all the speakers selected 
            are either existing members of IAP-ID and if not should become members of IAP-ID.
          </p>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="mt-12 bg-gray-50 p-8 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-bold mb-4 uppercase text-[#a11d43]">The proposals should be sent to:</h2>
          <div className="space-y-1 text-lg">
            <p className="font-bold">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of pathology Nizam's institute of medical science</p>
            <p>Punjagutta Hyderabad 500082</p>
            <p className="pt-2">
              Email: <span className="text-blue-600 font-medium">Secretary.IAPID25@gmail.com</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicProgram2026;