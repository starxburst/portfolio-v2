import { css, styled } from "../../styles";

const HollowText = styled("div", {
  ...css({
    "-webkit-text-stroke": "1px $colors$text !important",
    "color": "$textContrast",
  }),
});

export default HollowText;