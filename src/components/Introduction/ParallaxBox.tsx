import {
  MotionValue,
  useTransform,
  AnimatePresence,
  motion,
} from "framer-motion";
import { styled } from "../../styles";

type ParallaxBoxProps = {
  display: boolean;
  scrollYProgress: MotionValue<number>;
};

const ParallaxBox = ({
  display,
  scrollYProgress,
}: ParallaxBoxProps): JSX.Element => {
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]); // Start from the bottom (100%) and move to the top (0%)
  const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-800%"]); // Start from the bottom (100%) and move further up (-500%)
  const y3 = useTransform(scrollYProgress, [0, 1], ["50%", "-1000%"]); // Start from the bottom (100%) and move further up (-500%)
  const y4 = useTransform(scrollYProgress, [0, 1], ["50%", "-1500%"]); // Start from the bottom (100%) and move further up (-500%)
  const y5 = useTransform(scrollYProgress, [0, 1], ["50%", "-2000%"]); // Start from the bottom (100%) and move further up (-500%)
  const y6 = useTransform(scrollYProgress, [0, 1], ["50%", "-2500%"]); // Start from the bottom (100%) and move further up (-500%)
  const y7 = useTransform(scrollYProgress, [0, 1], ["50%", "-3000%"]); // Start from the bottom (100%) and move further up (-500%)
  const y8 = useTransform(scrollYProgress, [0, 1], ["50%", "-3500%"]); // Start from the bottom (100%) and move further up (-500%)
  const y9 = useTransform(scrollYProgress, [0, 1], ["50%", "-4000%"]); // Start from the bottom (100%) and move further up (-500%)
  const y10 = useTransform(scrollYProgress, [0, 1], ["50%", "-4500%"]); // Start from the bottom (100%) and move further up (-500%)

  const emojis = [
    { y: y2, x: "0%", emoji: "😹" },
    { y: y4, x: "10%", emoji: "😴" },
    { y: y7, x: "20%", emoji: "🤪" },
    { y: y5, x: "30%", emoji: "😍" },
    { y: y1, x: "40%", emoji: "🐶" },
    { y: y8, x: "50%", emoji: "🌞" },
    { y: y3, x: "60%", emoji: "😎" },
    { y: y6, x: "70%", emoji: "🥰" },
    { y: y10, x: "80%", emoji: "👻" },
    { y: y9, x: "90%", emoji: "🐼" },
  ];

  return (
    <AnimatePresence>
      {display && (
        <>
          {emojis.map(({ y, x, emoji }, index) => (
            <StyledMotionDiv key={index} y={y} x={x}>
              {emoji}
            </StyledMotionDiv>
          ))}
        </>
      )}
    </AnimatePresence>
  );
};

export default ParallaxBox;

type StyledMotionDivProps = {
  children: React.ReactNode;
  y: MotionValue<string>;
  x?: string;
};

const StyledMotionDiv = ({
  children,
  y,
  x = "0",
}: StyledMotionDivProps): JSX.Element => {
  return (
    <StyledDiv
      css={{
        left: x,
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ y: y }}
    >
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div, {
  fontSize: "5rem",
  filter: "blur(3px)",
  opacity: 0.3,
  position: "fixed",
  "@sm": {
    fontSize: "2.5rem",
  },
});
