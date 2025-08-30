import React from 'react';
import Layout from '@/layouts/Layout';
import CardVip from '@/components/vipPage/CardVip';

const PaquetesVipPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-dalton-primary text-center mb-8 uppercase">
          Paquetes VIP
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Paquete Inicial - GRATIS */}
          <CardVip
            title="Paquete Inicial"
            price={0}
            cardIcon="mdi:gift-outline"
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

          {/* Paquete Bronze */}
          <CardVip
            title="Paquete Bronze"
            price={20}
            cardIcon="mdi:medal"
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

          {/* Paquete Plata */}
          <CardVip
            title="Paquete Plata"
            price={60}
            cardIcon="mdi:silverware-fork-knife"
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

          {/* Paquete Gold */}
          <CardVip
            title="Paquete Gold"
            price={105}
            cardIcon="mdi:treasure-chest"
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

          {/* Paquete EXCLUSIVO */}
          <CardVip
            title="Paquete EXCLUSIVO"
            price={150}
            cardIcon="mdi:diamond-stone"
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
        </div>
      </div>
    </Layout>
  );
};

export default PaquetesVipPage;
