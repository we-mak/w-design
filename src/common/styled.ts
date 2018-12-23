import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

export interface ThemeInterface {
  fonts?: string;
  fontSizes?: string[];
  fontWeights?: {};
  lineHeights?: number[];
  space?: number[];
  breakpoints?: string[];
  radii?: string[];
  letterSpacings?: {};
  colors?: {};
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
