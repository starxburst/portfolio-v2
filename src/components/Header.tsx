import { useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../stores/darkMode';
import { styled } from '../styles';
import Box from './Containers/Box';

const HeaderWrapper = styled('div', {
  position: 'fixed',
  left: 0,
  right: 0,
  width: '100%',
  variants: {
    scrolled: {
      true: {
        backgroundColor: '#333',
        transform: 'translateY(0px)',
        transition: 'transform 0.5s, background-color 1s',
      },
      false: {
        backgroundColor: 'transparent',
        transform: 'translateY(30px)',
        transition: 'all 0.5s',
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

    document.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <HeaderWrapper scrolled={scrolled}>
      <Box>
        <h1>Header</h1>
        <div onClick={() => setDarkMode(!darkMode)}>Darkmode</div>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;