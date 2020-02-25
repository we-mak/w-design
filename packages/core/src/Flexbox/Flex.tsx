import styled from "styled-components";
import { space, justifyContent, flexbox, SpaceProps, FlexboxProps } from "styled-system";
import { GlobProps } from "../common/props";

export interface FlexProps extends GlobProps, SpaceProps, FlexboxProps {
  gapless?: boolean;
  oneline?: boolean;
  children?: React.ReactChild | React.ReactChild[];
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.4rem;
  margin-right: -0.4rem;
  padding: 0.4rem;
  ${space}
  ${justifyContent}
  ${flexbox}

  ${(props: FlexProps) =>
    /* set margin left and right, and child padding to 0*/
    props.gapless &&
    ` margin-left: 0 !important;
      margin-right: 0 !important;
      * {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
  `};

  ${(props: FlexProps) =>
    props.oneline &&
    `
      flex-wrap: nowrap !important;
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch;
  `};
`;
