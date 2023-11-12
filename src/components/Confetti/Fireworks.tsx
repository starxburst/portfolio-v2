import { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function getAnimationSettings(originXA: number, originXB: number) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2
    }
  };
}

type FireworksProps = {
  status: 'start' | 'pause' | 'stop';
};

const Fireworks = ({status}: FireworksProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    console.log("startAnimation");
    if (!intervalId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setIntervalId(setInterval(nextTickAnimation, 400) as any);
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setIntervalId(null as any);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setIntervalId(null as any);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    if (status === 'start') startAnimation();
    if (status === 'pause') pauseAnimation();
    if (status === 'stop') stopAnimation();
    return () => pauseAnimation();
  }, [status]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles as never} />
    </>
  );
};

export default Fireworks;
