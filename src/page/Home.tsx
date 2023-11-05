import Box from "../components/Containers/Box";
import MainContentBox from "../components/Containers/MainContentBox";
import DecodeText from "../components/DecodeText";
import Header from "../components/Header";

const Home = (): JSX.Element => {
  return (
    <>
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
          <MainContentBox>
            <Box direction="column" justify="center">
              <Box
                direction="row"
                css={{
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
            </Box>
          </MainContentBox>
        </Box>
        <div>Down</div>
      </Box>
    </>
  );
};

export default Home;
