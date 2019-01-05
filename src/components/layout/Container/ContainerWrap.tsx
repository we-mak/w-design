import styled from "styled-components";
import Tag from "clean-tag";
import { color, space, display, maxWidth, minWidth } from "styled-system";

export const ContainerWrap = styled(Tag)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${color};
  ${space};
  ${display};
  ${maxWidth};
  ${minWidth};
`;

ContainerWrap.displayName = "ContainerWrap";
