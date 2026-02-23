// Importing React
import React from "react";
import { useNavigate } from "react-router-dom";

// Importing images
import img1 from "../assets/iapid-cme-2025.jpg";
import img2 from "../assets/apcon-2025.jpg";
import img3 from "../assets/annual-conf-2024.jpg";
import img4 from "../assets/mytp-2024.jpg";

const GalleryPage = () => {

  const navigate = useNavigate();

  const galleryData = [
    {
      title: "IAPID Annual CME 2025 at Amrita Kochi",
      image: img1,
      folder: "kochi"
    },
    {
      title: "APCON - IAPID 2025",
      image: img2,
      folder: "apcon"
    },
    {
      title: "Annual Conference of IAP-ID 2024",
      image: img3,
      folder: "annual"
    },
    {
      title: "MYTP - 2024",
      image: img4,
      folder: "milin"
    }
  ];

  return (
    <section className="bg-[#dcdcdc] py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h1 className="text-2xl md:text-4xl font-serif font-bold text-center mb-16 leading-snug text-black">
          The IAP-ID is one of the most active and dynamic Divisions of the
          <br className="hidden md:block" />
          International Academy of Pathology
        </h1>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {galleryData.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/gallery/${item.folder}`)}
              className="group cursor-pointer text-center transition-transform duration-300 hover:-translate-y-2"
            >
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover 
                             transition-transform duration-500 
                             group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 
                                group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg md:text-xl font-semibold text-black">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GalleryPage;