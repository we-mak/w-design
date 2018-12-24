import { color } from "styled-system";
import styled from "styled-components";
import { fixSize } from "../../../common/fixSize";

export interface Props {
  /** xlarge(1280), large(960), medium(840), small(600), xsmall(480) */
  fixSize?: string;
}

export const ContainerWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.4rem;
  width: 100%;
  ${color};
  max-width: ${(props: Props) => props.fixSize && fixSize(props.fixSize)};
`;

ContainerWrap.displayName = "ContainerWrap";
