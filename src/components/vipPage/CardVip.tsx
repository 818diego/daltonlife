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
        <div className={`relative bg-dalton-bg-light border-1 border-dalton-stroke rounded-[4px] p-6 transition-all duration-300 hover:shadow-lg ${popular ? 'border-dalton-primary' : ''
            }`}>
            {popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dalton-primary text-dalton-tertiary px-4 py-1 rounded-full text-sm font-semibold uppercase flex items-center gap-2">
                    <Icon icon="mdi:crown" className="w-4 h-4" />
                    Más Popular
                </div>
            )}
            <div className="text-center mb-6">
                <div className="mb-3">
                    <Icon icon={cardIcon} className="w-12 h-12 text-dalton-primary mx-auto" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 uppercase">{title}</h2>
                <div className="text-4xl font-bold text-dalton-secondary">
                    {price === 0 ? 'GRATIS' : price === -1 ? 'INDEFINIDO' : `$${price}`}
                </div>
            </div>
            <div className="border-b border-dalton-stroke mb-4"></div>
            <div className="mb-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-dalton-secondary/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon={benefit.icon} className="w-5 h-5 text-dalton-primary" />
                        </div>
                        <span className="text-dalton-primary/90 text-white font-dalton-regular text-[16px] leading-relaxed">{benefit.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardVip;
