import React from "react";

import img1 from "../assets/iapid-cme-2025.jpg";
import img2 from "../assets/apcon-2025.jpg";
import img3 from "../assets/annual-conf-2024.jpg";
import img4 from "../assets/mytp-2024.jpg";

const Gallery = () => {
  return (
    <section className="bg-[#dcdcdc] py-20 font-serif text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-snug">
          The IAP-ID is one of the most active and dynamic Divisions of the
          <br />
          International Academy of Pathology
        </h1>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* CARD 1 */}
          <div className="text-center">
            <img
              src={img1}
              alt="IAPID Annual CME 2025"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">
              IAPID Annual CME 2025 at Amrita Kochi
            </h3>
          </div>

          {/* CARD 2 */}
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

          {/* CARD 3 */}
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

          {/* CARD 4 */}
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

export default Gallery;
