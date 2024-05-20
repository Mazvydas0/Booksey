"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import AI1 from "@/public/AI1.jpeg";
import AI2 from "@/public/AI2.jpeg";
import AI3 from "@/public/AI3.jpeg";
import AI4 from "@/public/AI4.jpeg";

const images = [
  { image: AI1, alt: "an AI generated picture 1" },
  { image: AI2, alt: "an AI generated picture 2" },
  { image: AI3, alt: "an AI generated picture 3" },
  { image: AI4, alt: "an AI generated picture 4" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative top-32 w-full h-96">
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={`w-full h-full object-cover absolute top-0 left-0 ${
              index === currentImageIndex
                ? "z-10 opacity-100 scale-100 translate-x-0 rotate-0"
                : "opacity-0 scale-110 translate-x-4 -rotate-5"
            }`}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
}
