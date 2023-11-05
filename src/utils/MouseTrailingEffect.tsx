import React, { useRef, useEffect, useState } from "react";

// Custom hook for mouse dragging and position tracking
function useMouseDrag() {
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  function registerMousePosition({ clientX, clientY }) {
    lastMousePosition.current.x = clientX;
    lastMousePosition.current.y = clientY;
  }

  function startDrag() {
    setIsDragging(true);
  }

  function stopDrag() {
    setIsDragging(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", startDrag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("mousemove", registerMousePosition);

    return () => {
      document.removeEventListener("mousemove", registerMousePosition);
      document.removeEventListener("mousedown", startDrag);
      document.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  return { isDragging, lastMousePosition };
}

// Reusable component for mouse trailing effect
export function MouseTrailingEffect({ string }) {
  const trailRefs = useRef([]);
  const rAFIndex = useRef(0);
  const { isDragging, lastMousePosition } = useMouseDrag();

  function updateCollectedLettersPosition() {
    for (let i = 0; i < trailRefs.current.length; i++) {
      if (trailRefs.current[i].current) {
        const xpos = lastMousePosition.current.x + window.scrollX - trailRefs.current[i].current.offsetLeft;
        const ypos = lastMousePosition.current.y + window.scrollY - trailRefs.current[i].current.offsetTop;
        trailRefs.current[i].current.style.transform = `translate(${xpos}px, ${ypos}px)`;
      }
    }
  }

  useEffect(() => {
    function update() {
      if (true) {
        rAFIndex.current = requestAnimationFrame(update);
      }
      updateCollectedLettersPosition();
    }

    // cancel the existing rAF
    cancelAnimationFrame(rAFIndex.current);
    rAFIndex.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rAFIndex.current);
    };
  }, [isDragging]);

  // Create the refs for the div elements
  for (let i = 0; i < string.length; i++) {
    trailRefs.current[i] = React.createRef();
  }

  return [...string].map((char, index) => {
    const ease = index * 0.04;
    return (
      <div
      key={index}
        style={{ position: "absolute", transition: `transform ${ease}s`, left: 0, top: 0, fontSize: '2rem' }}
        ref={trailRefs.current[index]}
      >
        {char}
      </div>
    );
  });
}