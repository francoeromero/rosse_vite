import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga total de 6.5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 6500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-page-react">
      {/* El contenido de carga ya está en el HTML base */}
    </div>
  );
};

export default LoadingScreen;
