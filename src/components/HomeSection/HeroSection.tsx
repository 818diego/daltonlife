import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ImageSection from '@/assets/isotipoColor.png';
import CardInfo from '@/components/HomeSection/CardInfo';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-64 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-dalton-black text-6xl md:text-8xl text-white leading-none tracking-tighter">
                UN MUNDO DE
                <span className="block text-[#FEFE86]">AVENTURAS</span>
              </h1>
              <div className="w-48 h-1 bg-gradient-to-r from-[#FEFE86] to-transparent"></div>
            </div>
            <p className="font-dalton-regular text-xl md:text-2xl text-gray-100 leading-relaxed max-w-lg">
              Únete a un mundo de posibilidades ilimitadas. Libera tu imaginación, crea historias inolvidables y conéctate con otros roleplayers en nuestra vibrante comunidad.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center bg-white text-black font-dalton-bold px-8 py-4 rounded-[4px] text-lg uppercase tracking-wider transition-all duration-300 hover:bg-[#FEFE86] hover:shadow-2xl hover:drop-shadow-[0_0_2px_rgba(254,254,134,0.6)]"
              >
                <Icon icon="line-md:rocket" className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                MÁS INFORMACIÓN
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
              <img
                src={ImageSection}
                alt="Dalton Life"
                className="w-full h-full object-cover drop-shadow-2xl "
              />
              <div className="absolute inset-0"></div>
            </div>
          </div>
        </div>
        <div className="mt-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <CardInfo
              icon="fluent:window-dev-tools-24-regular"
              text="Scripts Únicos"
            />
            <CardInfo
              icon="mdi:event-star"
              text="2/3 Eventos Semanales"
            />
            <CardInfo
              icon="line-md:speed-loop"
              text="Servidor Optimizado"
            />
            <CardInfo
              icon="wpf:online"
              text="Administración Activa"
            />
            <CardInfo
              icon="line-md:marker-twotone"
              text="Identidad Única"
            />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <Icon
              icon="ph:mouse-scroll-duotone"
              className="w-6 h-6 text-dalton-primary"
            />
            <span className="font-dalton-regular text-sm text-gray-400 uppercase tracking-wider">
              Scroll para más información
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
