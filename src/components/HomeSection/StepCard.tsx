import React from 'react';
import { Icon } from '@iconify/react';

interface StepCardProps {
    icon: string;
    title: string;
    description: string;
    iconColor?: string;
}

const StepCard: React.FC<StepCardProps> = ({ 
    icon, 
    title, 
    description, 
    iconColor = 'black' 
}) => {
    return (
        <div className="text-center">
            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-dalton-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Icon icon={icon} className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: iconColor }} />
                    </div>
                    <h4 className="font-dalton-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 uppercase leading-tight">{title}</h4>
                    <p className="font-dalton-regular text-gray-200 leading-relaxed text-xs sm:text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;
