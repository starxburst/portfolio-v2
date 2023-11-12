import { useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import DisplayBox from "./DisplayBox";
import ParallaxBox from "./ParallaxBox";
import Box from "../Containers/Box";
import { CSS } from "@stitches/react";
import differenceInDays from "date-fns/differenceInDays";

const Hello = (): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [hookedYPosition, setHookedYPosition] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setHookedYPosition(v);
      // console.log("v", v * 100);
    });

    return () => {
      unsubscribe();
    };
  });

  const {
    displayFirstBox,
    displayParallaxBox,
    displayFirstBoxScrollPosition,
    displaySecondBox,
    displaySecondBoxScrollPosition,
  } = useMemo(() => {
    // FirstBoxParams
    const displayFirstBoxStart = 0.25;
    const displayFirstBoxEnd = 0.5;
    const displayFirstBoxHeight = displayFirstBoxEnd - displayFirstBoxStart;
    let displayFirstBoxScrollPosition =
      (hookedYPosition - displayFirstBoxStart) / displayFirstBoxHeight;
    displayFirstBoxScrollPosition = Math.max(
      0,
      Math.min(1, displayFirstBoxScrollPosition)
    );
    const displayFirstBox = hookedYPosition > 0.25 && hookedYPosition < 0.5;

    // SecondBoxParams
    const displaySecondBoxStart = 0.5;
    const displaySecondBoxEnd = 0.75;
    const displaySecondBoxHeight = displaySecondBoxEnd - displaySecondBoxStart;
    let displaySecondBoxScrollPosition =
      (hookedYPosition - displaySecondBoxStart) / displaySecondBoxHeight;
    displaySecondBoxScrollPosition = Math.max(
      0,
      Math.min(1, displaySecondBoxScrollPosition)
    );
    const displaySecondBox = hookedYPosition > 0.5 && hookedYPosition < 0.75;

    // ParallaxBoxParams
    const displayParallaxBox = hookedYPosition > 0 && hookedYPosition < 0.75;
    return {
      displayFirstBox,
      displayParallaxBox,
      displayFirstBoxScrollPosition,
      displaySecondBox,
      displaySecondBoxScrollPosition,
    };
  }, [hookedYPosition]);

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
        <ParallaxBox
          display={displayParallaxBox}
          scrollYProgress={scrollYProgress}
        />
        <div style={{ height: "100vh" }} />
        <div id="introduction">
          <DisplayBox
            display={displayFirstBox}
            percentage={displayFirstBoxScrollPosition}
          >
            <DisplayBoxContent>Hi 👋,&nbsp;</DisplayBoxContent>
            <DisplayBoxContent>I am &nbsp;</DisplayBoxContent>
            <DisplayBoxContent
              css={{
                color: "$text",
                textDecoration: "underline",
              }}
            >
              Eric Lam&nbsp;
            </DisplayBoxContent>
            <DisplayBoxContent>Welcome to my website!&nbsp;</DisplayBoxContent>
            <DisplayBoxContent>Hope you like my&nbsp;</DisplayBoxContent>
            <DisplayBoxContent>little suprise!</DisplayBoxContent>
          </DisplayBox>
        </div>
        <div>
          <DisplayBox
            display={displaySecondBox}
            percentage={displaySecondBoxScrollPosition}
          >
            <DisplayBoxContent>
              A self-taught developer,&nbsp;
            </DisplayBoxContent>
            <DisplayBoxContent>
              Long but enjoyable journey.&nbsp;
            </DisplayBoxContent>
            <DisplayBoxContent>With&nbsp;</DisplayBoxContent>
            <DisplayBoxContent
              css={{
                color: "$text",
                textDecoration: "underline",
              }}
            >
              {`${differenceInDays(new Date(), new Date("2022-08-16"))} days`}
              &nbsp;
            </DisplayBoxContent>
            <DisplayBoxContent>in this field!</DisplayBoxContent>
          </DisplayBox>
        </div>
      </div>
    </section>
  );
};

export default Hello;

type DisplayBoxProps = {
  children: React.ReactNode;
  css?: CSS;
};

const DisplayBoxContent = ({ children, css }: DisplayBoxProps) => {
  return (
    <Box
      css={{
        display: "inline",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        backgroundClip: "text",
        fontWeight: "bold",
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
