import { motion, useScroll } from "framer-motion";
import type { CSS } from "@stitches/react";
import { useEffect, useState, useRef } from "react";
import Box from "./Box";

type ScrollYProgressBoxProps = {
  container: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  css?: CSS;
};

const ScrollYProgressBox = ({ css, container }: ScrollYProgressBoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: container,
    target: boxRef, // Pass the actual DOM element
  });
  // console.log("scrollYProgress", scrollYProgress);
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(() => {
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange((v) => setHookedYPosition(v));
    // console.log("hookedYPostion", hookedYPostion);
  }, [scrollYProgress]); //make sure to re-subscribe when scrollYProgress changes
  return (
    <Box ref={boxRef}>
      {/* <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: hookedYPostion }}
          />
          {hookedYPostion}
        </div> */}
        <div style={{height: '30vh'}}>
          dasda
        </div>
      <motion.div
        style={{
          // height: '600vh'
          // background: "linear-gradient(0deg, #000000 0%, #ffffff 100%)",
          opacity: scrollYProgress,
          position: 'fixed', top: '50%', left: '50%',
          ...css,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any}
      >
        {hookedYPostion}
      </motion.div>
    </Box>
  );
};

export default ScrollYProgressBox;