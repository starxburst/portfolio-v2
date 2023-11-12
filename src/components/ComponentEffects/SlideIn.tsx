import { ReactNode, useEffect, useRef, useState } from 'react';

type SlideInProps = {
  children: ReactNode;
  mode: 'direct' | 'onScroll';
};

const SlideIn = ({ children, mode }: SlideInProps) => {
  const [rendered, setRendered] = useState(mode === 'direct');
  const ref = useRef(null);

  useEffect(() => {
    if (mode === 'onScroll' && ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setRendered(true);
        }
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [mode]);

  return (
    <div 
      ref={ref}
      style={{ 
        transform: `translateY(${rendered ? 0 : '-20px'})`,
        transition: 'transform 3s',
      }} 
    >
      {children}
    </div>
  );
};

export default SlideIn;