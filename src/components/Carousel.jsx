import React, { useEffect, useState } from 'react';

const images = [
  '../src/assets/jogos/gow.png',
  '../src/assets/jogos/fzr5.jpg',
  '../src/assets/jogos/fc6.jpg'
];

export default function Carousel() {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const goToNext = () => {
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        };
      
        const goToPrev = () => {
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        };
      
        useEffect(() => {
          const interval = setInterval(goToNext, 6000);
          return () => clearInterval(interval);
        }, []);
      
        return (
          <div className="relative w-full h-[400px] overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
            />
      
            {/* Botão esquerdo */}
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl focus:outline-none cursor-pointer"
            >
              ❮
            </button>
      
            {/* Botão direito */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl focus:outline-none cursor-pointer"
            >
              ❯
            </button>
          </div>
        );
      }