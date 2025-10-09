
import React, { useState } from 'react';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';
import img10 from '../../img/10.jpg';
import img11 from '../../img/11.jpg';
import img12 from '../../img/12.jpg';
import img13 from '../../img/13.jpg';
import img14 from '../../img/14.jpg';
import img15 from '../../img/15.jpg';
import img16 from '../../img/16.jpg';
import img17 from '../../img/17.jpg';
import img18 from '../../img/18.jpg';
import img19 from '../../img/19.jpg';
import img20 from '../../img/20.jpg';
import img21 from '../../img/21.jpg'; 
import img22 from '../../img/22.jpg';
import img23 from '../../img/23.jpg';
import img24 from '../../img/24.jpg';
import img25 from '../../img/25.jpg';
import img26 from '../../img/26.jpg';
import img27 from '../../img/27.jpg';
import img28 from '../../img/28.jpg';
import img29 from '../../img/29.jpg';
import img30 from '../../img/30.jpg';
import img31 from '../../img/31.jpg';
import img32 from '../../img/32.jpg';
import img33 from '../../img/33.jpg';
import img34 from '../../img/34.jpg';
import img35 from '../../img/35.jpg';
import img36 from '../../img/36.jpg';
import img37 from '../../img/37.jpg';
import img38 from '../../img/38.jpg';
import img39 from '../../img/39.jpg';
import img40 from '../../img/40.jpg';
import img41 from '../../img/41.jpg';
import img42 from '../../img/42.jpg';
import img43 from '../../img/43.jpg';
import img44 from '../../img/44.jpg';
import img45 from '../../img/45.jpg';
import img46 from '../../img/46.jpg';
import img47 from '../../img/47.jpg';
import img48 from '../../img/48.jpg';
import img49 from '../../img/49.jpg';
import img50 from '../../img/50.jpg';
import img51 from '../../img/51.jpg';
import img52 from '../../img/52.jpg';
import img53 from '../../img/53.jpg';
import img54 from '../../img/54.jpg';
import img55 from '../../img/55.jpg';
import img56 from '../../img/56.jpg';
import img57 from '../../img/57.jpg';
import img58 from '../../img/58.jpg';
import img59 from '../../img/59.jpg';
import img60 from '../../img/60.jpg';
import img61 from '../../img/61.jpg';
import img62 from '../../img/62.jpg';
import img63 from '../../img/63.jpg';
import img64 from '../../img/64.jpg';
import img65 from '../../img/65.jpg';
import img66 from '../../img/66.jpg';
import img67 from '../../img/67.jpg';
import img68 from '../../img/68.jpg';
import img69 from '../../img/69.jpg';
import img70 from '../../img/70.jpg';


import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,   
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,  
      


"https://static.wixstatic.com/media/3780e2_f3e45d53a3024cec9544467e4db5a20f~mv2.jpg/v1/fill/w_503,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3780e2_f3e45d53a3024cec9544467e4db5a20f~mv2.jpg",
  

    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=1169&auto=format&fit=crop",

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
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1169&auto=format&fit=crop"
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
