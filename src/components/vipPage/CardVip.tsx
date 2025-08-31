import React from 'react';
import { Icon } from '@iconify/react';

interface CardVipProps {
    title: string;
    price: number;
    benefits: Array<{
        text: string;
        icon: string;
    }>;
    popular?: boolean;
    cardIcon?: string;
}

const CardVip: React.FC<CardVipProps> = ({
    title,
    price,
    benefits,
    popular = false,
    cardIcon = "mdi:star-circle"
}) => {
    return (
        <div className={`relative bg-dalton-bg-light border-1 border-dalton-stroke rounded-[4px] p-4 sm:p-6 transition-all duration-300 hover:shadow-lg ${popular ? 'border-dalton-primary' : ''
            }`}>
            {popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dalton-primary text-dalton-tertiary px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase flex items-center gap-2">
                    <Icon icon="mdi:crown" className="w-3 h-3 sm:w-4 sm:h-4" />
                    Más Popular
                </div>
            )}
            <div className="text-center mb-4 sm:mb-6">
                <div className="mb-2 sm:mb-3">
                    <Icon icon={cardIcon} className="w-8 h-8 sm:w-12 sm:h-12 text-dalton-primary mx-auto" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 uppercase leading-tight">{title}</h2>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dalton-secondary">
                    {price === 0 ? 'GRATIS' : price === -1 ? 'INDEFINIDO' : `$${price}`}
                </div>
            </div>
            <div className="border-b border-dalton-stroke mb-3 sm:mb-4"></div>
            <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-dalton-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon icon={benefit.icon} className="w-3 h-3 sm:w-5 sm:h-5 text-dalton-primary" />
                        </div>
                        <span className="text-dalton-primary/90 text-white font-dalton-regular text-sm sm:text-base leading-relaxed">{benefit.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardVip;
