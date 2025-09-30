
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel3D from '@/components/Carousel3D';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sincronizar con la animación GSAP del HTML
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);  // Reducido de 6500 a 4000ms (4 segundos)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <Helmet>
        <title>ROSSE VITA - Salón de Eventos Elegante</title>
        <meta name="description" content="ROSSE VITA - Salón de eventos elegante para bodas, cumpleaños y eventos corporativos. Espacios únicos para celebrar tus momentos más especiales." />
        <meta name="keywords" content="salón de eventos, bodas, cumpleaños, eventos corporativos, celebraciones, ROSSE VITA" />
        <meta property="og:title" content="ROSSE VITA - Salón de Eventos Elegante" />
        <meta property="og:description" content="Espacios únicos para celebrar tus momentos más especiales" />
        <meta property="og:image" content="/img/logo.png" />
        <link rel="canonical" href="https://rossevita.com" />
      </Helmet>
      
      <Header />
      <Hero />
      <Carousel3D />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <QuoteModal />
      <Toaster />
    </div>
  );
}

export default App;
