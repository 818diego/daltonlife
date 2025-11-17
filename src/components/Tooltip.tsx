import React, { useState, useRef, useEffect } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: string | React.ReactNode;
  children: React.ReactElement;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 200,
  className = "",
  showArrow = true,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + 8;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "left":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case "right":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + 8;
        break;
    }

    // Ajustar para que no se salga de la pantalla
    const margin = 8;
    if (left < margin) left = margin;
    if (left + tooltipRect.width > window.innerWidth - margin) {
      left = window.innerWidth - tooltipRect.width - margin;
    }
    if (top < margin) top = margin;
    if (top + tooltipRect.height > window.innerHeight - margin) {
      top = window.innerHeight - tooltipRect.height - margin;
    }

    setTooltipPosition({ top, left });
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        calculatePosition();
        setIsAnimating(true);
      }, 10);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsAnimating(false);
    animationTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 150);
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      const handleScroll = () => calculatePosition();
      const handleResize = () => calculatePosition();

      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll, true);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isVisible, position]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const getTransformClasses = () => {
    if (!isAnimating) {
      switch (position) {
        case "top":
          return "opacity-0 scale-95 translate-y-1";
        case "bottom":
          return "opacity-0 scale-95 -translate-y-1";
        case "left":
          return "opacity-0 scale-95 translate-x-1";
        case "right":
          return "opacity-0 scale-95 -translate-x-1";
        default:
          return "opacity-0 scale-95";
      }
    }
    return "opacity-100 scale-100 translate-x-0 translate-y-0";
  };

  const getArrowClasses = () => {
    const baseClasses = "absolute w-2 h-2 bg-[#1c1c1c]/95";
    switch (position) {
      case "top":
        return `${baseClasses} bottom-[-4px] left-1/2 transform -translate-x-1/2 rotate-45 border-r border-b border-dalton-stroke`;
      case "bottom":
        return `${baseClasses} top-[-4px] left-1/2 transform -translate-x-1/2 rotate-45 border-l border-t border-dalton-stroke`;
      case "left":
        return `${baseClasses} right-[-4px] top-1/2 transform -translate-y-1/2 rotate-45 border-r border-t border-dalton-stroke`;
      case "right":
        return `${baseClasses} left-[-4px] top-1/2 transform -translate-y-1/2 rotate-45 border-l border-b border-dalton-stroke`;
      default:
        return baseClasses;
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && !disabled && (
        <div
          ref={tooltipRef}
          className={`fixed z-50 pointer-events-none transition-all duration-300 ease-out ${getTransformClasses()} ${className}`}
          style={
            tooltipPosition
              ? {
                  top: `${tooltipPosition.top}px`,
                  left: `${tooltipPosition.left}px`,
                }
              : { visibility: "hidden" }
          }
        >
          <div className="bg-[#1c1c1c]/95 backdrop-blur-md border border-dalton-stroke rounded-lg px-3 py-2 max-w-xs">
            {showArrow && (
              <div
                className={`${getArrowClasses()} transition-opacity duration-300 ${
                  isAnimating ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
            <div className="relative font-dalton-semibold text-white text-xs sm:text-sm">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
