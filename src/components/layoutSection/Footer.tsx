import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 sm:py-8 mt-auto bg-[#1c1c1c]/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="font-dalton-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
            <Icon icon="material-symbols:copyright-outline-rounded" className="w-4 h-4 sm:w-5 sm:h-5" />
            2025 Dalton Life. Todos los derechos reservados.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Dalton Life no está afiliado ni respaldado por Rockstar North, Take-Two Interactive, FiveM Cfx.Net u otros titulares de derechos. Todas las marcas comerciales utilizadas pertenecen a sus respectivos propietarios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
