
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../img/1.jpg';
import img from '../../img/16.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img5 from '../../img/5.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';

const Carousel3D = () => {
  const images = [
    
    "https://static.wixstatic.com/media/3780e2_7ef9a76080174104bdd362f4f0ae70bd~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3780e2_7ef9a76080174104bdd362f4f0ae70bd~mv2.jpg",
    img,
    img1,

    , img2
    , img3
    , img5
    , img7
    , img8
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(images.length - 1)) return 'right';
    if (diff === -1 || diff === images.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-rose-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros <span className="gradient-text">Espacios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los ambientes únicos que tenemos para hacer de tu evento algo extraordinario
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="carousel-3d relative h-96 md:h-[500px] overflow-hidden">
            {images.map((image, index) => {
              const position = getSlidePosition(index);

              return (
                <motion.div
                  key={index}
                  animate={{
                    opacity: position === 'center' ? 1 : position === 'hidden' ? 0 : 0.6,
                    scale: position === 'center' ? 1 : position === 'hidden' ? 0.6 : 0.8,
                    x: position === 'center' ? '0%' : 
                       position === 'left' ? '-80%' : 
                       position === 'right' ? '80%' : 
                       position === 'hidden' ? (index < currentIndex ? '-120%' : '120%') : '0%',
                    z: position === 'center' ? 0 : position === 'hidden' ? -200 : -100,
                    rotateY: position === 'center' ? 0 : 
                            position === 'left' ? 25 : 
                            position === 'right' ? -25 : 
                            position === 'hidden' ? (index < currentIndex ? 45 : -45) : 0,
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={image}
                      alt={`Espacio del salón ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-rose-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
