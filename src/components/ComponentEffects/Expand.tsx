import { ReactNode } from 'react';
import { keyframes, styled } from '../../styles';

type AnimatedTextProps = {
  children: ReactNode;
};

const Expand = ({ children }: AnimatedTextProps) => {
  const Wrapper = styled('div', {
    variants: {
      animated: {
        true: {
          animation: `${trackingInExpand} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
        },
      },
    },
    animation: 'none',
  });

  return (
    <Wrapper animated={true}>
      {children}
    </Wrapper>
  );
};

export default Expand;

const trackingInExpand = keyframes({
  '0%': {
    letterSpacing: '-0.5em',
    opacity: 0,
  },
  '40%': {
    opacity: 0.6,
  },
  '100%': {
    opacity: 1,
  },
});