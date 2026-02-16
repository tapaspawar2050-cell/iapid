// React aur Hooks import kar rahe hain
import React, { useState, useEffect } from "react";

// Arrow icons import kar rahe hain
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Gallery images import kar rahe hain
import g1 from "../assets/gallery_1.jpg";
import g2 from "../assets/gallery_2.jpg";
import g3 from "../assets/gallery_3.jpg";
import g4 from "../assets/gallery_4.jpg";
import g5 from "../assets/gallery_5.jpg";
import g6 from "../assets/gallery_6.jpg";
import g7 from "../assets/gallery_7.jpg";
import g8 from "../assets/gallery_8.jpg";

// ✅ Saari images ek array me store kar di
const originalImages = [g1, g2, g3, g4, g5, g6, g7, g8];

const Gallery = () => {

  // ✅ Kaunsi image se slider start hoga (starting index)
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Ek screen par kitni images dikhani hain
  const [imagesPerView, setImagesPerView] = useState(4);

  // ✅ Screen size ke hisaab se images change karna
  useEffect(() => {

    const handleResize = () => {

      // Agar mobile screen hai
      if (window.innerWidth < 640) {
        setImagesPerView(1);
      }

      // Agar tablet screen hai
      else if (window.innerWidth < 1024) {
        setImagesPerView(2);
      }

      // Agar laptop ya bada screen hai
      else {
        setImagesPerView(4);
      }
    };

    // Page load hote hi check kare
    handleResize();

    // Screen resize hone par bhi check kare
    window.addEventListener("resize", handleResize);

    // Cleanup function (memory safe rakhne ke liye)
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  // ✅ Next button click hone par
  const nextSlide = () => {

    // Agar last tak nahi pahunche hain
    if (currentIndex < originalImages.length - imagesPerView) {
      setCurrentIndex(currentIndex + 1);
    } 
    // Agar last par hain to fir se starting par aa jao
    else {
      setCurrentIndex(0);
    }
  };

  // ✅ Previous button click hone par
  const prevSlide = () => {

    // Agar first image par nahi hain
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } 
    // Agar first par hain to last set par chale jao
    else {
      setCurrentIndex(originalImages.length - imagesPerView);
    }
  };

  return (
    // Section background aur spacing
    <section className="bg-[#dcdcdc] py-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-black mb-10">
          See our latest photos from Academic
        </h2>

        <div className="relative overflow-hidden">

          {/* ✅ Slider Track (yeh move hota hai left-right) */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // currentIndex ke hisaab se slider move karega
              transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)`,
            }}
          >
            {/* ✅ Saari images ko loop karke show kar rahe hain */}
            {originalImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / imagesPerView}%` }}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="h-[420px] w-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>

          {/* ✅ Left Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 
                       bg-yellow-500 hover:bg-yellow-600 
                       text-black p-3 rounded-full shadow-lg"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* ✅ Right Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 
                       bg-yellow-500 hover:bg-yellow-600 
                       text-black p-3 rounded-full shadow-lg"
          >
            <FaChevronRight size={22} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
