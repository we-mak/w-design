import styled from "../../../utils/styled";

export interface Props {
  noGap?: boolean;
  lineUp?: boolean;
}

const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.4rem;
  margin-right: -0.4rem;
  ${(props: Props) =>
    props.noGap &&
    ` margin-left: 0;
      margin-right: 0;
      * {
        padding-left: 0;
        padding-right: 0;
      }
  `};

  ${(props: Props) =>
    props.lineUp &&
    `
      flex-wrap: nowrap;
      overflow-x: auto;
  `};
`;

GridWrap.displayName = "GridWrap";

export default GridWrap;
