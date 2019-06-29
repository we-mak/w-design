import styled from "styled-components";
import { space } from "styled-system";

export interface FlexProps {
  gapless?: boolean;
  oneline?: boolean;
}

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.4rem;
  margin-right: -0.4rem;
  padding: 0.4rem;
  ${space};

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
