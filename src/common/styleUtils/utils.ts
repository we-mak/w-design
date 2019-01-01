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
 * getColorFromTheme
 * @param colors colors object data
 * @param key color key
 * @param theme color from values
 */
export const getColorFromTheme = (colors: object, key: string, theme?: any) =>
  theme.colors ? theme.colors[key] : colors[key];

/**
 * Set colors to appearance types
 * @param colors colors array
 * @return appearance key - color value pairs object
 {
   'default': '#4a4a4a',
   'primary': '#fff'
 }
 */
export const setColors = (colors: Array<string>, appearanceKeys: string[]) => {
  let result = {};

  for (let i in appearanceKeys) {
    result[appearanceKeys[i]] = colors[i];
  }

  return result;
};
