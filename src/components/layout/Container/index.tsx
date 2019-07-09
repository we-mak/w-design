/**
 * Container
 *
 * Wrapper layout component contains columns layout
 */
import styled from "styled-components";
import {
  color,
  space,
  display,
  maxWidth,
  minWidth,
  ColorProps,
  SpaceProps,
  DisplayProps,
  WidthProps
} from "styled-system";

import { GlobProps } from "../../../typings";

interface ContainerProps extends GlobProps, ColorProps, SpaceProps, DisplayProps, WidthProps {}

const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${color};
  ${space};
  ${display};
  ${maxWidth};
  ${minWidth};
  font-family: ${props => props.theme.fonts.normal};
`;

Container.displayName = "Container";

export default Container;
