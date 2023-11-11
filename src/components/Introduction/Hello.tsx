import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Box from "../Containers/Box";

const Hello = (): JSX.Element => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useEffect(() => {
  //   const unsubscribeY = y.on("change", (y) => console.log("y", y));

  //   return () => {
  //     unsubscribeY();
  //   };
  // }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [hookedYPosition, setHookedYPosition] = useState(0);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      setHookedYPosition(v);
      // console.log("v", v * 100);
    });
  });

  const displayFirstBoxStart = 0.25
  const displayFirstBoxEnd = 0.5
  const displayFirstBoxHeight = displayFirstBoxEnd - displayFirstBoxStart
  let displayBoxScrollPosition = (hookedYPosition - displayFirstBoxStart) / displayFirstBoxHeight;
  displayBoxScrollPosition = Math.max(0, Math.min(1, displayBoxScrollPosition));

  const displayFirstBox = hookedYPosition > 0.25 && hookedYPosition < 0.5;

  return (
    <section>
      <div
        ref={ref}
        style={{
          height: "400vh",
          position: "relative",
          overflowY: "auto",
          // backgroundColor: "red",
        }}
      >
        <div style={{ height: "100vh" }}></div>
        <DisplayBox display={displayFirstBox} percentage={displayBoxScrollPosition} />
      </div>
    </section>
  );
};

export default Hello;

type DisplayBoxProps = {
  display: boolean;
  percentage?: number;
};

const DisplayBox = ({ display, percentage }: DisplayBoxProps): JSX.Element => {
  const text = "Hi, =I am Eric Lam, =Welcome to my website!";
  const parts = text.split("=");

  console.log("percentage", percentage);

  return (
    <AnimatePresence>
      {display && (
        <Box
          style={{
            width: "50%",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "5rem",
            // backgroundColor: "red",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            {parts.map((part, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: i * 0.5, // Change this to customize the delay
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {part}{" "}
              </motion.span>
            ))}
          </div>
        </Box>
      )}
    </AnimatePresence>
  );
};
