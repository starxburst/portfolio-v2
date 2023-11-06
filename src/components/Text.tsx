import { CSS } from "@stitches/react";
import { styled } from "../styles";
import React, { forwardRef } from "react";

type TextProps = {
  children: React.ReactNode;
  css?: CSS;
} & React.HTMLAttributes<HTMLDivElement>;

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ children, css, ...rest }: TextProps, ref): JSX.Element => {
    return (
      <StyledDiv ref={ref} css={{ ...css }} {...rest}>
        {children}
      </StyledDiv>
    );
  }
);

export default Text;

const StyledDiv = styled("div", {});