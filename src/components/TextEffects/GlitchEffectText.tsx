import { keyframes, styled } from '../../styles';

type GlitchEffectProps = {
  children: string;
};

const GlitchEffect = ({ children }: GlitchEffectProps) => (
  <GlitchContainer data-text={children}>
    {children}
  </GlitchContainer>
);

const glitch = keyframes({
  '0%': {
    transform: 'translate(0)',
  },
  '20%': {
    transform: 'translate(-5px, 5px)',
  },
  '40%': {
    transform: 'translate(-5px, -5px)',
  },
  '60%': {
    transform: 'translate(5px, 5px)',
  },
  '80%': {
    transform: 'translate(5px, -5px)',
  },
  '100%': {
    transform: 'translate(0)',
  },
});

const GlitchContainer = styled('div', {
  position: 'relative',
  color: '$text',
  fontSize: '5rem',
  '@sm': {
    fontSize: '4rem',
  },
  textTransform: 'uppercase',
  animation: 'glitch 1s infinite',

  '&::before, &::after': {
    content: 'attr(data-text)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    color: '$textHighlight',
  },

  '&::before': {
    left: '2px',
    textShadow: '-2px 0 #00fff9',
    animation: `${glitch} 1.5s infinite`,
    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
  },

  '&::after': {
    left: '-2px',
    textShadow: '-2px 0 #ff00c1',
    animation: `${glitch} 2s infinite`,
    clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
  },
});

export default GlitchEffect;