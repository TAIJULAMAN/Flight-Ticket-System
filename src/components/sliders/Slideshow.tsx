import React, { useState, useEffect } from 'react';
import image1 from "@assets/promosion/1.webp";
import image2 from "@assets/promosion/2.webp";
import image3 from "@assets/promosion/3.webp";

const slides = [
  {
    src: 'assets/promosion/1.webp',
    alt: 'Promotion 1'
  },
  {
    src: 'assets/promosion/2.webp',
    alt: 'Promotion 2'
  },
  {
    src: 'assets/promosion/3.webp',
    alt: 'Promotion 3'
  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full" />
        </div>
      ))}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer h-4 w-4 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
