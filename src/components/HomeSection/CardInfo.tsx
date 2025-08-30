import React from 'react';
import { Icon } from '@iconify/react';

interface CardInfoProps {
    icon: string;
    text: string;
    color?: 'primary' | 'secondary' | 'green' | 'red';
    className?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
    icon,
    text,
    color = "primary",
    className = ""
}) => {
    const getColorClasses = (color: CardInfoProps['color']) => {
        switch (color) {
            case 'primary':
                return 'bg-dalton-primary/20 text-dalton-primary';
            case 'secondary':
                return 'bg-dalton-secondary/20 text-dalton-secondary';
            case 'green':
                return 'bg-dalton-green/20 text-dalton-green';
            case 'red':
                return 'bg-dalton-red/20 text-dalton-red';
            default:
                return 'bg-dalton-primary/20 text-dalton-primary';
        }
    };

    return (
        <div className={`flex items-center justify-center gap-2.5 p-3 bg-dalton-bg-light border border-dalton-stroke rounded ${className}`}>
            <div className={`w-8 h-8 ${getColorClasses(color)} rounded-full flex items-center justify-center flex-shrink-0`}>
                <Icon icon={icon} className="w-6 h-6" />
            </div>
            <span className="text-[16px] font-dalton-semibold text-white">{text}</span>
        </div>
    );
};

export default CardInfo;