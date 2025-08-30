import React from 'react';
import Layout from '@/layouts/Layout';
import CardVip from '@/components/vipPage/CardVip';
import FAQSection from '@/components/HomeSection/FAQSection';

const PaquetesVipPage: React.FC = () => {
  const donationFAQs = [
    {
      question: "¿Cómo puedo comprar un paquete VIP?",
      answer: "Para comprar un paquete VIP, debes abrir un ticket en Discord en el apartado de tickets de donación. Allí deberás especificar qué paquete deseas adquirir o el que más te interese. Nuestro equipo te atenderá y te guiará en el proceso de compra.",
      icon: "mdi:credit-card"
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos pagos a través de PayPal o Tebex directamente. Ambos métodos son seguros y confiables para procesar tu compra de paquetes VIP.",
      icon: "mdi:wallet"
    },
    {
      question: "¿Los beneficios son inmediatos?",
      answer: "Conforme a nuestros términos y condiciones, tenemos 48 horas para entregar todo el paquete completo. Los beneficios se entregan de forma inmediata una vez procesado el pago.",
      icon: "mdi:clock-fast"
    },
    {
      question: "¿Puedo cambiar de paquete después de la compra?",
      answer: "Cada paquete es independiente. Puedes comprar el VIP Bronze, Plata, Gold o cualquiera que desees. Sin embargo, si tienes un beneficio que ya cuenta con mayor valor en otro paquete, no se tomará en cuenta. Por ejemplo, si tienes VIP Plata y luego compras Gold, el beneficio del Plata no contará y se considerará como perdido.",
      icon: "mdi:swap-horizontal"
    },
    {
      question: "¿Los paquetes VIP son permanentes?",
      answer: "Sí, todo en los paquetes VIP es permanente, a excepción del VIP que se compra cada 30 días. El resto de beneficios son de por vida en tu cuenta.",
      icon: "mdi:infinity"
    },
    {
      question: "¿Qué pasa si tengo problemas con mi compra?",
      answer: "Si experimentas algún problema con tu compra, abre un ticket de donación en Discord. Recuerda que siempre antes de comprar debes preguntar por ticket en Discord.",
      icon: "mdi:help-circle"
    },
    {
      question: "¿Puedo comprar múltiples paquetes?",
      answer: "Sí, puedes comprar múltiples paquetes VIP. Sin embargo, debes tener en cuenta que si hay un beneficio repetido, se tomará como perdido y se considerará el de mayor valor.",
      icon: "mdi:plus-circle"
    },
    {
      question: "¿Hay descuentos disponibles?",
      answer: "Sí, ofrecemos descuentos en tiempos o temporadas exclusivas. Debes estar atento en Discord para no perderte estas promociones especiales.",
      icon: "mdi:percent"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-dalton-extrabold text-dalton-primary text-center mb-2 uppercase">
            Paquetes VIP
          </h1>
          <p className="font-dalton-regular text-lg text-gray-100 max-w-3xl mx-auto">
            Si deseas disfrutar de beneficios exclusivos, nuestros paquetes VIP te ofrecen acceso a premios exclusivos y una mejor experiencia en el servidor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardVip
            title="Paquete Inicial"
            price={0}
            cardIcon="mdi:rocket-launch"
            benefits={[
              {
                text: "Auto Inicial (Bocho - weevil)",
                icon: "mdi:car"
              },
              {
                text: "250 Puntos VIP",
                icon: "mdi:star"
              },
              {
                text: "10 Burgers",
                icon: "mdi:hamburger"
              },
              {
                text: "10 aguas",
                icon: "mdi:cup-water"
              },
              {
                text: "Ticket Combo de Comida",
                icon: "mdi:ticket"
              }
            ]}
            popular={false}
          />
          <CardVip
            title="Paquete Bronze"
            price={20}
            cardIcon="mdi:podium-bronze"
            benefits={[
              {
                text: "Rango VIP en Discord",
                icon: "mdi:discord"
              },
              {
                text: "Auto gama Mediana ($30,000 - $100,000)",
                icon: "mdi:car-sports"
              },
              {
                text: "2 Giros en la ruleta Bronze",
                icon: "mdi:casino"
              },
              {
                text: "Casa en zona barrios bajos",
                icon: "mdi:home"
              },
              {
                text: "Ticket de descuento para el Concesionario",
                icon: "mdi:percent"
              },
              {
                text: "VIP Bronze (Con sus beneficios)",
                icon: "mdi:crown"
              },
              {
                text: "1 Ticket Full Tuning",
                icon: "mdi:wrench"
              },
              {
                text: "1+ Slot de Garage",
                icon: "mdi:garage"
              }
            ]}
            popular={false}
          />
          <CardVip
            title="Paquete Plata"
            price={60}
            cardIcon="mdi:podium-silver"
            benefits={[
              {
                text: "Rango VIP en Discord",
                icon: "mdi:discord"
              },
              {
                text: "Auto gama Mediana ($100,000 - $250,000)",
                icon: "mdi:car-sports"
              },
              {
                text: "2 Giros en la ruleta Plata",
                icon: "mdi:casino"
              },
              {
                text: "Casa en zona de Mirror y Playa",
                icon: "mdi:home-city"
              },
              {
                text: "1 Ticket Full Tuning",
                icon: "mdi:wrench"
              },
              {
                text: "Ticket de descuento para el Concesionario",
                icon: "mdi:percent"
              },
              {
                text: "1+ Slot de personaje",
                icon: "mdi:account-multiple"
              },
              {
                text: "VIP Plata (Con sus beneficios)",
                icon: "mdi:crown"
              },
              {
                text: "2+ Slot de Garage",
                icon: "mdi:garage"
              }
            ]}
            popular={false}
          />
          <CardVip
            title="Paquete Gold"
            price={105}
            cardIcon="mdi:podium-gold"
            benefits={[
              {
                text: "Rango VIP en Discord",
                icon: "mdi:discord"
              },
              {
                text: "Auto gama Alta ($250,000 - $500,000)",
                icon: "mdi:car"
              },
              {
                text: "2 Giros en la ruleta Gold",
                icon: "mdi:casino"
              },
              {
                text: "Casa en barrios altos/Rockford Hills",
                icon: "mdi:home-variant"
              },
              {
                text: "2+ Slot de personaje",
                icon: "mdi:account-multiple"
              },
              {
                text: "2 Ticket Full Tuning",
                icon: "mdi:wrench"
              },
              {
                text: "2 Ticket de descuento para el Concesionario",
                icon: "mdi:percent"
              },
              {
                text: "VIP Gold (Con sus beneficios)",
                icon: "mdi:crown"
              },
              {
                text: "3+ Slot de Garage",
                icon: "mdi:garage"
              }
            ]}
            popular={true}
          />
          <CardVip
            title="Paquete EXCLUSIVO"
            price={150}
            cardIcon="streamline:diamond-2"
            benefits={[
              {
                text: "Rango VIP en Discord",
                icon: "mdi:discord"
              },
              {
                text: "Auto gama Alta ($500,000+)",
                icon: "mdi:car"
              },
              {
                text: "3 Giros en la ruleta exclusiva",
                icon: "mdi:casino"
              },
              {
                text: "Casa MLO a Preferencia",
                icon: "mdi:home-modern"
              },
              {
                text: "2+ Slot de personaje",
                icon: "mdi:account-multiple"
              },
              {
                text: "3 Ticket Full Tuning",
                icon: "mdi:wrench"
              },
              {
                text: "3 Ticket de descuento para el Concesionario",
                icon: "mdi:percent"
              },
              {
                text: "VIP Gold (Con sus beneficios)",
                icon: "mdi:crown"
              },
              {
                text: "5+ Slot de garage",
                icon: "mdi:garage"
              },
              {
                text: "$100.000 Dinero en el banco",
                icon: "mdi:bank"
              },
              {
                text: "2000 Puntos VIP de Regalo",
                icon: "mdi:gift"
              }
            ]}
            popular={false}
          />
          <CardVip
            title="Próximamente"
            price={-1}
            cardIcon="mynaui:incognito"
            benefits={[
              {
                text: "Contenido sorpresa",
                icon: "mdi:gift"
              }
            ]}
            popular={false}
          />
        </div>
      </div>

      <FAQSection
        title="Preguntas Frecuentes sobre Donaciones"
        faqs={donationFAQs}
      />
    </Layout>
  );
};

export default PaquetesVipPage;
