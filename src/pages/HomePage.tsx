import React from 'react';
import Layout from '@/layouts/Layout';
import HeroSection from '@/components/HomeSection/HeroSection';
import ServerSection from '@/components/HomeSection/ServerSection';
import ImageCarousel from '@/components/HomeSection/ImageCarousel';
import FAQSection from '@/components/HomeSection/FAQSection';

const HomePage: React.FC = () => {
  const carouselImages = [
    {
      src: '/images/carrousel1.png',
      alt: 'Sistema de Gimnasio Unico',
      description: 'En Dalton Life, el gimnasio es más que un simple lugar para ejercitarse: es una experiencia única que combina tecnología avanzada con un ambiente inspirador. Nuestro gimnasio está diseñado para ayudarte a alcanzar tus objetivos de salud y bienestar de manera eficiente y motivadora.',
      titleColor: 'text-dalton-primary'
    },
    {
      src: '/images/carrousel2.png',
      alt: 'Sistema de Intercambio',
      description: 'Contamos con una PawnShop unica y exclusiva para que puedas comprar y vender tus items de forma segura y eficiente. Donde tamben podrasn adquirir items para lado oscuro.',
      titleColor: 'text-dalton-primary'
    },
    {
      src: '/images/carrousel3.png',
      alt: 'Nuevos Mapeados',
      description: 'En Dalton life contamos con mapeados poco comunnes y diferentes, donde podras encontrar una experiencia unica y diferente a la que estas acostumbrado. Tambien contamos con mapeados que son muy detallados y realistas, para el que le guste el roleplay mas realista.',
      titleColor: 'text-dalton-primary'
    },
    {
      src: '/images/carrousel4.png',
      alt: 'Identidad Unica y Exclusiva',
      description: 'En Dalton Life contamos con una identidad unica y exclusiva para que puedas disfrutar de una experiencia unica y diferente a la que estas acostumbrado. Nos enfocamos en la calidad y la imagen de nuestro servidor, como una marca que nos representa y nos hace diferentes.',
      titleColor: 'text-dalton-primary'
    }
  ];

  const faqs = [
    {
      question: "¿Qué es Dalton Life?",
      answer: "Dalton Life es un servidor de FiveM que ofrece una experiencia única de roleplay con una comunidad apasionada y eventos especiales. Somos más que un simple servidor de juego; somos una familia que comparte la pasión por la creatividad, la innovación y la excelencia. En Dalton Life encontrarás un universo donde cada día es una nueva aventura, con eventos únicos, colaboraciones extraordinarias y oportunidades de crecimiento junto a personas que comparten tu visión del futuro.",
      icon: "mdi:information"
    },
    {
      question: "¿Necesito tener GTA V para jugar?",
      answer: "Sí, necesitas tener Grand Theft Auto V instalado en tu PC para poder conectarte al servidor Dalton Life. Puedes adquirir GTA V desde múltiples plataformas: Steam, Epic Games Store, o directamente desde Rockstar Games. Una vez que tengas el juego instalado, podrás proceder con la instalación de FiveM y conectarte a nuestro servidor para comenzar tu aventura en Dalton Life.",
      icon: "simple-icons:rockstargames"
    },
    {
      question: "¿Es necesario tener FiveM?",
      answer: "Sí, FiveM es el cliente necesario para conectarte a servidores de roleplay como Dalton Life. FiveM es una plataforma de terceros que permite a los jugadores conectarse a servidores personalizados de GTA V. Puedes descargarlo gratuitamente desde fivem.net. Una vez instalado, podrás buscar nuestro servidor 'Dalton Life' y conectarte directamente para comenzar tu experiencia de roleplay.",
      icon: "simple-icons:fivem"
    },
    {
      question: "¿Hay whitelist en el servidor?",
      answer: "No, Dalton Life es un servidor sin whitelist, lo que significa que puedes conectarte directamente sin necesidad de solicitudes previas o procesos de aprobación. Esto hace que sea mucho más fácil para nuevos jugadores unirse a nuestra comunidad. Simplemente descarga FiveM, busca nuestro servidor y ¡conéctate para comenzar tu aventura inmediatamente!",
      icon: "mdi:check-circle"
    },
    {
      question: "¿Cómo puedo unirme a la comunidad?",
      answer: "Para unirte a nuestra comunidad, te recomendamos seguir estos pasos: Primero, únete a nuestro servidor de Discord donde podrás conectar con otros jugadores, participar en eventos especiales, recibir notificaciones sobre actualizaciones del servidor y estar al día con todas las novedades. En Discord también encontrarás canales de ayuda, guías para nuevos jugadores y la oportunidad de formar parte de nuestra comunidad activa.",
      icon: "mdi:discord"
    },
    {
      question: "¿Qué tipo de roleplay ofrecen?",
      answer: "En Dalton Life ofrecemos un roleplay completo e inmersivo que incluye trabajos realistas, sistema de economía avanzado, compra y personalización de casas, vehículos únicos con modificaciones especiales, y una experiencia de juego que va más allá del roleplay tradicional. Nuestro servidor cuenta con sistemas únicos, eventos especiales, y una comunidad que hace que cada sesión de juego sea una experiencia memorable y emocionante.",
      icon: "mdi:gamepad-variant"
    },
    {
      question: "¿Es necesario pagar para jugar?",
      answer: "No, Dalton Life es completamente gratuito. No necesitas pagar nada para acceder al servidor y disfrutar de toda la experiencia de roleplay. Aunque ofrecemos paquetes VIP opcionales con beneficios adicionales, estos no son necesarios para jugar.",
      icon: "mdi:currency-usd-off"
    }
  ];

  return (
    <Layout>
      <HeroSection />
      <ServerSection />
      <ImageCarousel images={carouselImages} />
      <FAQSection faqs={faqs} />
    </Layout>
  );
};

export default HomePage;
