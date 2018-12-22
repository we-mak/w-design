import { colors } from "../../../common/colors";

const ResetCss = `
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
  background: ${colors.WHITE};
  color: ${colors.N60};
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, "Helvetica Neue", system-ui, sans-serif;
  font-size: 0.8rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
}

a {
  font-family: Helvetica, "Helvetica Neue", system-ui, sans-serif;
}
`;

export default ResetCss;
