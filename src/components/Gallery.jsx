import React from "react";

import g1 from "../assets/gallery_1.jpg";
import g2 from "../assets/gallery_2.jpg";
import g3 from "../assets/gallery_3.jpg";
import g4 from "../assets/gallery_4.jpg";

const images = [g1, g2, g3, g4];

const Gallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          See our latest photos from Academic
        </h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="gallery"
              className="h-[260px] min-w-[380px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
