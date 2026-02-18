import React from "react";

const ConferenceCME = () => {
  // Latest Events Data based on your screenshot
  const eventData = [
    {
      title: "XXVIIth Annual CME of the International Academy of Pathology-Indian Division (IAP-ID)",
      subtitle: "Hepatopancreaticobiliary Pathology 1st - 2nd November 2025 Amrita Institute of Medical Sciences, Kochi",
      link: "#"
    },
    {
      title: "INTERNATIONAL ACADEMY OF PATHOLOGY - INDIAN DIVISION Annual Conference 2024",
      subtitle: "INTERNATIONAL ACADEMY OF PATHOLOGY - 12th December 2024 7.45 am-05.30 pm",
      location: "S. C. B. Medical College Cuttack, Odisha",
      link: "#"
    },
    {
      title: "INTERNATIONAL ACADEMY OF PATHOLOGY - INDIAN DIVISION Annual Conference 2024 Slide seminar programme",
      subtitle: "INTERNATIONAL ACADEMY OF PATHOLOGY - 12th December 2024 10.30-12.30 pm",
      location: "S. C. B. Medical College Cuttack, Odisha",
      link: "#"
    },
    {
      title: "IAP-ID Symposium: Salivary Gland Pathology- Solving Difficult Cases & Mastering Emerging Concepts",
      subtitle: "IAP-ID Symposium: Salivary Gland Pathology- 12th December 2024 2:00 pm to 4:00 pm",
      location: "SCB Medical College, Cuttack",
      link: "#"
    }
  ];

  return (
    <section className="bg-white py-12 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-3xl font-normal border-b border-[#a11d43] pb-4 mb-10 uppercase tracking-wide text-[#a11d43]">
          CONFERENCE / CME
        </h1>

        {/* ================= INTRO & ACTIVITIES SECTION ================= */}
        <div className="mb-14 text-lg leading-relaxed space-y-6 text-gray-800 italic">
          <p>
            The IAP-ID organizes three main scientific and academic activities in a year: 
            the Mid Year Teaching Programme (usually in April/May), the Annual CME (August/September), 
            and the Annual Meeting (November/December) held with the IAPM conference.
          </p>
          <p>
            Participation in Conferences, Slide Seminars and CME programs is open to members of IAP-ID. 
            Members receive priority registration and access to expert guest lectures and scientific discussions.
          </p>
          <p className="font-bold not-italic text-black border-l-4 border-orange-500 pl-4 bg-gray-50 py-2">
            Kindly ensure your membership is active before registering for any Conference / CME program.
          </p>
        </div>

        <hr className="mb-12 border-gray-200" />

        {/* ================= LATEST EVENTS & BROCHURES ================= */}
        <div className="space-y-12">
          {eventData.map((event, idx) => (
            <div key={idx} className="space-y-2 group">
              {/* Event Title - Bold Black */}
              <h2 className="text-lg font-bold leading-tight uppercase group-hover:text-[#a11d43] transition-colors">
                {event.title}
              </h2>
              
              {/* Event Details */}
              <div className="text-[17px] text-gray-700 font-medium italic">
                <p>{event.subtitle}</p>
                {event.location && <p>{event.location}</p>}
              </div>

              {/* Download Link - Pink/Red */}
              <p className="pt-1">
                <span className="text-[#a11d43] font-bold text-lg cursor-pointer hover:underline underline-offset-4">
                  Download Brochure
                </span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConferenceCME;