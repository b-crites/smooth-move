'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = () => {
  const images = [
    "/Img/Contact_BG.JPG",
    "/Img/American_Flag.jpg",
    "/Img/Good_Vibes_New_Shop.png",
    "/Img/Truck_Working_Img.jpg",
    "/Img/Truck_Pump.JPG",
    "/Img/sunset.JPG",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlideshow = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeSlideshow = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (selectedImage !== null) {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeSlideshow();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage]);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 pt-56 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openSlideshow(index)}
          >
            <Image
              src={src}
              width={600}
              height={600}
              loading="lazy"
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              blurDataURL="data:image/png;base64,..."
              placeholder="blur"
            />
          </div>
        ))}
      </div>

      {/* Slideshow Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeSlideshow}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={prevImage}
          >
            ◀
          </button>
          <img
            src={images[currentIndex]}
            alt="Slideshow"
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={nextImage}
          >
            ▶
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
