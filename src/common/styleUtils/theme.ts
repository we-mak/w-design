import { colors } from "./colors";

export const fonts = {
  normal: "Helvetica, Arial, sans-serif",
  medium: "Helvetica, Arial, sans-serif",
  demiBold: "Helvetica, Arial, sans-serif"
};

export const fontSizes = [0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2].map(n => `${n}rem`);

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
export const breakpoints = [30, 37.5, 52.5, 60, 80, 90].map(n => `${n}rem`);

export const radii = [0, 0.1, 0.2, 0.3, 0.4].map(n => `${n}rem`);

export const letterSpacings = {
  normal: "normal",
  caps: "0.25rem"
};

export const shadows = [
  "none",
  `inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)`,
  `0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`,
  `0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)`,
  `0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)`,
  `0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12)`,
  `0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)`,
  `0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)`
];

export const transition = ["cubic-bezier(0.5, 0.045, 0.4, 1)"];

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
  colors,
  transition
};
