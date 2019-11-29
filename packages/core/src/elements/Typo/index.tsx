import React from "react";
import styled from "styled-components";
import { color, margin, fontWeight, fontFamily } from "styled-system";
import { TypoProps } from "./types";
import CustomTag from "../CustomTag";

const WTypo = ({ tag, appearance, children, ...rest }: TypoProps) => (
  <CustomTag tag={tag ? tag : appearance} {...rest}>
    {children}
  </CustomTag>
);

const Typo = styled(WTypo)`
  font-weight: 700;
  font-family: ${(props: TypoProps) => props.theme.fonts.medium};
  ${color};
  ${margin};
  ${fontWeight};
  ${fontFamily};
  font-size: ${(props: TypoProps) => {
    const { fontSizes } = props.theme;

    switch (props.appearance) {
      case "h1":
        return `${fontSizes[6]} !important`;
      case "h2":
        return `${fontSizes[5]} !important`;
      case "h3":
        return `${fontSizes[4]} !important`;
      case "h4":
        return `${fontSizes[3]} !important`;
      case "h5":
        return `${fontSizes[2]} !important`;
      case "h6":
        return `${fontSizes[1]} !important`;
      default:
        return `${fontSizes[1]} !important`;
    }
  }};
`;

Typo.displayName = "Typo";

export default Typo;
