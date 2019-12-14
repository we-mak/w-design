import styled from "styled-components";
import {
  space,
  typography,
  color,
  border,
  background,
  position,
  shadow,
  SpaceProps,
  TypographyProps,
  ColorProps,
  BackgroundProps,
  PositionProps,
  ShadowProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps
} from "styled-system";
import { GlobProps } from "../common/props";

export interface BoxProps
  extends GlobProps,
    SpaceProps,
    TypographyProps,
    ColorProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    LayoutProps,
    FlexboxProps {}

const Box = styled.div<BoxProps>`
${space}
${color}
${typography}
${background}
${border}
${position}
${shadow}
${layout}
${flexbox}
`;

Box.displayName = "Box";

export default Box;
