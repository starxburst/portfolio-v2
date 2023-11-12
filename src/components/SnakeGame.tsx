import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import React, { useEffect, useState } from "react";
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use";
import Fireworks from "./Confetti/Fireworks";
import OrbitingDivs from "./TextEffects/OrbitText";
import { emojis } from "../constants/emojis";
import useResponsive from '../hooks/useResponsive';
import { keyframes, styled } from "../styles";
import { MouseTrailingEffect } from "./ComponentEffects/MouseTrailingEffect";
import { scrollToComponent } from '../utils/scroll-helpers';
import rainbowCat from '../assets/rainbow_cat.gif';

type SnakeGameProps = {
  emojiGoal: number;
  collectedEmojis: number;
  setCollectedEmojis: React.Dispatch<React.SetStateAction<number>>;
};

const SnakeGame = ({
  emojiGoal,
  collectedEmojis,
  setCollectedEmojis,
}: SnakeGameProps): JSX.Element => {
  const { width, height } = useWindowSize();
  const [startSpawnRandomEmoji, setStartSpawnRandomEmoji] = useState(false);
  const [displayConfetti, setDisplayConfetti] = useState(false);
  const [displayOrbitingDivs, setDisplayOrbitingDivs] = useState(false);
  const [displayTrailingEffect, setDisplayTrailingEffect] = useState(false);
  const [fireworksStatus, setFireworksStatus] = useState<
    "start" | "pause" | "stop"
  >("pause");
  const [possibleEmojis, setPossibleEmojis] = useState(
    emojis.slice(0, emojiGoal)
  );
  // const [collectedEmojis, setCollectedEmojis] = useState(0);
  const { isDesktop } = useResponsive();
  const getRandomEmojis = (number: number) => {
    const shuffled = possibleEmojis.sort(() => 0.5 - Math.random());
    const pickedEmoji = shuffled.slice(0, number);
    removePickedEmoji(pickedEmoji);

    return pickedEmoji.join(" ");
  };
  const removePickedEmoji = (emoji: string[]) => {
    // console.log("remove emoji", emoji);
    setPossibleEmojis(
      possibleEmojis.filter((e) => {
        return !emoji.includes(e);
      })
    );
  };

  const lockBodyScroll = () => {
    const root = document.querySelector('#root')
    if (!root || localStorage.getItem("playedSnakeGame")) return
    disableBodyScroll(root)
  }

  const getRandomWindowPosition = (axis: "x" | "y"): number => {
    const margin = 50;
    if (axis === "x") {
      return margin + Math.random() * (window.innerWidth - 2 * margin);
    } else {
      return margin + Math.random() * (window.innerHeight - 2 * margin);
    }
  };

  const [tail, setTail] = useState("");
  const [emoji, setEmoji] = useState({
    char: "",
    x: getRandomWindowPosition("x"),
    y: getRandomWindowPosition("y"),
  });

  useEffect(() => {
    lockBodyScroll();
    if (isDesktop) setDisplayTrailingEffect(true);
    // setTail(getRandomEmojis(3));
    setEmoji({
      char: getRandomEmojis(1),
      x: getRandomWindowPosition("x"),
      y: getRandomWindowPosition("y"),
    });
    const startSpawnRandomEmojiTimer = setTimeout(() => {
      setStartSpawnRandomEmoji(true);
    }, 2500); // Stop the confetti after 10 seconds
    return () => {
      clearTimeout(startSpawnRandomEmojiTimer);
    };
  }, []);
  const [spawned, setSpawned] = useState(false);

  const addBounsEmoji = async () => {
    const bounsEmojis = emojis
      .sort(() => 0.5 - Math.random())
      .slice(emojiGoal, 80);
    for (const emoji of bounsEmojis) {
      setTail((prev) => `${prev + emoji}`);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  };

  useEffect(() => {
    // console.log(
    //   "collected emojis",
    //   collectedEmojis,
    //   "/",
    //   possibleEmojis.length
    // );
    if (collectedEmojis === emojiGoal) {
      addBounsEmoji();
      setDisplayTrailingEffect(true);
      setDisplayOrbitingDivs(true);
      const scrollToViewTimer = setTimeout(() => {
        scrollToComponent('introduction');
      }, 3000); // Stop the confetti after 10 seconds
      const orbitingDivsTimer = setTimeout(() => {
        setDisplayOrbitingDivs(false);
      }, 15000); // Stop the confetti after 10 seconds
      const displayConfettiTimer = setTimeout(() => {
        setDisplayConfetti(true);
      }, 3000); // Stop the confetti after 10 seconds
      const removeConfettiTimer = setTimeout(() => {
        setDisplayConfetti(false);
      }, 15000); // Stop the confetti after 10 seconds
      setFireworksStatus("start");
      const removeFireworksTimer = setTimeout(() => {
        setFireworksStatus("stop");
      }, 15000); // Stop the confetti after 10 seconds
      const displayTrailingEffectTimer = setTimeout(() => {
        setDisplayTrailingEffect(false);
      }, 15000); // Stop the confetti after 10 seconds
      localStorage.setItem("playedSnakeGame", 'true');
      clearAllBodyScrollLocks();
      return () => {
        clearTimeout(displayConfettiTimer);
        clearTimeout(removeConfettiTimer);
        clearTimeout(removeFireworksTimer);
        clearTimeout(orbitingDivsTimer);
        clearTimeout(displayTrailingEffectTimer);
        clearTimeout(scrollToViewTimer);
        setFireworksStatus("stop");
      };
    }
  }, [collectedEmojis, possibleEmojis.length]);

  function spawnEmoji() {
    setCollectedEmojis(() => collectedEmojis + 1);
    setTail(`${tail + emoji.char}`);
    setEmoji({
      char: getRandomEmojis(1),
      x: getRandomWindowPosition("x"),
      y: getRandomWindowPosition("y"),
    });
    setSpawned(true);
    setTimeout(() => setSpawned(false), 2000); // Reset the spawned state after the duration of the animation
  }

  const moveUpAndDown = keyframes({
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
  });

  const shake = keyframes({
    "0%": {
      transform: "translateX(0)",
    },
    "25%": {
      transform: "translateX(-10px)",
    },
    "50%": {
      transform: "translateX(0)",
    },
    "75%": {
      transform: "translateX(10px)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  });

  const jump = keyframes({
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-30px)",
    },
  });

  const spin = keyframes({
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  });

  const shock = keyframes({
    "0%, 100%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.2)",
    },
  });

  const spawn = keyframes({
    "0%": {
      transform: "scale(0)",
      opacity: 0,
    },
    "50%": {
      transform: "scale(2)",
      opacity: 0.5,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  });

  const animations = [moveUpAndDown, shake, jump, spin, shock];
  const animation = animations[Math.floor(Math.random() * animations.length)];

  const RandomEmoji = styled("div", {
    position: "fixed",
    left: `${emoji.x}px`,
    top: `${emoji.y}px`,
    fontSize: "2rem",
    cursor: "pointer",
    zIndex: "$randomEmoji",
    animation: spawned
      ? `${spawn} 0.5s, ${animation} 1s infinite 0.5s` // Add a delay to the start of the random animation
      : `${animation} 1s infinite`,
    willChange: "transform, opacity",
  });

  return (
    <>
      {displayConfetti && (
        <Confetti style={{ position: "fixed" }} width={width} height={height} />
      )}
      <Fireworks status={fireworksStatus} />
      {startSpawnRandomEmoji && (
        <RandomEmoji onClick={spawnEmoji}>{emoji.char}</RandomEmoji>
      )}
      {(displayTrailingEffect && isDesktop) && <MouseTrailingEffect string={tail} />}
      {displayOrbitingDivs && (
        <OrbitingDivs>
          <OrbitImage src={rainbowCat} />
          <OrbitImage src={rainbowCat} />
          <OrbitImage src={rainbowCat} />
          <OrbitImage src={rainbowCat} />
          <OrbitImage src={rainbowCat} />
          <OrbitImage src={rainbowCat} />
        </OrbitingDivs>
      )}
    </>
  );
};

export default SnakeGame;

const OrbitImage = styled("img", {
  width: "30px",
  height: "30px",
});
