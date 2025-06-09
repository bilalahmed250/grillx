"use client";
import Right from "@/components/icons/Right";
import Image from "next/image";

import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = ["/broastt1.jpg", "/broast2.jpg"];

  const slideInterval = 3500;
  useEffect(() => {
    const interval = setInterval(goToNextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex(
      (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full rounded-full hidden lg:block sm:block"
      data-carousel="slide"
    >
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
              index === currentSlideIndex ? "" : "hidden"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-xl border-none"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-40 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlideIndex ? "bg-[#FFA500]" : "bg-[#FFFFFF]"
            }`}
            aria-current={index === currentSlideIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black"
        data-carousel-prev
        onClick={goToPrevSlide}
      ></button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black"
        data-carousel-next
        onClick={goToNextSlide}
      ></button>
    </div>
  );
};

export default Carousel;
