import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const conferences = [
  { title: "Annual Conference of IAP-ID 2024", image: "/images/conf1.jpg" },
  { title: "APCON - IAPID 2025", image: "/images/conf2.jpg" },
  { title: "IAPID Annual CME 2025 at Amrita Kochi", image: "/images/conf3.jpg" },
];

const ConferenceCarousel = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto scroll every 5 sec
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, hovered]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % conferences.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? conferences.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-4xl font-serif font-bold mb-12">
          Annual Conference
        </h2>

        <div
          className="relative flex items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Cards */}
          <div className="flex justify-center items-center gap-12 w-full overflow-hidden">
            {conferences.map((conf, i) => {
              const isCenter = i === index;

              return (
                <div
                  key={i}
                  className={`bg-gray-100 rounded-2xl shadow-lg w-[320px] transition-transform duration-500 ease-in-out
                  ${isCenter ? "scale-105" : "scale-95 opacity-80"}`}
                >
                  <div className="bg-[#4b4444] text-white text-center py-3 rounded-t-2xl font-semibold">
                    {conf.title}
                  </div>

                  <div className="p-4">
                    <img
                      src={conf.image}
                      alt={conf.title}
                      className="rounded-lg w-full h-[340px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceCarousel;
