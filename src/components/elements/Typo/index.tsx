import React from "react";
import styled from "styled-components";
import { color } from "styled-system";
import { TypoProps } from "./types";
import { CustomTag } from "../../../index";

const WTypo = ({ tag, appearance, children, ...rest }: TypoProps) => (
  <CustomTag customHTMLtag={tag ? tag : appearance} {...rest}>
    {children}
  </CustomTag>
);

const Typo = styled(WTypo)`
  font-weight: 500;
  font-family: ${(props: any) => props.theme.fonts.medium};
  ${color};
  font-size: ${(props: any) => {
    const { fontSizes } = props.theme;

    switch (props.appearance) {
      case "h1":
        return fontSizes[6];
      case "h2":
        return fontSizes[5];
      case "h3":
        return fontSizes[4];
      case "h4":
        return fontSizes[3];
      case "h5":
        return fontSizes[2];
      case "h6":
        return fontSizes[1];
      default:
        return fontSizes[1];
    }
  }};
`;

Typo.displayName = "Typo";

export default Typo;
