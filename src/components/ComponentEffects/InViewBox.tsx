import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { keyframes, styled } from "../../styles";
import { CSS } from "@stitches/react";

type InViewBoxProps = {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  css?: CSS;
};

const InViewBox = ({ children, delay = 0.5, x = -200, y = 0, css }: InViewBoxProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      console.log("in view");
    }
  }, [isInView]);

  return (
    <AnimatedDiv
      ref={ref}
      css={{
        ...css,
        transform: isInView ? "translateX(0) translateY(0)" : `translateX(${x}px) translateY(${y}px)`,
        opacity: isInView ? 1 : 0,
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
