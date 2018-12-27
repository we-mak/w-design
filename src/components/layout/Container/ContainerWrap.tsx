import styled from "styled-components";
import Tag from "clean-tag";
import { color, space } from "styled-system";
import { maxScreen } from "../../../common/maxScreen";

export interface Props {
  /** xlarge(1280), large(960), medium(840), small(600), xsmall(480) */
  maxScreen?: string;
  color?: string;
  space?: number;
}

export const ContainerWrap = styled(Tag)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${color};
  ${maxScreen};
  ${space};
`;

ContainerWrap.displayName = "ContainerWrap";
