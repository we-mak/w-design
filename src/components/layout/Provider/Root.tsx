import styled from "styled-components";
import theme from "../../../common/styleUtils/theme";

const colors = theme.colors;

const Root = styled.div`
  font-family: ${(props: any) => props.theme.fonts.normal};

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
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${colors.N50};
  }

  h5,
  h6 {
    color: ${colors.N60};
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
