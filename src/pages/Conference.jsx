import React from "react";

const ConferenceCME = () => {

  const eventData = [
    {
      title: "Decoding Autoimmune Disorders",
      subtitle:
        "Unveiling Through Live Microscopy, Case-based Discussion & Immunodiagnostic Techniques.",
      website: "https://iapidautoimmune.in",
      isWebsiteOnly: true,
    },
    {
      title:
        "XXVIIth Annual CME of the International Academy of Pathology-Indian Division (IAP-ID)",
      subtitle:
        "Hepatopancreaticobiliary Pathology 1st - 2nd November 2025 Amrita Institute of Medical Sciences, Kochi",
      file: "/Emerging Concepts.docx",
    },
    {
      title:
        "INTERNATIONAL ACADEMY OF PATHOLOGY - INDIAN DIVISION Annual Conference 2024",
      subtitle:
        "INTERNATIONAL ACADEMY OF PATHOLOGY - 12th December 2024 7.45 am-05.30 pm",
      location: "S. C. B. Medical College Cuttack, Odisha",
      file: "/Annual Conference 2024.pdf",
    },
    {
      title:
        "INTERNATIONAL ACADEMY OF PATHOLOGY - INDIAN DIVISION Annual Conference 2024 Slide seminar programme",
      subtitle:
        "INTERNATIONAL ACADEMY OF PATHOLOGY - 12th December 2024 10.30-12.30 pm",
      location: "S. C. B. Medical College Cuttack, Odisha",
      file: "/Slide seminar programme.docx",
    },
    {
      title:
        "IAP-ID Symposium: Salivary Gland Pathology- Solving Difficult Cases & Mastering Emerging Concepts",
      subtitle:
        "IAP-ID Symposium: Salivary Gland Pathology- 12th December 2024 2:00 pm to 4:00 pm",
      location: "SCB Medical College, Cuttack",
      file: "/Full page photo.pdf",
    },
  ];

  return (
    <section className="bg-white py-12 font-serif text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl border-b border-[#a11d43] pb-4 mb-12 uppercase text-[#a11d43] tracking-wide">
          CONFERENCE / CME
        </h1>

        {/* EVENTS LIST */}
        <div className="space-y-14">

          {eventData.map((event, idx) => (
            <div key={idx} className="space-y-3">

              {/* Event Title */}
              <h2 className="text-xl font-bold leading-snug">
                {event.title}
              </h2>

              {/* Subtitle */}
              <p className="text-[17px] text-gray-800 leading-relaxed">
                {event.subtitle}
              </p>

              {/* Website Link */}
              {event.website && (
                <p>
                  Website:{" "}
                  <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {event.website}
                  </a>
                </p>
              )}

              {/* Location */}
              {event.location && (
                <p className="text-[17px] text-gray-800">
                  {event.location}
                </p>
              )}

              {/* Download Brochure */}
              {!event.isWebsiteOnly && (
                <a
                  href={event.file}
                  download
                  className="text-[#a11d43] font-bold text-lg hover:underline"
                >
                  Download Brochure
                </a>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ConferenceCME;