import styled from "styled-components";
import Tag from "clean-tag";
import {
  color,
  space,
  width,
  flex,
  order,
  alignSelf,
  display
} from "styled-system";

export const Column = styled(Tag)`
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
