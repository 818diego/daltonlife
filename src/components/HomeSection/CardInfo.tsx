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
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 p-2 sm:p-3 bg-dalton-bg-light border border-dalton-stroke rounded text-center ${className}`}>
            <div className={`w-6 h-6 sm:w-8 sm:h-8 ${getColorClasses(color)} rounded-full flex items-center justify-center flex-shrink-0`}>
                <Icon icon={icon} className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs sm:text-sm lg:text-base font-dalton-semibold text-white leading-tight">{text}</span>
        </div>
    );
};

export default CardInfo;