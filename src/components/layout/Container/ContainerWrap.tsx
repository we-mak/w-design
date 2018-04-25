import styled from "../../../utils/styled";
import fixSize from "../../../utils/fixSize";

export interface StyleProps {
  /** xlarge(1280), large(960), medium(840), small(600), xsmall(480) */
  fixSize?: string;
}

export const ContainerWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
  max-width: ${(props: StyleProps) =>
    props.fixSize ? fixSize(props.fixSize) : null};
`;
