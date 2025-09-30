
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    "https://static.wixstatic.com/media/3780e2_e4ec6cb42a804e0fbc0c9856a9cd551f~mv2.jpg/v1/fill/w_1225,h_973,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3780e2_e4ec6cb42a804e0fbc0c9856a9cd551f~mv2.jpg",
    "https://static.wixstatic.com/media/3780e2_7ef9a76080174104bdd362f4f0ae70bd~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3780e2_7ef9a76080174104bdd362f4f0ae70bd~mv2.jpg",
    "https://static.wixstatic.com/media/3780e2_f3e45d53a3024cec9544467e4db5a20f~mv2.jpg/v1/fill/w_503,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3780e2_f3e45d53a3024cec9544467e4db5a20f~mv2.jpg",
    "https://static.wixstatic.com/media/3780e2_6c23ba6c8576400c9270c50f33e8d2ea~mv2_d_2048_1367_s_2.jpg/v1/fill/w_502,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3780e2_6c23ba6c8576400c9270c50f33e8d2ea~mv2_d_2048_1367_s_2.jpg",
    "https://static.wixstatic.com/media/3780e2_fe95d580086e45658efdba6898c62114~mv2_d_3870_2583_s_4_2.jpg/v1/fill/w_685,h_457,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3780e2_fe95d580086e45658efdba6898c62114~mv2_d_3870_2583_s_4_2.jpg",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=1169&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628336707631-68131ca720c3?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=1171&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1169&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612893201883-c3f1fb4265d1?q=80&w=764&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1677221924325-ce58a3385400?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1575559439920-282880e5164d?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1677221924769-54f24d80ea0a?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1657664072464-e525da1d426e?q=80&w=1074&auto=format&fit=crop",
    "https://static.wixstatic.com/media/3780e2_e5838b0448fa4e21a7f61e962d053287~mv2_d_2048_1367_s_2.jpg/v1/fill/w_1025,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3780e2_e5838b0448fa4e21a7f61e962d053287~mv2_d_2048_1367_s_2.jpg",
    "https://plus.unsplash.com/premium_photo-1681841659948-e62c96ee0e99?q=80&w=1149&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621857584544-9e3d52a650df?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1673897888993-a1db844c2ca1?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1169&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556499696-0ba753b9ad02?q=80&w=687&auto=format&fit=crop"
  ];

  const openModal = (image, index) => {
    setSelectedImage({ src: image, index });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestra <span className="gradient-text">Galería</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora los espacios únicos y la elegancia que caracteriza nuestro salón de eventos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Galería imagen ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={`Galería imagen ${selectedImage.index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
