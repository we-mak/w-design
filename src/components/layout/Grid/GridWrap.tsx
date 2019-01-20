import styled from "styled-components";

export interface GridWrapProps {
  gapless?: boolean;
  oneline?: boolean;
}

export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.4rem;
  margin-right: -0.4rem;
  padding: 0.4rem;

  ${(props: GridWrapProps) =>
    /* set margin left and right, and child padding to 0*/
    props.gapless &&
    ` margin-left: 0 !important;
      margin-right: 0 !important;
      * {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
  `};

  ${(props: GridWrapProps) =>
    props.oneline &&
    `
      flex-wrap: nowrap !important;
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch;
  `};
`;

GridWrap.displayName = "GridWrap";
