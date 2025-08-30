import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/layoutSection/Footer';
import MouseAnimation from '@/components/MouseAnimation';
  
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-dalton-tertiary">
      <MouseAnimation />
      <Header />
      <main className="max-w-7xl mx-auto pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
