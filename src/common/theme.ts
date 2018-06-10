import hex2Rgba from "../utils/hex2Rgba";
import { colors } from "./colors";
import { setColors } from "../utils/themeUtils";
// themed colors
const {
  N1,
  N3,
  N4,
  N90,
  B5,
  B40,
  B50,
  B60,
  B70,
  O10,
  O20,
  O30,
  O40,
  O50,
  R5,
  R20,
  R30,
  R40,
  R50,
  G5,
  G20,
  G30,
  G40,
  G50
} = colors;

export const background = setColors([N3, B50, O30, R30, G30]);
export const backgroundHover = setColors([N4, B40, O20, R20, G20, N3]);
export const backgroundActive = setColors([B5, B60, O40, R40, G40, B5]);
export const backgroundFocus = setColors([B5, B60, O40, R40, G40, B5]);

export const border = setColors([N3, B60, O40, R40, G40]);
export const borderHover = setColors([N4, B50, O30, R30, G30]);
export const borderActive = setColors([B5, B70, O50, R50, G50]);
export const borderFocus = setColors([B5, B70, O50, R50, G50]);

export const text = setColors([N90, N1, N1, N1, N1, B50]);
export const boxShadow = setColors(["transparent", B5, O10, R5, G5, B50]);

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
  space,
  breakpoints,
  radii,
  letterSpacings,
  colors,
  // themed color
  background,
  backgroundHover,
  backgroundActive,
  backgroundFocus,
  border,
  borderHover,
  borderActive,
  borderFocus,
  text,
  boxShadow
};
