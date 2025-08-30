import React from 'react';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/layoutSection/Footer';
import MouseAnimation from '@/components/MouseAnimation';
  
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dalton-tertiary">
      <MouseAnimation />
      <Header />
      <main className="max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
