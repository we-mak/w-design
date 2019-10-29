/**
 *****************
 * Object helpers
 *****************
 */

/**
 * randomProperty
 * Pick random property from object
 */
export const randomProperty = (obj: object) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

/**
 * getValFromObjKey
 * Get value from object key
 */
export const getValFromObjKey = (key: string, targetObject: object) => targetObject[key];

/**
 * filterObject
 * filter out the object by key
 */
export const filterObject = (origin: object, removed: string[]) =>
  Object.keys(origin)
    .filter(key => !removed.includes(key))
    .reduce((obj, key) => {
      obj[key] = origin[key];
      return obj;
    }, {});

// /**
//  * mergeTwoArraysToObject
//  * Combine keys array and values array to an object
//  * @example { 'default': '#4a4a4a', 'primary': '#fff' }
//  */
// export const mergeTwoArraysToObject = (keys: Array<string>, values: Array<string>): object => {
//   let result = {};
//   for (let i in keys) {
//     result[keys[i]] = values[i];
//   }
//   return result;
// };

/**
 * setUid
 * Set a local uid base on datetime
 */
export const setUid = (name: string) => {
  const now = +new Date();
  let index = 0;
  return `${name}-${now}-${++index}`;
};

/**
 *****************
 * Text helper
 *****************
 */

/**
 * @function firstLetter - Retun first letter from a string
 */
export const firstLetter = (str: string) => {
  const matches: RegExpMatchArray | null = str.match(/\b(\w)/g);
  return matches && matches.join("");
};

/**
 *
 * @param str target to string to remove accents
 */
export const removeAccentMarks = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

/**
 *****************
 * Style helpers
 *****************
 */

// credit https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/#answer-11508164
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
