import { colors } from "./theme";
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

export const padding = {
  sm: "0.15rem 0.3rem",
  md: "0.35rem 0.4rem",
  lg: "0.45rem 0.6rem"
};

export const height = {
  sm: "1.4rem",
  md: "1.8rem",
  lg: "2rem"
};
