// React se useState aur useEffect import kar rahe hain
import React, { useEffect, useState } from "react";

// Left aur Right arrow icons lucide-react se import kar rahe hain
import { ChevronLeft, ChevronRight } from "lucide-react";


// 📌 Ye ek array hai jisme conference ka title aur image path store hai
const conferences = [
  { title: "Annual Conference of IAP-ID 2024", image: "/images/conf1.jpg" },
  { title: "APCON - IAPID 2025", image: "/images/conf2.jpg" },
  { title: "IAPID Annual CME 2025 at Amrita Kochi", image: "/images/conf3.jpg" },
];


// ===============================
// ✅ ConferenceCarousel Component
// ===============================
const ConferenceCarousel = () => {

  // 🔵 index batata hai kaunsa card active (center) me hai
  const [index, setIndex] = useState(0);

  // 🔵 hovered batata hai mouse card ke upar hai ya nahi
  const [hovered, setHovered] = useState(false);


  // =====================================
  // 🔄 Auto Scroll Logic (5 second me slide change)
  // =====================================
  useEffect(() => {

    // Agar mouse hover kar raha hai to auto scroll band
    if (hovered) return;

    // Har 5 second me next slide
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup function (memory leak se bachne ke liye)
    return () => clearInterval(interval);

  }, [index, hovered]);


  // ➡ Next Slide Function
  const nextSlide = () => {
    // % ka use isliye kiya gaya hai taaki last ke baad first par wapas aaye
    setIndex((prev) => (prev + 1) % conferences.length);
  };


  // ⬅ Previous Slide Function
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? conferences.length - 1 : prev - 1
    );
  };


  // =====================================
  // 🎨 Design Start
  // =====================================
  return (

    // Section (light grey background)
    <section className="py-16 bg-gray-200">

      {/* Center container */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 🔷 Section Title */}
        <h2 className="text-4xl font-serif font-bold mb-12">
          Annual Conference
        </h2>


        {/* Main carousel container */}
        <div
          className="relative flex items-center"

          // Mouse aane par hovered true ho jayega
          onMouseEnter={() => setHovered(true)}

          // Mouse hatne par hovered false ho jayega
          onMouseLeave={() => setHovered(false)}
        >

          {/* ⬅ Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft size={28} />
          </button>


          {/* 🔷 Cards Section */}
          <div className="flex justify-center items-center gap-12 w-full overflow-hidden">

            {/* Har conference ke liye ek card banega */}
            {conferences.map((conf, i) => {

              // Check karte hain ki kaunsa card center me hai
              const isCenter = i === index;

              return (
                <div
                  key={i}

                  // Agar center card hai to thoda bada
                  // Nahi to thoda chhota aur halka transparent
                  className={`bg-gray-100 rounded-2xl shadow-lg w-[320px] transition-transform duration-500 ease-in-out
                  ${isCenter ? "scale-105" : "scale-95 opacity-80"}`}
                >

                  {/* Card Title */}
                  <div className="bg-[#4b4444] text-white text-center py-3 rounded-t-2xl font-semibold">
                    {conf.title}
                  </div>

                  {/* Card Image */}
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


          {/* ➡ Right Arrow Button */}
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

// Component export kar rahe hain
export default ConferenceCarousel;
