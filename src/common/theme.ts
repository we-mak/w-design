import hex2Rgba from "../utils/hex2Rgba";
import { colors } from "./colors";

// breakpoint values
export const breakpoints = [24, 32, 48, 64, 80].map(n => n + "em");

export const fonts =
  '-apple-system, BlinkMacSystemFont, Helvetica, "Helvetica Neue", system-ui, sans-serif';

export const fontSizes = [0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2].map(
  n => n + "rem"
);

export const fontWeights = {
  normal: 400,
  strong: 500,
  bold: 700,
  xbold: 900
};

// for any scale, either array or objects will work
export const lineHeights = [1, 1.125, 1.25, 1.5];

export const letterSpacings = {
  normal: "normal",
  caps: "0.25em"
};

export const radii = [0, 0.1, 0.2, 0.3, 0.4].map(n => n + "rem");

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
export const space = [0, 4, 8, 16, 32, 64, 128];

export const shadows = [
  "none",
  `0 .2rem .5rem ${hex2Rgba(colors.N50, 0.5)}`,
  `inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)`
];

export default {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  space,
  breakpoints,
  radii,
  letterSpacings
};
