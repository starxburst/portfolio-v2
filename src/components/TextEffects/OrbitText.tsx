import React, { useState, useEffect, ReactNode } from 'react';
import { keyframes } from '@stitches/react';

type OrbitingDivsProps = {
  children: ReactNode[];
};

const orbit = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const OrbitingDivs = ({ children }: OrbitingDivsProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const angle = index * (360 / React.Children.count(children));
        const radius = 50; // Adjust this value to change the orbit radius
        const x = mousePosition.x + radius * Math.cos(angle * Math.PI / 180);
        const y = mousePosition.y + radius * Math.sin(angle * Math.PI / 180);

        return (
          <div 
            key={index}
            style={{ 
              position: 'fixed', 
              top: `${y}px`, 
              left: `${x}px`, 
              animation: `${orbit} 1s infinite linear`,
              zIndex: 1000,
            }} 
          >
            {child}
          </div>
        );
      })}
    </>
  );
};

export default OrbitingDivs;