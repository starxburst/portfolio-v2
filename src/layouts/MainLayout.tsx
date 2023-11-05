import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode, useLayoutEffect, useState } from 'react';
import Header from "../components/Header";
import { styled } from '../styles';
import { NotMobile } from '../hooks/useResponsive';
import SnakeGame from '../utils/SnakeGame';

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
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
    <>
      <NotMobile>
        <SnakeGame />
      </NotMobile>
      <Grid width={"100%"} container direction="column">
        <Grid>
          <HeaderWrapper scrolled={scrolled}>
            <Header />
          </HeaderWrapper>
        </Grid>
        <Grid>
          <div>{children}</div>
        </Grid>
      </Grid>
    </>
  );
}

const HeaderWrapper = styled('div', {
  width: '100vw',
  zIndex: '$navBar',
  position: 'fixed',
  left: 0,
  right: 0,
  transform: 'translateY(-50px)',
  backgroundColor: 'linear-gradient($background)',
  variants: {
    scrolled: {
      true: {
        // backgroundColor: '#333',
        backdropFilter: 'blur(10px)',
        transform: 'translateY(0px)',
        transition: 'transform 0.5s',
      },
      false: {
        display: 'hidden',
        // backgroundColor: 'transparent',
        // transform: 'translateY(30px)',
        // transition: 'all 0.5s',
      },
    },
  },
});

export default MainLayout