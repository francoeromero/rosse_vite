
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEheXbNiQUdz9CgTziWVrB-8HDlUa1eWfv4ZjMTyKIQz7zVcPh8PE3l2avfA6w0TUOe8j4C6Evc2lb8_7E9D2n5y7srB2dVupKjH-9X2JHyNljllXCkBcSGV511NqDHWXNlkZc-XBgWL-lFyQrdAUmy1f0JNF7U_5q3sbjp0IBT6yPEDUN_6Yz4W7TmZaAbM" 
                alt="Logo del Salón de Eventos" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creamos momentos únicos e inolvidables en el lugar perfecto para tus celebraciones más especiales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rossevitaeventos?igsh=MWYxcHNxNDBldW01YQ=="
                className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-lg text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg text-white hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
             
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xl font-bold mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Galería', 'Contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xl font-bold mb-4 block">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span className="text-gray-300 text-sm">Av. Constituyentes 1434 , Provincia de Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span className="text-gray-300 text-sm">AV Illia 1989, Villa Maipú, CABA, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <span className="text-gray-300 text-sm">+54 9 11 6207 5702</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <span className="text-gray-300 text-sm">eventosrossevita@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Salón de Eventos Elegante. Hecho con</span>
            <Heart className="w-4 h-4 text-rose-400" />
            <span>para celebrar tus momentos especiales.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
