// Import React and hooks (useEffect, useRef)
import React, { useEffect, useRef } from "react";

// Import Link for page navigation
import { Link } from "react-router-dom";

// Import background video file
import heroVideo from "../assets/hero.mp4";

const Hero = () => {

  // useRef is used to control the video element
  const videoRef = useRef(null);

  // useEffect runs after component loads
  useEffect(() => {

    // Get video element
    const video = videoRef.current;

    // If video exists, then play it
    if (video) {
      video.muted = true; // Video must be muted for autoplay to work
      video.play().catch((err) => {
        console.log("Autoplay blocked:", err); // If autoplay fails, show error
      });
    }

  }, []); // Empty array means this runs only once

  return (

    // Main section (Full screen height)
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef} // Connect video to useRef
        autoPlay       // Play automatically
        loop           // Repeat again and again
        muted          // Sound off
        playsInline    // Needed for mobile autoplay
        preload="auto" // Load video fast
        className="absolute inset-0 w-full h-full object-cover"
        // absolute = cover whole screen
        // object-cover = fill screen without stretching
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 🔥 Dark overlay to make text visible */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* bg-black/40 = black color with 40% opacity */}

      {/* 🔹 Text Content Section */}
      <div className="relative z-10 h-full flex items-center">
        {/* z-10 keeps text above video */}
        {/* flex items-center = vertically center */}

        <div className="pl-10 md:pl-20 max-w-3xl">
          {/* pl-10 = padding left */}
          {/* md:pl-20 = more padding on medium screens */}
          {/* max-w-3xl = maximum width limit */}

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 font-['Playfair_Display']">
            {/* text-4xl = small screen size */}
            {/* md:text-6xl = medium screen bigger */}
            {/* lg:text-7xl = large screen biggest */}
            {/* leading-tight = reduce line spacing */}
            {/* mb-6 = margin bottom */}
            {/* font-['Playfair_Display'] = custom font */}

            The International <br />
            Academy of Pathology
          </h1>

          {/* Sub Heading */}
          <h2 className="text-white text-xl md:text-2xl font-bold mb-3 font-['Playfair_Display']">
            Indian Division
          </h2>

          {/* Description Text */}
          <p className="text-white text-lg md:text-2xl font-light mb-8">
            A World Wide Organization
          </p>

          {/* Button */}
          <Link
            to="/membership"  // When clicked, go to membership page
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300"
            /*
              bg-orange-500 = orange color
              hover:bg-orange-600 = darker on hover
              px-8 = left-right padding
              py-4 = top-bottom padding
              rounded-full = pill shape
              transition = smooth animation
            */
          >
            Membership →
          </Link>

        </div>
      </div>

    </section>
  );
};

export default Hero;
