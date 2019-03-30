import styled from "styled-components";
import theme from "../../../common/styleUtils/theme";

const colors = theme.colors;

const Root = styled.div`
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
    font-family: ${(props: any) => props.theme.fonts.medium};
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
    font-family: ${(props: any) => props.theme.fonts.normal};
  }

  a {
    font-family: ${(props: any) => props.theme.fonts.normal};
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

  table {
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    width: 100%;
  }
  th {
    border-bottom: 0.05rem solid ${props => props.theme.colors["N5"]};
    padding: 0.6rem 0.4rem;
    border-bottom-width: 0.1rem;
  }
  td {
    border-bottom: 0.05rem solid ${props => props.theme.colors["N2"]};
    padding: 0.6rem 0.4rem;
  }
`;

Root.displayName = "Root";

export default Root;
