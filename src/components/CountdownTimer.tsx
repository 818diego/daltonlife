import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Tooltip from "@/components/Tooltip";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2026-02-15T18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimatingIn(true);
    }, 100);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-40 transition-all duration-500 ease-out ${
      isClosing 
        ? 'translate-y-full opacity-0' 
        : isAnimatingIn
        ? 'translate-y-0 opacity-100'
        : 'translate-y-full opacity-0'
    }`}>
      <div className="bg-[#1c1c1c]/95 backdrop-blur-md border border-dalton-stroke rounded-lg shadow-2xl w-64 sm:w-80">
        <div className="relative px-3 py-3 sm:px-4 sm:py-3.5">
          <div className="absolute top-2 right-2 z-50">
            <Tooltip content="Cerrar" position="top">
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full p-1 cursor-pointer"
                aria-label="Cerrar cuenta regresiva"
              >
                <Icon icon="line-md:close" className="w-4 h-4" />
              </button>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="font-dalton-bold text-white text-base sm:text-lg uppercase tracking-wide mb-2.5 sm:mb-3">
              Apertura en:
            </h3>

            <div className="flex flex-row justify-center gap-1.5 sm:gap-2 w-full">
              {timeLeft.days > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-dalton-bg-light border border-dalton-stroke rounded px-2 py-2 sm:px-2.5 sm:py-2 min-w-[45px] flex items-center justify-center">
                    <span className="font-dalton-bold text-dalton-primary text-xl sm:text-2xl">
                      {formatTime(timeLeft.days)}
                    </span>
                  </div>
                  <span className="font-dalton-semibold text-white text-[10px] sm:text-xs uppercase">
                    Días
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center gap-1">
                <div className="bg-dalton-bg-light border border-dalton-stroke rounded px-2 py-2 sm:px-2.5 sm:py-2 min-w-[45px] flex items-center justify-center">
                  <span className="font-dalton-bold text-dalton-primary text-xl sm:text-2xl">
                    {formatTime(timeLeft.hours)}
                  </span>
                </div>
                <span className="font-dalton-semibold text-white text-[10px] sm:text-xs uppercase">
                  Horas
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="bg-dalton-bg-light border border-dalton-stroke rounded px-2 py-2 sm:px-2.5 sm:py-2 min-w-[45px] flex items-center justify-center">
                  <span className="font-dalton-bold text-dalton-primary text-xl sm:text-2xl">
                    {formatTime(timeLeft.minutes)}
                  </span>
                </div>
                <span className="font-dalton-semibold text-white text-[10px] sm:text-xs uppercase">
                  Min
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="bg-dalton-bg-light border border-dalton-stroke rounded px-2 py-2 sm:px-2.5 sm:py-2 min-w-[45px] flex items-center justify-center">
                  <span className="font-dalton-bold text-dalton-primary text-xl sm:text-2xl">
                    {formatTime(timeLeft.seconds)}
                  </span>
                </div>
                <span className="font-dalton-semibold text-white text-[10px] sm:text-xs uppercase">
                  Seg
                </span>
              </div>
            </div>
          </div>

          <div className="h-1 bg-gradient-to-r from-dalton-primary via-dalton-secondary to-dalton-primary animate-pulse mt-2.5 sm:mt-3 rounded-full"></div>
          
          <a 
            href="https://discord.gg/YHVH8HvtAb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-white/10 text-white/80 hover:text-dalton-primary transition-all duration-300 group"
          >
            <Icon icon="line-md:discord" className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-dalton-semibold text-[10px] sm:text-xs uppercase">
              Ingresa a nuestro Discord para más actualizaciones
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
