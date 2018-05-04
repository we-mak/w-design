import styled from "../../../utils/styled";
import { colors } from "../../../common/colors";

export const Root = styled.div`
  font-family: ${(props: any) => props.theme.fonts};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.N90};
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  a {
    color: ${colors.B50};
    outline: none;
    text-decoration: none;

    &:hover {
      color: ${colors.B30};
    }

    &:focus,
    &:hover,
    &:active {
      text-decoration: underline;
    }
    &:focus,
    &:active {
      color: ${colors.B60};
    }
  }
`;

Root.displayName = "Root";

export default Root;
