import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '@/assets/logoBlanco.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (isMobileMenuOpen) {
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMobileMenuOpen(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#1c1c1c]/80 backdrop-blur-md transition-all duration-500 ease-in-out ${isScrolled ? 'border-b border-white/20 shadow-lg' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Dalton Life" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
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

          <div className="hidden lg:flex items-center space-x-6">
            <a href="https://cfx.re/join/pmgvj7" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
              <Icon icon="simple-icons:fivem" className="w-6 h-6" />
            </a>
            <a href="https://discord.gg/YHVH8HvtAb" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
              <Icon icon="line-md:discord" className="w-8 h-8" />
            </a>
            <a href="https://dalton-life.tebex.io/" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86] hover:drop-shadow-[0_0_8px_rgba(254,254,134,0.6)]">
              <Icon icon="lucide:store" className="w-6 h-6" />
            </a>
            <button className="flex items-center py-2 bg-[#FEFE86] text-black font-dalton-bold px-6 py-0 rounded-[4px] transition-all duration-300 hover:bg-[#7C40A0] hover:text-white hover:border-[#7C40A0] hover:drop-shadow-[0_0_4px_rgba(124,64,160,0.6)] uppercase">
              <Icon icon="line-md:account" className="w-5 h-5 mr-2" />
              Login
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <a href="https://cfx.re/join/pmgvj7" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86]">
              <Icon icon="simple-icons:fivem" className="w-6 h-6" />
            </a>
            <a href="https://discord.gg/YHVH8HvtAb" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86]">
              <Icon icon="line-md:discord" className="w-6 h-6" />
            </a>
            <a href="https://dalton-life.tebex.io/" target='_blank' className="text-white transition-all duration-300 hover:text-[#FEFE86]">
              <Icon icon="lucide:store" className="w-6 h-6" />
            </a>
            <button
              onClick={toggleMobileMenu}
              className={`text-white p-2 transition-all duration-300 hover:text-[#FEFE86] ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <Icon
                icon={isMobileMenuOpen ? "line-md:close" : "line-md:menu"}
                className="w-6 h-6 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen
          ? 'max-h-[500px] opacity-100 translate-y-0'
          : 'max-h-0 opacity-0 -translate-y-2'
          }`}>
          <div className="border-t border-white/20 bg-[#1c1c1c]/95 backdrop-blur-md transform transition-transform duration-500 ease-out">
            <div className={`py-4 space-y-4 transition-all duration-500 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <Link
                to="/"
                onClick={() => toggleMobileMenu()}
                className="block font-dalton-semibold text-white transition-all duration-300 text-lg uppercase tracking-wide flex items-center gap-3 hover:text-[#FEFE86] hover:bg-white/5 px-4 py-2 rounded-lg"
              >
                <Icon icon="line-md:home" className="w-5 h-5" />
                Inicio
              </Link>

              <Link
                to="/paquetes-vip"
                onClick={() => toggleMobileMenu()}
                className="block font-dalton-semibold text-white transition-all duration-300 text-lg uppercase tracking-wide flex items-center gap-3 hover:text-[#FEFE86] hover:bg-white/5 px-4 py-2 rounded-lg"
              >
                <Icon icon="hugeicons:package" className="w-5 h-5" />
                Paquetes VIP
              </Link>

              <a
                href="https://dalton-life.gitbook.io/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toggleMobileMenu()}
                className="block font-dalton-semibold text-white transition-all duration-300 text-lg uppercase tracking-wide flex items-center gap-3 hover:text-[#FEFE86] hover:bg-white/5 px-4 py-2 rounded-lg"
              >
                <Icon icon="hugeicons:court-law" className="w-5 h-5" />
                Normativa
              </a>

              <div className="pt-4 border-t border-white/20">
                <button className="w-full flex items-center justify-center py-3 bg-[#FEFE86] text-black font-dalton-bold px-6 rounded-[4px] transition-all duration-300 hover:bg-[#7C40A0] hover:text-white hover:border-[#7C40A0] hover:drop-shadow-[0_0_4px_rgba(124,64,160,0.6)] uppercase transform hover:scale-105">
                  <Icon icon="line-md:account" className="w-5 h-5 mr-2" />
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
