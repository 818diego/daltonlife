import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4 mt-auto">
      <div className="text-center">
        <p className="font-dalton-semibold flex items-center justify-center gap-2">
          <Icon icon="material-symbols:copyright-outline-rounded" className="w-5 h-5" />
          2025 Dalton Life. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
