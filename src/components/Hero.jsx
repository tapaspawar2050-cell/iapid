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
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 🎨 Soft Dark Overlay (Screenshot jaisa) */}
      <div className="absolute inset-0 bg-lightgray/35"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 flex items-center min-h-screen px-8 sm:px-10 md:px-20 lg:px-18">

        <div className="max-w-5xl">

          {/* 🔥 Main Heading */}
          <h1
            className="text-white
                       text-3xl sm:text-4xl md:text-6xl lg:text-5xl
                       leading-[1.1]
                       mb-6
                       font-[Georgia,'Times_New_Roman',serif]
                       font-bold"
          >
            The International <br />
            Academy of Pathology
          </h1>

          {/* 🔹 Sub Heading */}
          <h2
            className="text-black
                       text-xl sm:text-6xl md:text-4xl
                       mb-6
                       font-[Georgia,'Times_New_Roman',serif]
                       font-semibold"
          >
            Indian Division
          </h2>

          {/* 🔹 Description */}
          <p
            className="text-white
                       text-lg sm:text-5xl md:text-4xl
                       mb-8
                       font-[Georgia,'Times_New_Roman',serif]"
          >
            A World Wide Organization
          </p>

          {/* 🔘 Button */}
          <Link
            to="/membership"
            className="inline-block
                       bg-orange-400 hover:bg-orange-400
                       text-white
                       px-8 py-3
                       rounded-full
                       text-lg
                       font-semibold
                       transition duration-300"
          >
            Membership →
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
