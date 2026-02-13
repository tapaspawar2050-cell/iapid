// React import kar rahe hain
import React, { useEffect, useRef } from "react";

// AboutSection component banaya
const AboutSection = () => {

  // useRef slider ko control karne ke liye
  const sliderRef = useRef(null);

  // useEffect automatic slider chalane ke liye
  useEffect(() => {
    const slider = sliderRef.current; // slider ko access kar rahe hain
    let scrollAmount = 0; // scroll kitna hua track karne ke liye

    const slide = () => {
      if (!slider) return;

      scrollAmount += 1; // har baar thoda upar scroll karega

      // Jab half scroll ho jaye to phir se start kare
      if (scrollAmount >= slider.scrollHeight / 2) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        top: scrollAmount,
      });
    };

    const interval = setInterval(slide, 40); // 40ms me move karega

    // Clean up (important for performance)
    return () => clearInterval(interval);
  }, []);

  return (
    // Section background light grey
    <section className="bg-[#dcdcdc] py-20">
      <div className="max-w-7xl mx-auto px-10">

        {/* Grid layout left aur right side ke liye */}
        <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Heading */}
            <h2 className="text-5xl font-serif font-bold mb-8 text-black">
              About IAP-ID
            </h2>

            {/* Paragraph */}
            <p className="text-lg font-serif leading-8 mb-6 text-black">
              A very warm welcome to the website of the International Academy of Pathology - Indian Division (IAP-ID). The IAP-ID was started in the late 1960's with a few select members and from this small beginning it has grown tremendously in all aspects of its operations, especially so in the last few years. The IAP-ID is one of the most active and dynamic Divisions of the International Academy of Pathology and has attracted a large membership and evoked lot of interest from Pathologists, both from India and abroad, due to its active academic and scientific programs.
            </p>

            {/* Button use kiya instead of <a href="#"> to avoid error */}
            <button
              type="button"
              className="text-orange-500 font-semibold text-lg hover:underline transition"
            >
              Read More &gt;&gt;
            </button>

          </div>

          {/* ================= RIGHT SIDE PREMIUM GLASS CARD ================= */}
          <div
            className="rounded-2xl overflow-hidden h-[420px]
                       backdrop-blur-lg bg-white/40 
                       border border-white/50
                       shadow-2xl transition duration-500 
                       hover:scale-105"
          >

            {/* Card Header */}
            <div className="bg-orange-400/90 text-center py-4 backdrop-blur-md">
              <h3 className="text-2xl font-serif font-bold text-black">
                Latest News
              </h3>
            </div>

            {/* Auto Vertical Slider Area */}
            <div
              ref={sliderRef}
              className="p-6 space-y-8 text-black font-serif text-base 
                         overflow-hidden h-[340px]"
            >
              {/* 2 baar repeat kar rahe hain smooth loop ke liye */}
              {[...Array(2)].map((_, index) => (
                <div key={index}>
                  <NewsItem text="XXVIIth Annual CME of IAP-ID" />
                  <NewsItem text="Dr Surabhi Jain. AIIMS New Delhi." />
                  <NewsItem text="Mid-year Teaching Program: 6-7 April 2025" />
                  <NewsItem text="Chandigarh Autopsy Pathology Program 2025" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


// NewsItem component banaya (reusable)
const NewsItem = ({ text }) => {
  return (
    <div
      className="border-l-2 border-black/40 pl-4 mb-6
                 transition duration-300 hover:border-orange-500 
                 hover:text-orange-600 cursor-pointer"
    >
      {/* News text */}
      {text}

      {/* NEW glowing badge */}
      <span
        className="ml-3 px-3 py-1 text-xs font-bold rounded-full 
                   bg-red-600 text-white 
                   animate-pulse
                   shadow-[0_0_10px_red]"
      >
        NEW
      </span>
    </div>
  );
};

// Export kar rahe hain taaki App.js me use ho sake
export default AboutSection;
