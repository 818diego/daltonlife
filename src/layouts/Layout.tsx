import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/layoutSection/Footer';
import CountdownTimer from '@/components/CountdownTimer';
  
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
      <Header />
      <main className="max-w-7xl mx-auto pt-32 pb-32">
        {children}
      </main>
      <Footer />
      <CountdownTimer />
    </div>
  );
};

export default Layout;
