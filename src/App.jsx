
import React from 'react';
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50">
      <Helmet>
        <title>Salón de Eventos Elegante - Celebra tus momentos especiales</title>
        <meta name="description" content="Salón de eventos elegante para bodas, cumpleaños y eventos corporativos. Espacios únicos para celebrar tus momentos más especiales." />
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
