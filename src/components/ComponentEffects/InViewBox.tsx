import { CSS } from "@stitches/react";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { styled } from "../../styles";

type InViewBoxProps = {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  css?: CSS;
  threshold?: number;
};

const InViewBox = ({
  children,
  delay = 0.5,
  x = -200,
  y = 0,
  css,
  threshold = 0.5,
}: InViewBoxProps) => {
  // const ref = useRef(null);
  const {
    ref,
    inView,
  } = useInView({ triggerOnce: true, threshold: threshold });

  useEffect(() => {
    if (inView) {
      console.log("in view");
    }
  }, [inView]);

  return (
    <AnimatedDiv
      ref={ref}
      css={{
        ...css,
        transform: inView
          ? "translateX(0) translateY(0)"
          : `translateX(${x}px) translateY(${y}px)`,
        opacity: inView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </AnimatedDiv>
  );
};

const AnimatedDiv = styled("div", {
});

export default InViewBox;
