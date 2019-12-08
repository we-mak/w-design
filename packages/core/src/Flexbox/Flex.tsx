import styled from "styled-components";
import {
  space,
  justifyContent,
  flexWrap,
  flexDirection,
  alignItems,
  SpaceProps,
  JustifyContentProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps
} from "styled-system";
import { GlobProps } from "../../../types/typings";

export interface FlexProps
  extends GlobProps,
    SpaceProps,
    JustifyContentProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps {
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
  ${flexWrap}
  ${flexDirection}
  ${alignItems}

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

Flex.displayName = "Flex";
