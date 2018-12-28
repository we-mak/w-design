import styled from "styled-components";
import Tag from "clean-tag";
import { color, space } from "styled-system";
import maxScreen from "../../../styledExtends/maxScreen";

export const ContainerWrap = styled(Tag)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${color};
  ${maxScreen};
  ${space};
`;

ContainerWrap.displayName = "ContainerWrap";
