import { useEffect, useState } from "react";
import Box from "../components/Containers/Box";
import Header from "../components/Header";
import SnakeGame from "../components/SnakeGame";
import DecodeText from "../components/TextEffects/DecodeText";
import GlitchEffectText2 from "../components/TextEffects/GlitchEffectText2";

const emojiGoal = 5;
const Home = (): JSX.Element => {
  const [collectedEmojis, setCollectedEmojis] = useState(0);
  const [displayCollectEmojis, setDisplayCollectEmojis] = useState(false);

  useEffect(() => {
    const displayCollectEmojisTimer = setTimeout(() => {
      setDisplayCollectEmojis(true);
    }, 2500);
    return () => {
      clearTimeout(displayCollectEmojisTimer);
    };
  }, []);

  return (
    <>
      <SnakeGame
        emojiGoal={emojiGoal}
        collectedEmojis={collectedEmojis}
        setCollectedEmojis={setCollectedEmojis}
      />
      <Box
        direction="column"
        style={{ width: "100%" }}
        css={{
          height: "100vh",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <Box direction="column" align="center">
          {/* <MainContentBox> */}
          <Box direction="column" justify="center" align="center" gap='xlarge'>
            <Box
              direction="row"
              css={{
                fontSize: "6rem",
                flexWrap: "wrap",
                width: "100%",
                gap: "10rem",
                "@sm": {
                  gap: "2rem",
                },
              }}
            >
              <DecodeText text="I" />
              <DecodeText text="am" />
              <DecodeText text="Eric" />
              <DecodeText text="Lam" />
            </Box>
            <GlitchEffectText2
              css={{
                fontSize: "3rem",
                whiteSpace: "wrap",
                "@sm": {
                  fontSize: "0.5rem",
                },
              }}
            >
              Full Stack Developer
            </GlitchEffectText2>
          </Box>
          {/* </MainContentBox> */}
        </Box>
            <div>d</div>
      </Box>
    </>
  );
};

export default Home;
