import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";
import heroImg from "../assets/hero.png";


const Hero = () => {
  return (
    <section className="relative h-[520px] md:h-[620px] overflow-hidden">

      {/* Desktop Video */}
<video
  className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
  src={heroVideo}
  autoPlay
  loop
  muted
  playsInline
/>

{/* Mobile Image */}
<div
  className="block md:hidden absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImg})` }}
></div>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div> */


      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            The International Academy of Pathology
          </h1>

          <p className="text-white text-2xl mt-3">Indian Division</p>
          <p className="text-white text-xl mb-6">A World Wide Organization</p>

          <Link
            to="/membership"
            className="bg-[#F7931E] text-white px-7 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Membership →
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;
