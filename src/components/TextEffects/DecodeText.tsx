import React, { useEffect, useState } from 'react';
import { styled } from '../../styles';

type TextAnimationProps = {
  char: string;
};

const TextAnimationContainer = styled('div', {
  display: 'inline-block',
  position: 'relative',
  color: 'transparent',
  textTransform: 'uppercase',

  '&:before': {
    content: '""',
    color: '$text',
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: '$text',
    width: 0,
    height: '1.2em',
    transform: 'translate(-50%, -55%)',
  },

  variants: {
    state: {
      0: {},
      1: {
        '&:before': {
          width: '1px',
        },
      },
      2: {
        '&:before': {
          width: '0.9em',
        },
      },
      3: {
        color: '$text',
        '&:before': {
          width: 0,
        },
      },
    },
  },
});

const DecodeTextContainer = styled('div', {
  // width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '1rem',
  '@sm': {
    flexWrap: 'nowrap',
  },
});

const TextAnimation = ({ char }: TextAnimationProps) => {
  const [state, setState] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const delay = Math.round(Math.random() * (1000 - 300)) + 50; // Adjust the range here
    const timer1 = setTimeout(() => setState(1), delay);
    const timer2 = setTimeout(() => setState(2), delay * 2);
    const timer3 = setTimeout(() => setState(3), delay * 3);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <TextAnimationContainer state={state}>
      {char}
    </TextAnimationContainer>
  );
};

type DecodeTextProps = {
  text: string;
};

const DecodeText = ({ text }: DecodeTextProps) => {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    // const timer = setInterval(() => {
    //   // Refresh the component every 10 seconds
    //   setKey(Math.random());
    // }, 10000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <DecodeTextContainer key={key} css={{
      fontWeight: 600,
    }}>
      {text.split('').map((char, index) => (
        <TextAnimation key={index} char={char} />
      ))}
    </DecodeTextContainer>
  );
};

export default DecodeText;