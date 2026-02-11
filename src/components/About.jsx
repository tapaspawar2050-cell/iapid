import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#dcdcdc] py-20">
      <div className="max-w-7xl mx-auto px-10">

        {/* GRID WITH FIXED RIGHT WIDTH */}
        <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">

          {/* LEFT SIDE ABOUT TEXT */}
          <div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-black">
              About IAP-ID
            </h2>

            <p className="text-lg font-serif leading-8 mb-6 text-black">
              A very warm welcome to the website of the International Academy of
              Pathology - Indian Division (IAP-ID). The IAP-ID was started in the
              late 1960's with a few select members and from this small beginning
              it has grown tremendously in all aspects of its operations,
              especially so in the last few years.
            </p>

            <p className="text-lg font-serif leading-8 mb-6 text-black">
              The IAP-ID is one of the most active and dynamic Divisions of the
              International Academy of Pathology and has attracted a large
              membership and evoked lot of interest from Pathologists, both from
              India and abroad, due to its active academic and scientific programs.
            </p>

            <a
              href="#"
              className="text-orange-500 font-semibold text-lg"
            >
              Read More &gt;&gt;
            </a>
          </div>

          {/* RIGHT SIDE SMALL LATEST NEWS CARD */}
          <div className="bg-[#4b4343] rounded-2xl overflow-hidden shadow-lg h-fit">

            {/* Orange Header */}
            <div className="bg-[#f4a000] text-center py-4">
              <h3 className="text-2xl font-serif font-bold text-black">
                Latest New
              </h3>
            </div>

            {/* News Items */}
            <div className="p-6 space-y-8 text-white font-serif text-base">

              <div className="border-l-2 border-gray-300 pl-4">
                XXVIIth Annual CME of the International Academy of
                Pathology-Indian Division
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

              <div className="border-l-2 border-gray-300 pl-4">
                Dr Surabhi Jain. AIIMS New Delhi.
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

              <div className="border-l-2 border-gray-300 pl-4">
                Mid-year Teaching Program: 6-7 th April 2025
                <span className="ml-2 text-red-500 font-bold"> NEW</span>
              </div>

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

export default AboutSection;
