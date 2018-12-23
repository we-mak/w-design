import styled from "styled-components";
import theme from "../../../common/theme";

const colors = theme.colors;

const Root = styled.div`
  font-family: ${(props: any) => props.theme.fonts};

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.8rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
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

  small {
    font-size: 80%;
    font-weight: 400;
    color: ${colors.N30};
  }

  blockquote {
    margin-left: 0;
    padding: 0.4rem 0.8rem;
    color: ${colors.N30};
    p:last-child {
      margin-bottom: 0;
    }
  }
`;

Root.displayName = "Root";

export default Root;
