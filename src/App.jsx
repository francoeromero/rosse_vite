
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Timer 1: Ocultar loading y preparar para mostrar contenido
    const hideLoadingTimer = setTimeout(() => {
      setIsLoading(false);
      console.log('Loading terminado, preparando contenido...');
    }, 4000);  // 4 segundos para coincidir con el HTML

    // Timer 2: Mostrar contenido con animaciones después de un delay
    const showContentTimer = setTimeout(() => {
      setShowContent(true);
      console.log('Mostrando contenido con animaciones...');
    }, 4100);  // 4.1 segundos total (solo 0.1s de delay)

    return () => {
      clearTimeout(hideLoadingTimer);
      clearTimeout(showContentTimer);
    };
  }, []);

  console.log('App render - isLoading:', isLoading, 'showContent:', showContent);

  // Si está cargando, no mostrar nada
  if (isLoading) {
    return null;
  }

  // Si terminó la carga pero aún no debe mostrar contenido, mostrar fondo vacío con fade
  if (!showContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50 opacity-100 animate-fadeIn"></div>
    );
  }

  // Mostrar contenido completo con animaciones
  return (
    <div className={`min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50 animate-fadeIn transition-opacity duration-300`}>
      <Helmet>
        <title>ROSSE VITA - Salón de Eventos Elegante</title>
        <meta name="description" content="ROSSE VITA - Salón de eventos elegante para bodas, cumpleaños y eventos corporativos. Espacios únicos para celebrar tus momentos más especiales." />
        <meta name="keywords" content="salón de eventos, bodas, cumpleaños, eventos corporativos, celebraciones, ROSSE VITA" />
        <meta property="og:title" content="ROSSE VITA - Salón de Eventos Elegante" />
        <meta property="og:description" content="Espacios únicos para celebrar tus momentos más especiales" />
        <meta property="og:image" content="/img/logo.png" />
        <link rel="canonical" href="https://rossevita.com" />
      </Helmet>
      
      <div className="animate-slideInUp animation-delay-100">
        <Header />
      </div>
      <div className="animate-slideInUp animation-delay-200">
        <Hero />
      </div>
      <div className="animate-slideInUp animation-delay-300">
        <Carousel3D />
      </div>
      <div className="animate-slideInUp animation-delay-400">
        <Services />
      </div>
      <div className="animate-slideInUp animation-delay-500">
        <Gallery />
      </div>
      <div className="animate-slideInUp animation-delay-600">
        <Contact />
      </div>
      <div className="animate-slideInUp animation-delay-700">
        <Footer />
      </div>
      <QuoteModal />
      <Toaster />
    </div>
  );
}

export default App;
