import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-lightgray/50"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start min-h-[100vh] px-6 sm:px-8 md:px-16 lg:px-24">

        <div className="max-w-3xl text-center md:text-left">

          {/* Main Heading */}
          <h1 className="text-white 
                         text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
                         leading-tight mb-5 font-['Playfair_Display']">
            The International <br className="hidden sm:block" />
            Academy of Pathology
          </h1>

          {/* Sub Heading */}
         <h2 className="relative inline-block
               text-gray-900 
               text-lg sm:text-xl md:text-3xl 
               font-extrabold mb-5 font-['Playfair_Display']
               [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]
               blink-soft">
          Indian Division
         </h2>


          {/* Description */}
          <p className="text-white 
                        text-base sm:text-lg md:text-xl lg:text-2xl 
                        font-light mb-8">
            A World Wide Organization
          </p>

          {/* Button */}
          <Link
            to="/membership"
            className="inline-block 
                       w-full sm:w-auto
                       bg-orange-500 hover:bg-orange-600 
                       text-white 
                       px-6 sm:px-8 py-3 sm:py-4 
                       rounded-full 
                       font-semibold 
                       transition duration-300 
                       text-center"
          >
            Membership →
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
