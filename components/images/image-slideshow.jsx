"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


import AI5 from "@/public/AI5.webp";
import AI6 from "@/public/AI6.webp";
import AI7 from "@/public/AI7.jpeg";
import AI8 from "@/public/AI8.jpeg";

const images = [

  { image: AI5, alt: "Joanna Pearson bestseller" },
  { image: AI6, alt: "fathers day" },
  { image: AI7, alt: "discover Swift River" },
  { image: AI8, alt: "Summer reading" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // same as prevIndex < images.length - 1 ? prevIndex + 1 : 0
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full xl:max-w-screen-xl mx-auto md:h-64 sm:h-52 h-36 p-2 px-5">
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "z-10 opacity-100" : "opacity-0"
            }`}
            alt={image.alt}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
