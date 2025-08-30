import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface FAQItem {
    question: string;
    answer: string;
    icon?: string;
}

interface FAQSectionProps {
    title?: string;
    faqs: FAQItem[];
}

const renderAnswerWithLinks = (text: string) => {
    const linkPatterns = [
        {
            pattern: /Discord/gi,
            url: 'https://discord.gg/YHVH8HvtAb',
            label: 'Discord'
        },
        {
            pattern: /fivem\.net/gi,
            url: 'https://fivem.net',
            label: 'fivem.net'
        },
        {
            pattern: /Steam/gi,
            url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
            label: 'Steam'
        },
        {
            pattern: /Epic Games/gi,
            url: 'https://store.epicgames.com/en-US/p/grand-theft-auto-v',
            label: 'Epic Games'
        },
        {
            pattern: /Rockstar Games/gi,
            url: 'https://www.rockstargames.com/games/V',
            label: 'Rockstar Games'
        }
    ];
    let result = text;
    linkPatterns.forEach(({ pattern, url, label }) => {
        result = result.replace(pattern, `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-dalton-primary hover:text-dalton-primary/80 underline transition-colors duration-300">${label}</a>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

const FAQSection: React.FC<FAQSectionProps> = ({
    title = "Preguntas Frecuentes",
    faqs
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className="py-16 bg-dalton-tertiary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-dalton-black uppercase tracking-wider text-4xl md:text-5xl text-white mb-6">
                        {title}
                    </h2>
                    <p className="font-dalton-regular text-lg text-gray-300 max-w-3xl mx-auto">
                        Resolvemos las dudas más comunes sobre Dalton Life
                    </p>
                </div>

                <div className="w-full">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-[#9a40ce] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        {faq.icon && (
                                            <div className="w-8 h-8 bg-dalton-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icon
                                                    icon={faq.icon}
                                                    className="w-5 h-5 text-white"
                                                    style={{ color: 'black' }}
                                                />
                                            </div>
                                        )}
                                        <h3 className="font-dalton-bold text-lg text-white uppercase">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <Icon
                                        icon={openIndex === index ? "mdi:chevron-up" : "mdi:chevron-down"}
                                        className="w-6 h-6 text-white flex-shrink-0 transition-transform duration-300"
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 mt-6">
                                        <p className="font-dalton-regular text-gray-200 leading-relaxed">
                                            {renderAnswerWithLinks(faq.answer)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
