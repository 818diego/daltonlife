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
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                    <div className="w-16 h-16 bg-dalton-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon icon={icon} className="w-8 h-8" style={{ color: iconColor }} />
                    </div>
                    <h4 className="font-dalton-bold text-xl text-white mb-3 uppercase">{title}</h4>
                    <p className="font-dalton-regular text-gray-200 leading-relaxed text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;
