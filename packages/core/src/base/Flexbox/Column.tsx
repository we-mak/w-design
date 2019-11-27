import styled from "styled-components";
import {
  color,
  space,
  width,
  flex,
  order,
  alignSelf,
  display,
  ColorProps,
  SpaceProps,
  WidthProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
  DisplayProps
} from "styled-system";

export interface ColumnProps
  extends ColorProps,
    SpaceProps,
    WidthProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    DisplayProps {}

export const Column = styled.div<ColumnProps>`
  flex: none;
  max-width: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  ${color}
  ${space}
  ${width}
  ${flex}
  ${order}
  ${alignSelf}
  ${display}
`;

Column.displayName = "Column";
