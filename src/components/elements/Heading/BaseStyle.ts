import { fontWeight } from "styled-system";
import { css } from "../../../utils/styled";

const BaseStyle = css`
  display: block;
  line-height: 1.25;
  margin-bottom: 0.5em;
  margin-top: 0;
  font-weight: ${(props: any) => props.theme.fontWeights.strong};
  ${fontWeight};
`;

export default BaseStyle;
