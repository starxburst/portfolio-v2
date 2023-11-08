import InViewBox from "./ComponentEffects/InViewBox";
import Box from "./Containers/Box";
import DecodeDigitCodeText from "./TextEffects/DecodeDigitCodeText";
import HollowText from "./TextEffects/HollowText";

const WorkingExperience = (): JSX.Element => {
  return (
    <Box
      id="working-experience"
      direction="column"
      css={{ width: "100%" }}
      gap="none"
    >
      <Box
        padding="medium"
        direction="column"
        align="flex-start"
        css={{
          width: "80%",
          "@sm": {
            width: "100%",
          },
        }}
      >
        <InViewBox>
          <HollowText css={{ fontSize: "4rem" }}>Working Experience</HollowText>
        </InViewBox>
        <InViewBox x={0} y={100}>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
          <h1>Working Experience</h1>
        </InViewBox>
        <div>Working Experience</div>
        <div>Working Experience</div>
        <div>Working Experience</div>
        <div>Working Experience</div>
        <div>Working Experience</div>
        <div>Working Experience</div>
      </Box>
    </Box>
  );
};

export default WorkingExperience;
