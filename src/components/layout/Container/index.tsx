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
  MaxWidthProps,
  MinWidthProps
} from "styled-system";

import { GlobProps } from "../../../typings";

interface ContainerProps
  extends GlobProps,
    ColorProps,
    SpaceProps,
    DisplayProps,
    MaxWidthProps,
    MinWidthProps {}

const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${color};
  ${space};
  ${display};
  ${maxWidth};
  ${minWidth};
`;

Container.displayName = "Container";

export default Container;
