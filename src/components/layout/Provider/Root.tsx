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
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${colors.N90};
  }

  h5,
  h6 {
    color: ${colors.N80};
  }

  p {
    color: ${colors.N70};
    line-height: 1.5;
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
    &:focus {
      text-decoration: none;
    }
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: "Menlo, Courier, monospace";
  }

  code {
    color: ${colors.R20};
    background: ${colors.N1};
    padding: 0.1rem 0.15rem;
    line-height: 1.2;
  }
`;

Root.displayName = "Root";

export default Root;
