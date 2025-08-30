import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '@/assets/logoBlanco.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#1c1c1c]/80 backdrop-blur-md transition-all duration-500 ease-in-out ${isScrolled ? 'border-b border-white/20 shadow-lg' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-6">
            <Link to="/">
              <img src={logo} alt="Dalton Life" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-6">
              <Link to="/" className="font-dalton-semibold text-white transition-all duration-300 text-lg uppercase tracking-wide flex items-center gap-2 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
                <Icon style={{ marginTop: '-4px' }} icon="line-md:home" className="w-5 h-5" />
                Inicio
              </Link>
              <span className="text-white text-lg">|</span>
              <Link to="/paquetes-vip" className="font-dalton-semibold text-white transition-all duration-300 text-lg uppercase tracking-wide flex items-center gap-2 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
                <Icon icon="hugeicons:package" className="w-5 h-5" />
                Paquetes VIP
              </Link>
              <span className="text-white text-lg">|</span>
              <a
                href="https://dalton-life.gitbook.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dalton-semibold text-white transition-all duration-300 text-lg uppercase tracking-wide flex items-center gap-2 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]"
              >
                <Icon icon="hugeicons:court-law" className="w-5 h-5" />
                Normativa
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://cfx.re/join/pmgvj7" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
              <Icon icon="simple-icons:fivem" className="w-6 h-6" />
            </a>
            <a href="https://discord.gg/YHVH8HvtAb" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
              <Icon icon="line-md:discord" className="w-8 h-8" />
            </a>
            <button className="flex items-center py-2 bg-[#FEFE86] text-black font-dalton-bold px-6 py-0 rounded-[4px] transition-all duration-300 hover:bg-[#7C40A0] hover:text-white hover:border-[#7C40A0] hover:drop-shadow-[0_0_4px_rgba(124,64,160,0.6)] uppercase">
              <Icon icon="line-md:account" className="w-5 h-5 mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
