import { AnimatePresence, motion } from "framer-motion";
import { Box } from "../Containers/Box";
import { Children, isValidElement, ReactNode } from "react";

type DisplayBoxProps = {
  display: boolean;
  percentage?: number;
  children: ReactNode;
};

const DisplayBox = ({ display, percentage, children }: DisplayBoxProps): JSX.Element => {
  console.log("percentage", percentage);

  const childrenArray = Children.toArray(children);

  return (
    <AnimatePresence>
      {display && (
        <Box
        css={{
          width: "50%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "5rem",
          lineHeight: "2",
          "@sm": {
            fontSize: "2.5rem",
            width: "80%",
          },
          // backgroundColor: "red",
        }}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div style={{ overflow: "hidden", display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {childrenArray.map((child, i) => isValidElement(child) && (
                <motion.div
                  key={i}
                  initial={{ y: "20%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: i * 0.5, // Change this to customize the delay
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {child}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default DisplayBox;