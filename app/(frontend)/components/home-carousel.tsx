"use client";
import React from "react";
import { CarouselContent } from "@/components/ui/carousel";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 3;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <CarouselContent>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`bg-cover bg-center transition-opacity duration-500 text-8xl flex justify-center items-center bg-slate-100 aspect-video rounded-md w-full ${
              i === currentSlide ? "" : "hidden"
            }`}
          >
            {i}
          </div>
        ))}
      </CarouselContent>
      <div className="absolute flex gap-2 bottom-5 left-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
              i === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </>
  );
};

export default HomeCarousel;
