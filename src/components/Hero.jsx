import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";   // 👈 IMPORTANT IMPORT

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="pl-10 md:pl-20 max-w-3xl">

          <h1
            className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            The International <br />
            Academy of Pathology
          </h1>

          <h2 className="text-black text-xl md:text-2xl font-bold mb-3">
            Indian Division
          </h2>

          <p className="text-white text-lg md:text-2xl font-light mb-8">
            A World Wide Organization
          </p>

          <Link
            to="/membership"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300"
          >
            Membership →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
