// React se useState aur useEffect import kar rahe hain
import React, { useState, useEffect } from "react";

// Left aur Right arrow icons import kar rahe hain
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Gallery ki images import kar rahe hain
import g1 from "../assets/gallery_1.jpg";
import g2 from "../assets/gallery_2.jpg";
import g3 from "../assets/gallery_3.jpg";
import g4 from "../assets/gallery_4.jpg";

// Sabhi images ko ek array me store kar diya
const images = [g1, g2, g3, g4];


// ===============================
// ✅ Gallery Component Start
// ===============================
const Gallery = () => {

  // 🔵 currentIndex batata hai kaunsi image se slider start ho raha hai
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔵 itemsToShow batata hai ek time me kitni images dikhani hain
  const [itemsToShow, setItemsToShow] = useState(4);


  // =====================================
  // 📱 Responsive Logic (Screen Size ke hisaab se)
  // =====================================
  useEffect(() => {

    // Ye function screen size check karega
    const handleResize = () => {

      // Agar mobile screen hai
      if (window.innerWidth < 640) {
        setItemsToShow(1); // 1 image dikhayega

      // Agar tablet screen hai
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // 2 images dikhayega

      // Agar desktop screen hai
      } else {
        setItemsToShow(4); // 4 images dikhayega
      }
    };

    handleResize(); // Page load hote hi run karega

    // Jab screen resize hogi to function chalega
    window.addEventListener("resize", handleResize);

    // Cleanup (memory leak se bachne ke liye)
    return () => window.removeEventListener("resize", handleResize);

  }, []);


  // =====================================
  // 🔄 Auto Slide Logic (3 second me change)
  // =====================================
  useEffect(() => {

    // Har 3 second me next slide
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup function
    return () => clearInterval(interval);

  }, [currentIndex, itemsToShow]);


  // =====================================
  // ➡ Next Slide Function
  // =====================================
  const nextSlide = () => {

    // Agar last image hai to first par wapas aayega
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };


  // =====================================
  // ⬅ Previous Slide Function
  // =====================================
  const prevSlide = () => {

    // Agar first image hai to last par chala jayega
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };


  // =====================================
  // 🎨 Design Start
  // =====================================
  return (

    // Section with light grey background
    <section className="bg-[#dcdcdc] py-20">

      {/* Center container */}
      <div className="max-w-[1400px] mx-auto px-6">

        {/* 🔷 Heading Section */}
        <div className="text-center mb-12">

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            See Our Latest Academic Moments
          </h2>

          {/* Neeche chhoti line design ke liye */}
          <div className="w-24 h-1 bg-gray-700 mx-auto mt-4 rounded-full"></div>
        </div>


        {/* Slider Wrapper */}
        <div className="relative overflow-hidden">

          {/* ================= Slider Track ================= */}
          <div
            className="flex transition-transform duration-700 ease-in-out"

            // Yaha translateX se images left move hoti hain
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsToShow
              }%)`,
            }}
          >

            {/* images.concat(images) infinite effect ke liye */}
            {images.concat(images).map((img, index) => (
              <div
                key={index}

                // Screen ke hisaab se width change hoti hai
                className={`
                  flex-shrink-0 px-3
                  ${itemsToShow === 1 ? "w-full" : ""}
                  ${itemsToShow === 2 ? "w-1/2" : ""}
                  ${itemsToShow === 4 ? "w-1/4" : ""}
                `}
              >
                {/* Image Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-500">
                  <img
                    src={img}
                    alt="gallery"
                    className="h-[320px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>


          {/* ⬅ Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* ➡ Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

// Component export kar rahe hain
export default Gallery;
