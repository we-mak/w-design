import { css } from "styled-components";

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

/**
 * Media query
 * Usage: Add mediaQ in styled component.
  e.g:
  const FakeInput = styled.div`
  position: absolute;
  left: 8em;
  top: 4.5em;
  ${mediaQ.xl`width: 50%`};
  `
*/
const screens = {
  xl: 1280,
  lg: 960,
  md: 840,
  sm: 600,
  xs: 480
};

export const mediaQ = Object.keys(screens).reduce((acc, key) => {
  // TODO: params String literal type
  acc[key] = (params: any) => css`
    @media (max-width: ${screens[key] / 16}em) {
      ${css(params)}
    }
  `;
  return acc;
}, {});

/**
 * credit https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/#answer-11508164
 */

export const hex2Rgba = (hex: string, alpha?: number): string => {
  // TODO: Fix with regex
  // throw Error with bad hex
  // if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
  // }

  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgba(${r}, ${g}, ${b})`;
  }
};

/**
 * @function getColor
 * Get color value from theme by using key name of color
 * result fallback to default initial value
 */
export const getColor = (key: string, colors: object) => colors[key];

/**
 * @function setColors
 * Set colors to appearance types
 * @param colors colors array
 * @return appearance key - color value pairs object
 * @example { 'default': '#4a4a4a', 'primary': '#fff' }
 */
export const setColor = (appearanceKeys: Array<string>, colors: Array<string>) => {
  let result = {};

  for (let i in appearanceKeys) {
    result[appearanceKeys[i]] = colors[i];
  }

  return result;
};

/**
 * @function getAppearanceColor
 */
export const getAppearanceColor = (appearance: string, colors: object) => colors[appearance];

//
export const getElementSize = (styleProperty: object, size?: "sm" | "md" | "lg") =>
  styleProperty[size || "md"];

/**
 * @function getFontSize
 */
export const getFontSize = (elementSizeProps: "sm" | "md" | "lg", fontSizes: Array<string>) => {
  // Call function to generate the font size
  // from default values or theme values
  const getFontSize = (fontSizesFromTheme: Array<string>) => {
    switch (elementSizeProps) {
      case "sm":
        return fontSizesFromTheme[0];
      case "md":
        return fontSizesFromTheme[1];
      case "lg":
        return fontSizesFromTheme[2];
    }
  };

  return getFontSize(fontSizes);
};
