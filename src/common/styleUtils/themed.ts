import { colors } from "./theme";
import { setColors } from "./utils";
// default theme colors
const {
  N1,
  N2,
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
  G50,
  T20,
  T30,
  T40,
  T50,
  WHITE
} = colors;

// Background colors
export const bg = setColors([N3, B50, O30, R30, G30, WHITE, WHITE, T30]);
export const bgHover = setColors([N4, B40, O20, R20, G20, N3, N2, T20]);
export const bgActive = setColors([B5, B60, O40, R40, G40, B5, B5, T40]);
// Border colors
export const bordr = setColors([N3, B60, O40, R40, G40, "", "", T40]);
export const bordrHover = setColors([N4, B50, O30, R30, G30, "", "", T30]);
export const bordrActive = setColors([B5, B70, O50, R50, G50, "", "", T50]);
// Text
export const text = setColors([N90, N1, N1, N1, N1, B50, N90, N1]);
// Fake outline
export const boxShadow = setColors([
  "transparent",
  B5,
  O10,
  R5,
  G5,
  B50,
  B50,
  T50
]);

// Button, input padding style
export const padding = {
  sm: "0.15rem 0.3rem",
  md: "0.35rem 0.4rem",
  lg: "0.45rem 0.6rem"
};
// Button, input height
export const height = {
  sm: "1.4rem",
  md: "1.8rem",
  lg: "2rem"
};
