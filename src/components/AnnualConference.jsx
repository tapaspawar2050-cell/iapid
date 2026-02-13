// React se useState aur useEffect import kar rahe hain
import React, { useState, useEffect } from "react";

// Left aur Right arrow icons import kar rahe hain
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images import kar rahe hain (har conference ke 3 images)
import img1 from "../assets/conf1.jpg";
import img2 from "../assets/conf2.jpg";
import img3 from "../assets/conf3.jpg";

import img4 from "../assets/conf4.jpg";
import img5 from "../assets/conf5.jpg";
import img6 from "../assets/conf6.jpg";

import img7 from "../assets/conf7.jpg";
import img8 from "../assets/conf8.jpg";
import img9 from "../assets/conf9.jpg";


// 📌 Ye data array hai jisme har conference ka title aur images store hain
const conferenceData = [
  {
    title: "MYTP - 2024",   // Conference ka naam
    images: [img1, img2, img3], // Is conference ki 3 images
  },
  {
    title: "Annual Conference of IAP-ID 2024",
    images: [img4, img5, img6],
  },
  {
    title: "APCON - IAPID 2025",
    images: [img7, img8, img9],
  },
];


// ===============================
// ✅ Conference Card Component
// ===============================

// Ye ek chota component hai jo ek card banata hai
// Isme title aur images props ke through aate hain
const ConferenceCard = ({ title, images }) => {

  // index batata hai kaunsi image abhi show ho rahi hai
  const [index, setIndex] = useState(0);

  // useEffect ka use automatic slider ke liye ho raha hai
  useEffect(() => {

    // Har 3 second me image change hogi
    const interval = setInterval(() => {

      // Agar last image hai to 0 par wapas aayega
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    // Cleanup function (memory leak se bachne ke liye)
    return () => clearInterval(interval);

  }, [images.length]);



  // 🔵 Previous button ka function
  const prevSlide = () => {

    // Agar first image hai to last image par jayega
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


  // 🔵 Next button ka function
  const nextSlide = () => {

    // Agar last image hai to first image par aayega
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


  // ===============================
  // 🎨 Card Design Start
  // ===============================
  return (

    // White card with shadow
    <div className="bg-white rounded-2xl shadow-xl 
                    w-[320px] h-[480px] 
                    mx-auto overflow-hidden flex flex-col">

      {/* 🔷 Card Title */}
      <div className="bg-[#4A4444] text-white text-center py-4 font-semibold text-lg">
        {title} {/* Yaha conference ka naam show hoga */}
      </div>

      {/* 🔷 Image Section */}
      <div className="relative flex-1 p-4">

        {/* Image container */}
        <div className="relative w-full h-full rounded-xl overflow-hidden">

          {/* Image tag */}
          <img
            src={images[index]}   // Current image show ho rahi hai
            alt={title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* ⬅ Left Arrow Button */}
          <button
            onClick={prevSlide}  // Click karne par previous image
            className="absolute left-3 top-1/2 -translate-y-1/2 
                       bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronLeft />
          </button>

          {/* ➡ Right Arrow Button */}
          <button
            onClick={nextSlide}  // Click karne par next image
            className="absolute right-3 top-1/2 -translate-y-1/2 
                       bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </div>
  );
};



// ===============================
// ✅ Main Section Component
// ===============================

const AnnualConference = () => {
  return (
    
    // Pura section (light grey background)
    <section className="py-20 bg-[#dcdcdc]">

      {/* Section heading */}
      <h2 className="text-4xl font-serif font-bold text-center mb-14">
        Annual Conference
      </h2>

      {/* Grid layout (mobile me 1 column, desktop me 3 column) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16">

        {/* Har conference ke liye ek card banega */}
        {conferenceData.map((item, index) => (
          <ConferenceCard
            key={index}
            title={item.title}
            images={item.images}
          />
        ))}

      </div>
    </section>
  );
};

// Component export kar rahe hain
export default AnnualConference;
