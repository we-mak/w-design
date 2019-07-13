import { createGlobalStyle } from "styled-components";
import theme from "../../../common/styleUtils/theme";
const colors = theme.colors;

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
export const GlobalStyle = createGlobalStyle`
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 20px;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-size: .8rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
}


h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.9rem;
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
