
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    // Dispatch custom event to open modal
    window.dispatchEvent(new CustomEvent('openQuoteModal'));
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-bg">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover"
          src="/clips/fondo_eventos.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-purple-900/20 to-blue-900/30"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight font-sans text-white flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-light text-3xl md:text-5xl lg:text-6xl block mb-2"
          >
            Celebra tus
          </motion.span>
          <motion.span 
            className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent font-black tracking-wide block italic relative"
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 1 },
              scale: { duration: 0.6, delay: 1 },
              rotateX: { duration: 0.6, delay: 1 },
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
            style={{ 
              backgroundSize: "200% 100%",
              fontFamily: "'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              textShadow: '0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)',
              letterSpacing: '0.02em'
            }}
          >
            Momentos Especiales
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          El lugar perfecto para bodas, cumpleaños y eventos corporativos únicos e inolvidables
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={openModal}
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Cotización
          </Button>
          
          <Button
            onClick={() => document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300"
          >
            Ver Galería
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
