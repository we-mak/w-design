import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

// export interface ThemeInterface {
//   primaryColor: string;
// }

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<{}>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
