import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GalleryFolder = () => {
  const { folderName } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // 👇 Change this number according to max images possible
  const MAX_IMAGES = 50;

  // Generate image paths
  const images = useMemo(() => {
    return Array.from({ length: MAX_IMAGES }, (_, i) =>
      `/images/gallery/${folderName}/${folderName}_${i + 1}.jpg`
    );
  }, [folderName]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        <button
          onClick={() => navigate("/gallery")}
          className="mb-10 px-4 py-2 bg-gray-800 text-white rounded"
        >
          ← Back
        </button>

        <h2 className="text-3xl font-bold mb-10 capitalize">
          {folderName} Gallery
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
              className="cursor-pointer h-48 w-full object-cover rounded-lg shadow"
              onError={(e) => (e.target.style.display = "none")}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center z-50">

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-white text-sm">
            {currentIndex + 1}
          </div>

          {/* Left */}
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
            className="max-h-[80vh] max-w-[90%] object-contain"
          />

          {/* Right */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-14 w-full overflow-x-auto px-10">
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
      )}
    </div>
  );
};

export default GalleryFolder;