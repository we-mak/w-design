import hex2Rgba from "./hex2Rgba";
import { colors } from "./colors";

export const fonts =
  '-apple-system, BlinkMacSystemFont, Helvetica, "Helvetica Neue", system-ui, sans-serif';

export const fontSizes = [0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2].map(
  n => `${n}rem`
);

export const fontWeights = {
  normal: 400,
  strong: 500,
  bold: 700,
  xbold: 900
};

// for any scale, either array or objects will work
export const lineHeights = [1, 1.125, 1.25, 1.5];

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
export const space = [0, 4, 8, 16, 32, 64, 128];

// breakpoint values
export const breakpoints = [20, 30, 37.5, 52.5, 60, 80, 90].map(n => `${n}rem`);

export const radii = [0, 0.1, 0.2, 0.3, 0.4].map(n => `${n}rem`);

export const letterSpacings = {
  normal: "normal",
  caps: "0.25rem"
};

export const shadows = [
  "none",
  `0 .2rem .5rem ${hex2Rgba(colors.N50, 0.5)}`,
  `inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)`
];

export const screens = {
  xxs: 320,
  xs: 480,
  sm: 600,
  md: 840,
  lg: 960,
  xl: 1280,
  xxl: 1440
};

export const mediaQueries = [
  `(max-width: 20rem)`,
  `(min-width: 20rem) and (max-width: 30rem)`,
  `(min-width: 30rem) and (max-width: 37.5rem)`,
  `(min-width: 37.5rem) and (max-width: 52.5rem)`,
  `(min-width: 52.5rem) and (max-width: 60rem)`,
  `(min-width: 60rem) and (max-width: 80rem)`,
  `(min-width: 80rem)`
].map(n => `@media screen and ${n}`);

export { colors } from "./colors";

export default {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  breakpoints,
  radii,
  letterSpacings,
  shadows,
  screens,
  mediaQueries,
  colors
};
