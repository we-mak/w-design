import styled from "styled-components";
import Tag from "clean-tag";
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  alignSelf
} from "styled-system";

export const Column = styled(Tag)`
  flex: none;
  max-width: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  /* Custom props with styled-system*/
  ${space}
  ${width}
  ${flex}
  ${color}
  ${fontSize}
  ${order}
  ${alignSelf}
`;

Column.displayName = "Column";
