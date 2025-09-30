
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={isScrolled 
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEiLjXSEEYTWugcR8F-Nm1FfBTZVY1hjfvRrQUK1sWxCGuxtKHgpsa85Om7uCvcsmZ9LQp9TVzMM7OiE_JjXVbISJuXw6D4EhMIQujIS96qHTADGcbZmx0VkGocywIQtbsci7FOFmr58pSaF8Cnt_9TFUGS6OQSO0lpE8a2sL-uaa8woFOliXjHUuuC4cpVd"
                : "https://blogger.googleusercontent.com/img/a/AVvXsEheXbNiQUdz9CgTziWVrB-8HDlUa1eWfv4ZjMTyKIQz7zVcPh8PE3l2avfA6w0TUOe8j4C6Evc2lb8_7E9D2n5y7srB2dVupKjH-9X2JHyNljllXCkBcSGV511NqDHWXNlkZc-XBgWL-lFyQrdAUmy1f0JNF7U_5q3sbjp0IBT6yPEDUN_6Yz4W7TmZaAbM"
              }
              alt="Logo del Salón de Eventos" 
              className="h-12 w-auto transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['inicio', 'servicios', 'galeria', 'contacto'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-300'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            {['inicio', 'servicios', 'galeria', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
