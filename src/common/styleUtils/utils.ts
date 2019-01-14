/**
 * @function hex2Rgba
 * Transforms hex color to rgba color
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
 * @param colors colors object data
 * @param key color key
 * @param theme color from values
 * @return color value
 */
export const getColor = (key: string, colors: object, theme?: any) =>
  theme.colors ? theme.colors[key] : colors[key];

/**
 * @function setColors
 * Set colors to appearance types
 * @param colors colors array
 * @return appearance key - color value pairs object
 * @example { 'default': '#4a4a4a', 'primary': '#fff' }
 */
export const setColor = (colors: Array<string>, theme?: any) => {
  let result = {};

  const appearanceKeys = [
    "default",
    "primary",
    "warning",
    "danger",
    "success",
    "link",
    "subtle",
    "help"
  ];

  for (let i in appearanceKeys) {
    result[appearanceKeys[i]] = theme ? theme.colors[i] : colors[i];
  }

  return result;
};

/**
 * @function getAppearanceColor
 * @param appearance appearance style
 * @param colors default initial colors
 * @param theme provided theme props
 * @returns color applies to each button appearance
 */
export const getAppearanceColor = (appearance: string, colors: object) => colors[appearance];

//
export const getElementSize = (styleProperty: object, size?: "sm" | "md" | "lg") =>
  styleProperty[size || "md"];

/**
 * @function getFontSize
 * @param elementSizeProps size props of element
 * @param fontSizes default initial font size values
 * @param themeFontSizes font size values from theme props
 * */
export const getFontSize = (
  elementSizeProps: "sm" | "md" | "lg",
  fontSizes: Array<string>,
  themeFontSizes?: Array<string>
) => {
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

  if (themeFontSizes) return getFontSize(themeFontSizes);

  return getFontSize(fontSizes);
};
