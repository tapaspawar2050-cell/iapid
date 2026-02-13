// Importing React
import React from "react";

// Importing images from assets folder
// These images will be shown in gallery cards
import img1 from "../assets/iapid-cme-2025.jpg";
import img2 from "../assets/apcon-2025.jpg";
import img3 from "../assets/annual-conf-2024.jpg";
import img4 from "../assets/mytp-2024.jpg";

// This is Gallery component
// It shows event photos in grid format
const Gallery = () => {

  // return means what we want to show on screen
  return (

    // section is a big container for the full page
    // It has background color, padding and full height
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        {/* Main title of gallery page */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-snug">
          The IAP-ID is one of the most active and dynamic Divisions of the
          <br />
          International Academy of Pathology
        </h1>

        {/* ================= IMAGE GRID ================= */}
        {/* 
          grid-cols-1 → 1 column on small screens
          sm:grid-cols-2 → 2 columns on small devices
          lg:grid-cols-4 → 4 columns on large screens
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= CARD 1 ================= */}
          <div className="text-center">

            {/* Image */}
            <img
              src={img1}   // showing first imported image
              alt="IAPID Annual CME 2025"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />

            {/* Image title */}
            <h3 className="mt-4 text-xl font-semibold">
              IAPID Annual CME 2025 at Amrita Kochi
            </h3>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="text-center">

            <img
              src={img2}
              alt="APCON IAPID 2025"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />

            <h3 className="mt-4 text-xl font-semibold">
              APCON - IAPID 2025
            </h3>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className="text-center">

            <img
              src={img3}
              alt="Annual Conference IAP-ID 2024"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />

            <h3 className="mt-4 text-xl font-semibold">
              Annual Conference of IAP-ID 2024
            </h3>
          </div>

          {/* ================= CARD 4 ================= */}
          <div className="text-center">

            <img
              src={img4}
              alt="MYTP 2024"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />

            <h3 className="mt-4 text-xl font-semibold">
              MYTP - 2024
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

// Exporting Gallery component
// So we can use it in App.js or other pages
export default Gallery;
