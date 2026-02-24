import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Automatic vertical scrolling for news items
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (!slider) return;
      scrollAmount += 1;
      // Reset scroll when it reaches halfway (since we duplicate the items)
      if (scrollAmount >= slider.scrollHeight / 2) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        top: scrollAmount,
        behavior: "auto",
      });
    };

    const interval = setInterval(slide, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#dcdcdc] py-12 md:py-20 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_450px] gap-10 md:gap-16 items-start">
          
          {/* ================= LEFT SIDE (About IAP-ID) ================= */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-[42px] font-bold text-black leading-tight">
              About IAP-ID
            </h2>

            <p className="text-[18px] md:text-[20px] leading-[1.8] text-black text-justify">
              A very warm welcome to the website of the International Academy of
              Pathology - Indian Division (IAP-ID). The IAP-ID was started in the
              late 1960's with a few select members and from this small beginning
              it has grown tremendously in all aspects of its operations,
              especially so in the last few years. The IAP-ID is one of the most
              active and dynamic Divisions of the International Academy of
              Pathology and has attracted a large membership and evoked lot of
              interest from Pathologists, both from India and abroad, due to its
              active academic and scientific programs.
            </p>

            <button
              type="button"
              onClick={() => navigate("/about")}
              className="text-black font-bold text-[18px] hover:underline transition"
            >
              Read More &gt;&gt;
            </button>
          </div>

          {/* ================= RIGHT SIDE (Latest News Box) ================= */}
          <div className="rounded-[25px] overflow-hidden bg-[#4D4545] shadow-2xl h-[550px] flex flex-col transition-transform duration-500 hover:scale-[1.01]">
            
            {/* Orange Header matched to screenshot */}
            <div className="bg-[#FFA500] py-4 shadow-md">
              <h3 className="text-center text-3xl font-bold text-black">
                Latest News
              </h3>
            </div>

            {/* Scrolling News Body */}
            <div className="p-8 flex-grow overflow-hidden relative">
              <div
                ref={sliderRef}
                className="space-y-10 h-full overflow-hidden scrollbar-hide"
              >
                {/* Duplicating array for infinite scroll effect */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="space-y-10">
                    <NewsItem text="XXVIIth Annual CME of the International Academy of Pathology- Indian Division" />
                    <NewsItem text="Dr Surabhi Jain. AIIMS New Delhi." />
                    <NewsItem text="Mid-year Teaching Program: 6-7 th April 2025" />
                    <NewsItem text="IAPID mid year teaching program- Chandigarh on Autopsy Pathology. 6th and 7th April 2025." />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const NewsItem = ({ text }) => {
  return (
    <div className="border-l-[3px] border-white pl-5 transition duration-300 group cursor-pointer">
      <div className="flex flex-col items-start gap-2">
        <p className="text-white text-[18px] md:text-[19px] leading-snug group-hover:text-orange-300 transition-colors">
          {text}
        </p>

        {/* Red Starburst Tag matched to screenshot */}
        <div className="relative animate-pulse">
          <svg width="65" height="35" viewBox="0 0 100 50">
            <path 
              d="M5 25 L15 12 L30 15 L50 5 L70 15 L85 12 L95 25 L85 38 L70 35 L50 45 L30 35 L15 38 Z" 
              fill="#CC0000" 
            />
            <text x="50" y="32" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">
              NEW
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;