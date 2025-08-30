import React, { useEffect, useRef, useState } from "react";

let LAST_POS = { x: -9999, y: -9999, ready: false };

const MouseAnimation: React.FC = () => {
  const xRef = useRef(LAST_POS.x);
  const yRef = useRef(LAST_POS.y);
  const hasLast = LAST_POS.ready && LAST_POS.x >= 0 && LAST_POS.y >= 0;
  const [initialized, setInitialized] = useState(hasLast);
  const [isVisible, setIsVisible] = useState(hasLast);
  const [isClickable, setIsClickable] = useState(false);
  const [, force] = useState(0);

  useEffect(() => {
    let rafId = 0;
    if (hasLast) {
      xRef.current = LAST_POS.x;
      yRef.current = LAST_POS.y;
      setInitialized(true);
      setIsVisible(true);
      rafId = requestAnimationFrame(() => force((t) => (t + 1) & 1));
    }

    const update = (e: PointerEvent | MouseEvent) => {
      const x = (e as PointerEvent).clientX;
      const y = (e as PointerEvent).clientY;
      xRef.current = x;
      yRef.current = y;
      LAST_POS = { x, y, ready: true };
      if (!initialized) setInitialized(true);
      if (!isVisible) setIsVisible(true);
      const target = e.target as HTMLElement;
      const clickable =
        target.closest(
          'a, button, [role="button"], [tabindex]:not([tabindex="-1"]), input, select, textarea, .clickable'
        ) ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a");
      setIsClickable(!!clickable);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => force((t) => (t + 1) & 1));
    };

    const handleEnter = (e: PointerEvent) => update(e);

    document.addEventListener("pointermove", update, { passive: true });
    document.addEventListener("pointerdown", update, { passive: true });
    document.addEventListener("pointerenter", handleEnter, { passive: true });
    const onVis = () => {
      if (document.visibilityState === "visible" && LAST_POS.ready) {
        xRef.current = LAST_POS.x;
        yRef.current = LAST_POS.y;
        setInitialized(true);
        setIsVisible(true);
        force((t) => (t + 1) & 1);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("pointermove", update);
      document.removeEventListener("pointerdown", update);
      document.removeEventListener("pointerenter", handleEnter);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 9999,
    pointerEvents: "none",
    opacity: initialized && isVisible ? 1 : 0,
    transform: `translate3d(${xRef.current}px, ${yRef.current}px, 0)`,
    willChange: "transform",
  };

  return (
    <>
      <div style={baseStyle} className="transition-opacity duration-200">
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-[#7C40A0]/20 rounded-full blur-lg" />
        </div>
      </div>
      <div style={baseStyle}>
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {isClickable ? (
            <>
              <div className="w-6 h-6 border-2 border-[#FEFE86] rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#FEFE86] rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FEFE86] rounded-full animate-bounce" />
            </>
          ) : (
            <>
              <div className="w-5 h-5 border-2 border-[#7C40A0] rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#7C40A0] rounded-full -translate-x-1/2 -translate-y-1/2" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MouseAnimation;
