import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'

const promos = [
    {
      id: 1,
      name: 'Camiseta do Goku',
      price: 59.90,
      image: '../src/assets/livros/hp (1).jpg',
    },
    {
      id: 2,
      name: 'Funko Darth Vader',
      price: 89.90,
      image: '../src/assets/livros/hp (2).jpg',
    },
    {
      id: 3,
      name: 'HQ Batman - Ano Um',
      price: 34.90,
      image: '../src/assets/livros/hp (3).jpg',
    },
    {
      id: 4,
      name: 'HQ hnena',
      price: 34.90,
      image: '../src/assets/livros/hp (4).jpg',
    },
    {
      id: 5,
      name: 'HQ hnena',
      price: 34.90,
      image: '../src/assets/livros/hp (5).jpg',
    },
    {
      id: 6,
      name: 'HQ hnena',
      price: 34.90,
      image: '../src/assets/livros/hp (6).jpg',
    },
    {
      id: 7,
      name: 'HQ hnena',
      price: 34.90,
      image: '../src/assets/livros/hp (7).jpg',
    },
  ];

export default function Carousel() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleItems = 4; // Mostrando 4 produtos por vez
  
    const goToNext = () => {
      if (startIndex + visibleItems < promos.length) {
        setStartIndex(prev => prev + 1);
      }
    };
  
    const goToPrev = () => {
      if (startIndex > 0) {
        setStartIndex(prev => prev - 1);
      }
    };
  
    return (
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 m-[40px] m-[50px] transition-all duration-500">
          {promos.slice(startIndex, startIndex + visibleItems).map((promo) => (
            <ProductCard key={promo.id} product={promo} />
          ))}
        </div>
  
        {/* Botão esquerdo */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl focus:outline-none cursor-pointer bg-red-500"
        >
          ❮
        </button>
  
        {/* Botão direito */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl focus:outline-none cursor-pointer bg-red-500"
        >
          ❯
        </button>
      </div>
    );
  }