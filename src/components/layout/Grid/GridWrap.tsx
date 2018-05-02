import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from "styled-system";
import styled from "../../../utils/styled";

export interface Props {
  gapless?: boolean;
  oneline?: boolean;
}

export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: -0.4rem;
  margin-right: -0.4rem;

  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}

  ${(props: Props) =>
    /* set margin left and right, and child padding to 0*/
    props.gapless &&
    ` margin-left: 0 !important;
      margin-right: 0 !important;
      * {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
  `};

  ${(props: Props) =>
    props.oneline &&
    `
      flex-wrap: nowrap !important;
      overflow-x: auto !important;
  `};
`;

GridWrap.displayName = "GridWrap";
