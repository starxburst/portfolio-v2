import { CSS } from "@stitches/react";
import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { styled } from "../../styles";

type InViewBoxProps = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  css?: CSS;
} & IntersectionOptions;

const InViewBox = ({
  children,
  x = -200,
  y = 0,
  css,
  ...rest
}: InViewBoxProps) => {
  const defaultOptions: IntersectionOptions = {
    triggerOnce: true,
  };
  const { ref, inView } = useInView({ ...defaultOptions, ...rest });

  useEffect(() => {
    if (inView) {
      // console.log("in view");
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
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)`,
      }}
    >
      {children}
    </AnimatedDiv>
  );
};

const AnimatedDiv = styled("div", {});

export default InViewBox;
