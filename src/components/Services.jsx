
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Briefcase, Star, Users, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Bodas',
      description: 'El día más especial de tu vida merece un lugar único. Creamos ambientes románticos y elegantes.',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: Gift,
      title: 'Cumpleaños',
      description: 'Celebra otro año de vida con estilo. Desde fiestas íntimas hasta grandes celebraciones.',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Briefcase,
      title: 'Eventos Corporativos',
      description: 'Espacios profesionales para conferencias, lanzamientos y celebraciones empresariales.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Quinceañeros',
      description: 'Una noche mágica para celebrar los 15 años con elegancia y sofisticación.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Users,
      title: 'Reuniones Familiares',
      description: 'Espacios cálidos y acogedores para reunir a toda la familia en momentos especiales.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Calendar,
      title: 'Eventos Especiales',
      description: 'Cualquier ocasión que quieras celebrar, nosotros la hacemos memorable.',
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos espacios únicos y servicios personalizados para cada tipo de celebración
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
