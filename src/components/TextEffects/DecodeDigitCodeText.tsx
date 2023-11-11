import { gsap } from 'gsap';
import { useEffect, useRef, useState, forwardRef } from 'react';
import { styled } from '../../styles';
import { CSS } from '@stitches/react';

const StyledDiv = styled('div', {
  padding: '10px 15px',
  // margin: '15px',
  background: '$backgroundLayer2',
  color: '$text',
  textAlign: 'center',
  cursor: 'pointer',
  fontFamily: "'Share Tech Mono', monospace", // Use a monospace font
  overflow: 'hidden',
  wordBreak: 'break-all',
  maxWidth: '100%',
});

type DestringDigitstringTextProps = {
  string: string;
  play?: boolean;
  css?: CSS
};

const DecodeDigitCodeText = forwardRef(({ string, play = false, css }: DestringDigitstringTextProps, ref) => {
  // console.log('string', string);
  const [text, setText] = useState(string);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!play) return;

    const arr1 = string.split('');
    const arr2 = arr1.map(() => randChar());

    const tl = gsap.timeline();
    let step = 0;

    // console.log('textRef.current', textRef.current);

    tl.fromTo(
      textRef.current,
      {
        innerHTML: arr2.join(''),
        color: '#000',
        background: '#bada55',
      },
      {
        duration: arr1.length / 20,
        ease: 'power4.in',
        delay: 0.1,
        color: '#fff',
        background: '#000',
        onUpdate: () => {
          const p = Math.floor(tl.progress() * arr1.length);
          if (step !== p) {
            step = p;
            arr1.forEach((char, i) => (arr2[i] = randChar()));
            const pt1 = arr1.join('').substring(p, 0);
            const pt2 = arr2.join('').substring(arr2.length - p, 0);
            setText(pt1 + pt2);
          }
        },
      }
    );
  }, [string, play]);

  return <StyledDiv css={{...css}} ref={ref || textRef}>{text}</StyledDiv>;
});

function randChar() {
  let c = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`';
  c = c[Math.floor(Math.random() * c.length)];
  return Math.random() > 0.5 ? c : c.toUpperCase();
}

export default DecodeDigitCodeText;