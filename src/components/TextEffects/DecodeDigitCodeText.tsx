import { styled } from '@stitches/react';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const StyledDiv = styled('div', {
  padding: '10px 15px',
  margin: '15px',
  background: '#000',
  color: '#fff',
  textAlign: 'center',
  cursor: 'pointer',
  fontFamily: "'Share Tech Mono', monospace", // Use a monospace font
  overflow: 'hidden',
  wordBreak: 'break-all',
  maxWidth: '100%',
});

const DecodeDigitCodeText = ({ children, play = false }) => {
  const [text, setText] = useState(children);
  const textRef = useRef();

  useEffect(() => {
    if (!play) return;

    const arr1 = children.split('');
    const arr2 = arr1.map(() => randChar());

    const tl = gsap.timeline();
    let step = 0;

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
  }, [children, play]);

  return <StyledDiv ref={textRef}>{text}</StyledDiv>;
};

function randChar() {
  let c = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`';
  c = c[Math.floor(Math.random() * c.length)];
  return Math.random() > 0.5 ? c : c.toUpperCase();
}

export default DecodeDigitCodeText;