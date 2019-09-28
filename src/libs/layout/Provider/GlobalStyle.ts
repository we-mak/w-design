import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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
    color: ${(props: any) => props.theme.colors["N50"]};
  }

  h5,
  h6 {
    color: ${(props: any) => props.theme.colors["N60"]};
  }

  p {
    line-height: 1.5;
    margin-bottom: 0.5em;
    margin-top: 0;
    font-family: ${(props: any) => props.theme.fonts.normal};
    color: ${(props: any) => props.theme.colors["N70"]};
  }

  a {
    font-family: ${(props: any) => props.theme.fonts.normal};
    color: ${(props: any) => props.theme.colors["B50"]};
    outline: none;
    text-decoration: none;

    &:hover {
      color: ${(props: any) => props.theme.colors["B30"]};
    }

    &:focus,
    &:hover,
    &:active {
      text-decoration: underline;
    }
    &:focus,
    &:active {
      color: ${(props: any) => props.theme.colors["B60"]};
    }
    &:focus {
      text-decoration: none;
    }
  }

  small {
    font-size: 80%;
    font-weight: 400;
    color: ${(props: any) => props.theme.colors["N30"]};
  }

  blockquote {
    margin-left: 0;
    padding: 0.4rem 0.8rem;
    color: ${(props: any) => props.theme.colors["N30"]};
    p:last-child {
      margin-bottom: 0;
    }
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
