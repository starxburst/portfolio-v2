import { useLayoutEffect, useState } from "react";
import Box from "./Containers/Box";
import DarkmodeSwitch from "./Switches/DarkModeSwitch";

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
