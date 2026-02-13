// Import React
import React from "react";

// Create AboutSection component
const AboutSection = () => {
  return (

    // Main section with light grey background and top-bottom padding
    <section className="bg-[#dcdcdc] py-20">
      {/* bg-[#dcdcdc] = light grey background */}
      {/* py-20 = padding top and bottom */}

      <div className="max-w-7xl mx-auto px-10">
        {/* max-w-7xl = maximum width limit */}
        {/* mx-auto = center the section horizontally */}
        {/* px-10 = left and right padding */}

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
          {/* grid = make grid layout */}
          {/* md:grid-cols-[1fr_400px] = 
              On medium screen and above:
              Left column takes remaining space (1fr)
              Right column fixed 400px width
          */}
          {/* gap-16 = space between columns */}
          {/* items-start = align content to top */}

          {/* ================= LEFT SIDE (ABOUT TEXT) ================= */}
          <div>

            {/* Section Heading */}
            <h2 className="text-5xl font-serif font-bold mb-8 text-black">
              {/* text-5xl = big font size */}
              {/* font-serif = serif font style */}
              {/* font-bold = bold text */}
              {/* mb-8 = margin bottom */}
              About IAP-ID
            </h2>

            {/* First Paragraph */}
            <p className="text-lg font-serif leading-8 mb-6 text-black">
              {/* text-lg = medium text size */}
              {/* leading-8 = line spacing */}
              {/* mb-6 = space below paragraph */}
              A very warm welcome to the website of the International Academy of
              Pathology - Indian Division (IAP-ID). The IAP-ID was started in the
              late 1960's with a few select members and from this small beginning
              it has grown tremendously in all aspects of its operations,
              especially so in the last few years.
            </p>

            {/* Second Paragraph */}
            <p className="text-lg font-serif leading-8 mb-6 text-black">
              The IAP-ID is one of the most active and dynamic Divisions of the
              International Academy of Pathology and has attracted a large
              membership and evoked lot of interest from Pathologists, both from
              India and abroad, due to its active academic and scientific programs.
            </p>

            {/* Read More Link */}
            <a
              href="#"
              className="text-orange-500 font-semibold text-lg"
            >
              {/* text-orange-500 = orange color */}
              {/* font-semibold = slightly bold */}
              Read More &gt;&gt;
            </a>

          </div>

          {/* ================= RIGHT SIDE (LATEST NEWS CARD) ================= */}
          <div className="bg-[#4b4343] rounded-2xl overflow-hidden shadow-lg h-fit">
            {/* bg-[#4b4343] = dark brown background */}
            {/* rounded-2xl = rounded corners */}
            {/* overflow-hidden = hide extra content */}
            {/* shadow-lg = big shadow */}
            {/* h-fit = height adjusts automatically */}

            {/* Orange Header Section */}
            <div className="bg-[#f4a000] text-center py-4">
              {/* Orange background */}
              {/* text-center = center text */}
              {/* py-4 = padding top-bottom */}
              <h3 className="text-2xl font-serif font-bold text-black">
                Latest New
              </h3>
            </div>

            {/* News Items Section */}
            <div className="p-6 space-y-8 text-white font-serif text-base">
              {/* p-6 = padding inside card */}
              {/* space-y-8 = space between each news item */}
              {/* text-white = white text */}

              {/* News Item 1 */}
              <div className="border-l-2 border-gray-300 pl-4">
                {/* border-l-2 = left border line */}
                {/* pl-4 = padding left */}
                XXVIIth Annual CME of the International Academy of
                Pathology-Indian Division
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

              {/* News Item 2 */}
              <div className="border-l-2 border-gray-300 pl-4">
                Dr Surabhi Jain. AIIMS New Delhi.
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

              {/* News Item 3 */}
              <div className="border-l-2 border-gray-300 pl-4">
                Mid-year Teaching Program: 6-7 th April 2025
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

              {/* News Item 4 */}
              <div className="border-l-2 border-gray-300 pl-4">
                IAPID mid year teaching program- Chandigarh on Autopsy
                Pathology. 6th and 7th April 2025.
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Export component so we can use it in App.js
export default AboutSection;
