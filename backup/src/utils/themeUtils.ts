/**
 * Set colors to appearance types
 * @param colors colors array
 * @return appearance key - color value pairs object
 {
   'default': '#4a4a4a',
   'primary': '#fff'
 }
 */
export const setColors = (colors: Array<string>) => {
  let result = {};

  const appearanceKeys = [
    "default",
    "primary",
    "warning",
    "danger",
    "success",
    "link"
  ];

  for (let i in appearanceKeys) {
    result[appearanceKeys[i]] = colors[i];
  }

  return result;
};

/**
 * getColorFromTheme
 * @param colors colors object from init or theme
 * @param color color key
 * @param theme color from values
 */
export const getColorFromTheme = (colors: object, color: string, theme?: any) =>
  theme.colors ? theme.colors[color] : colors[color];
