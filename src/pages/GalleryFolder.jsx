import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GalleryFolder = () => {
  const { folderName } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const MAX_IMAGES = 50;

  // Generate image paths
  const images = useMemo(() => {
    return Array.from({ length: MAX_IMAGES }, (_, i) =>
      `/images/gallery/${folderName}/${folderName}_${i + 1}.jpg`
    );
  }, [folderName]);

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") navigate("/gallery");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">

      {/* Close Button */}
      <button
        onClick={() => navigate("/gallery")}
        className="absolute top-6 right-6 text-white"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-white text-sm">
        {currentIndex + 1}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-6 text-white"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Main Image */}
      <img
        src={images[currentIndex]}
        alt=""
        className="max-h-[85vh] max-w-[90%] object-contain"
        onError={(e) => (e.target.style.display = "none")}
      />

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-6 text-white"
      >
        <ChevronRight size={40} />
      </button>

      {/* Thumbnails */}
      <div className="absolute bottom-6 w-full overflow-x-auto px-10">
        <div className="flex gap-4 justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setCurrentIndex(index)}
              onError={(e) => (e.target.style.display = "none")}
              className={`h-16 w-24 object-cover cursor-pointer rounded border-2 transition ${
                currentIndex === index
                  ? "border-green-400 scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFolder;