/**
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
 * getElementSize
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
