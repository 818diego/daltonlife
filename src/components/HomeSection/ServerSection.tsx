import React from 'react';
import StepCard from './StepCard';

const ServerSection: React.FC = () => {
    const steps = [
        {
            icon: "solar:gamepad-broken",
            title: "Descarga GTA V",
            description: "Instala Grand Theft Auto V desde Steam, Epic Games o Rockstar Games"
        },
        {
            icon: "simple-icons:fivem",
            title: "Instala FiveM",
            description: "Descarga e instala el cliente FiveM desde fivem.net"
        },
        {
            icon: "mdi:discord",
            title: "Únete a Discord",
            description: "Conecta con la comunidad Dalton en nuestro servidor de Discord"
        },
        {
            icon: "mdi:gamepad-variant",
            title: "Conectate y juega",
            description: "Busca el servidor Dalton Life y conectate para comenzar tu aventura"
        }
    ];

    return (
        <section className="py-16 bg-dalton-tertiary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <h2 className="font-dalton-black uppercase tracking-wider text-5xl md:text-6xl text-white">
                            Dalton Life
                        </h2>
                    </div>
                    <p className="font-dalton-regular text-lg md:text-xl text-gray-100 max-w-7xl mx-auto leading-relaxed">
                        Sumérgete en un universo donde la creatividad no tiene límites. Dalton no es solo un servidor,
                        es tu próxima aventura épica. Aquí encontrarás una comunidad apasionada que comparte tu amor por
                        la innovación y la excelencia. Desde eventos únicos hasta colaboraciones que transforman ideas
                        en realidades extraordinarias, cada día en Dalton es una nueva oportunidad para crear, conectar
                        y crecer junto a personas que comparten tu visión del futuro.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <h3 className="font-dalton-bold text-3xl md:text-4xl text-white text-center mb-12">
                        ¿Cómo Jugar?
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                icon={step.icon}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                        <div className="col-span-full text-center mt-4">
                            <button
                                onClick={() => {
                                    window.open('https://cfx.re/join/pmgvj7', '_blank');
                                }}
                                className="w-full font-dalton-semibold text-gray-200 uppercase leading-relaxed text-[15px] bg-white/5 backdrop-blur-sm rounded-[4px] p-3 border border-white/10 hover:bg-[#9a40ce] transition-all duration-300 cursor-pointer"
                            >
                                ¿Ya tienes FiveM? ¡Click aquí para conectar!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServerSection;
