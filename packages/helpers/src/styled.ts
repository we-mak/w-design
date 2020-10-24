import { keyframes, css, CSSObject } from "styled-components";

/**
 * Keyframes
 */
export const spin = keyframes`
  100% {
    transform: rotate(360deg);
    }
`;

export const dashRotate = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1.6rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInOut = keyframes`
  0% {
    opacity: .1;
  }

  50% {
    opacity: .2;
  }

  100% {
    opacity: .1;
  }
`;

/**
 * Media query
 * Usage: Add mediaQ in styled component.

const FakeInput = styled.div`
  position: absolute;
  left: 8em;
  top: 4.5em;
  ${mediaQ.xl`width: 50%`};
`
*/
const screens = {
  xxl: 90,
  xl: 80,
  lg: 64,
  md: 48,
  sm: 32,
  xs: 24
};

export const mediaQ = Object.keys(screens).reduce((acc: any, key: string) => {
  acc[key] = (params: TemplateStringsArray | CSSObject) => css`
    @media (max-width: ${screens[key]}em) {
      ${css(params)}
    }
  `;
  return acc;
}, {});

/**
 * @function hex2Rgba
 * Convert hex color to rgba color
 * credit https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/#answer-11508164
 */
export const hex2Rgba = (hex: string, alpha?: number): string => {
  // Check bad hex
  // if (/^#[0-9A-F]{6}$/i.test(hex)) {
  //   throw new Error("not a valid Hex");
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
 * @function getElementSize
 * @param styleProperty
 * @param size
 */
export const getElementSize = (styleProperty: object, size?: "sm" | "md" | "lg") =>
  styleProperty[size || "md"];

/**
 * @function getFontSize
 * Call function to generate the font size from default values or theme values
 */
export const getFontSize = (elementSizeProps: "sm" | "md" | "lg", fontSizes: Array<string>) => {
  switch (elementSizeProps) {
    case "sm":
      return fontSizes[0];
    case "md":
      return fontSizes[1];
    case "lg":
      return fontSizes[2];
  }
};
