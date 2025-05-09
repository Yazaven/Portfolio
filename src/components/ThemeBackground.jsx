import { useEffect, useRef } from 'react';

export const LightEffect = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const updateLightPosition = (e) => {
      if (lightRef.current) {
        lightRef.current.style.left = `${e.clientX}px`;
        lightRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', updateLightPosition);
    return () => document.removeEventListener('mousemove', updateLightPosition);
  }, []);

  return (
    <div
      ref={lightRef}
      className="fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50
                 w-48 h-48 bg-gradient-to-b from-blue-400/30 to-transparent 
                 rounded-full blur-3xl opacity-70"
    />
  );
};