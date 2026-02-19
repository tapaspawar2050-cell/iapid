import React from "react";

const AcademicProgram2026 = () => {
  // Download handler for the Word file
  const handleDownload = (e) => {
    e.preventDefault();
    // File must be placed in the 'public' folder of your React project
    const link = document.createElement("a");
    link.href = "/IAP_proposal_format.doc"; 
    link.download = "IAP_proposal_format.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // Background color set to light beige/grey to match screenshot
    <section className="bg-[#F4F4F4] py-12 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ================= HEADER & IMAGE LAYOUT ================= */}
        {/* Side-by-side layout for profile image and main title */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
          
          {/* Left Side: Profile Image with white border */}
          <div className="w-full md:w-1/3">
            <img 
              src="/iap-profile.jpg" 
              alt="IAP-ID Profile" 
              className="w-full h-auto border-8 border-white shadow-md rounded-sm"
            />
          </div>

          {/* Right Side: Title and Academic Program List */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              IAP-ID Academic Programs 2026
            </h1>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              This is for your information regarding IAP-ID Academic Programs 2026. 
              The IAP-ID has the following programs during the course of the year:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
              <li><strong>Mid-Year Teaching Program</strong> (usually a Workshop) in April or May</li>
              <li><strong>IAP-ID Annual CME</strong> usually in August or September</li>
              <li><strong>Annual Conference</strong> (usually held in conjunction with IAPM Conference) usually November or December having a symposium and slide seminar</li>
            </ul>
          </div>
        </div>

        {/* ================= PROPOSAL GUIDELINES ================= */}
        {/* Detailed text based on guidelines and membership requirements */}
        <div className="space-y-6 text-[17px] leading-relaxed text-gray-800 border-t border-gray-300 pt-8">
          <p>
            Those members desirous of organizing and hosting the Mid Year Teaching Program 2026 or Annual CME 2026 should 
            send their proposals and its theme in the formats uploaded on the website of the International Academy of Pathology - 
            Indian Division (IAP-ID) to the Secretary & Treasurer, Dr. Megha Uppin (address on website).
          </p>

          <p>
            For the Annual Conference 2026 (held along with IAPM Conference) those desirous of being Moderators for 
            Slide seminar or Symposium should send their names along with the proposed titles to the Secretary and Treasurer, IAP-ID.
          </p>

          <p>
            As per the decision of the General Body certain topics may be suggested as possible subjects for Slide seminar and Symposium. 
            However, as per the decision of the Council and General Body of the IAP-ID, the person selected as moderator shall be the one 
            who is felt to be best suited for the particular topic of Slide seminar and/or Symposium.
          </p>

          {/* Bold Deadline */}
          <p className="font-bold text-gray-900 italic">
            All proposals should reach the Secretary & Treasurer, IAP-ID, in prescribed formats latest by 30th October 2025, 
            so as the same proposals could be discussed and approved by the Council and General Body of the IAP-ID.
          </p>

          {/* RED DOWNLOAD LINK for Word File */}
          <div className="py-2">
            <button 
              onClick={handleDownload}
              className="text-red-600 font-bold hover:underline cursor-pointer transition-all"
            >
              Click here to download the format for the proposal from the IAP ID website
            </button>
          </div>

          <p className="italic text-gray-800">
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
        <div className="mt-12 space-y-1">
          <p className="font-bold text-lg">The proposals should be sent to:</p>
          <div className="text-lg text-gray-900">
            <p className="font-bold">Dr. Megha Uppin</p>
            <p>Secretary & Treasurer IAP-ID</p>
            <p>Professor, Department of pathology Nizam's institute of medical science</p>
            <p>Punjagutta Hyderabad 500082</p>
            <p>Email: <span className="font-medium">Secretary.IAPID25 @gmail.com</span></p>
          </div>
        </div>

        {/* Bottom Read More text */}
        <div className="text-right mt-10">
          <span className="text-sm font-bold cursor-pointer hover:underline text-gray-700">Read More &gt;&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default AcademicProgram2026;