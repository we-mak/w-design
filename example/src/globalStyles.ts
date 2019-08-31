import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
[class^="ais-"] {
  font-size: 0.8rem;
}

.prism-code {
  overflow:scroll;
  -webkit-overflow-scrolling: touch;
}
`;
