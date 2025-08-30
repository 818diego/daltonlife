import React from 'react';
import Layout from '@/layouts/Layout';
import HeroSection from '@/components/HomeSection/HeroSection';
import ServerSection from '@/components/HomeSection/ServerSection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServerSection />
    </Layout>
  );
};

export default HomePage;
