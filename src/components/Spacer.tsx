import { styled } from "../styles";

type SpacerProps = {
  height?: number;
};

const Spacer = ({height}: SpacerProps) => {
  return <StyledDiv css={{height: `${height}rem`}} />
}

const StyledDiv = styled("div", {
});

export default Spacer