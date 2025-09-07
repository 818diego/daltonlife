import React, { useState, useEffect } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
  description: string;
  titleColor?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 10000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <section className=" bg-dalton-tertiary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-4 sm:mb-6">
          <p className="font-dalton-regular text-base sm:text-lg lg:text-xl text-gray-100 max-w-7xl mx-auto leading-relaxed px-4">
            Descubre lo que hace especial a nuestro servidor Dalton Life, la comunidad y el equipo de trabajo.
            En Dalton Life nos apasiona crear experiencias únicas y enriquecedoras para nuestros jugadores. Cada detalle cuenta una historia, y nuestro equipo de trabajo está comprometido en ofrecer una experiencia de juego que sea memorable y emocionante.
            Estamos constantemente innovacion y evolucionando para brindarles lo mejor de lo mejor.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <h3 className={`font-dalton-bold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 uppercase tracking-wider ${image.titleColor || 'text-white'}`}>
                        {image.alt}
                      </h3>
                      <p className="font-dalton-regular text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-[#9a40ce] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Imagen anterior"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-[#9a40ce] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Siguiente imagen"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          {images.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2 sm:space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-[#FEFE86] scale-115 shadow-lg shadow-[#FEFE86]/50'
                    : 'bg-white/30 hover:bg-white/50 border border-white/20'
                    }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
