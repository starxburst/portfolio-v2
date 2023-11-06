import { useLayoutEffect, useState } from "react";
import { styled } from "../styles";
import Box from "./Containers/Box";
import DarkmodeSwitch from "./Switches/DarkModeSwitch";

const HeaderWrapper = styled("div", {
  width: "100%",
  zIndex: "$navBar",
  position: "fixed",
  left: 0,
  right: 0,
  variants: {
    scrolled: {
      true: {
        // backgroundColor: '#333',
        backdropFilter: "blur(10px)",
        transform: "translateY(0px)",
        transition: "transform 0.5s",
      },
      false: {
        // backgroundColor: 'transparent',
        transform: "translateY(30px)",
        transition: "all 0.5s",
      },
    },
  },
});

const Header = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    // <HeaderWrapper scrolled={scrolled}>
    <Box css={{zIndex: '$navBar'}}>
      <DarkmodeSwitch />
    </Box>
    // </HeaderWrapper>
  );
};

export default Header;
