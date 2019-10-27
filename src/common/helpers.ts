///////////////// Object helpers ///////////////
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

/**
 * setUid
 * Set a local uid base on datetime
 */
export const setUid = (name: string) => {
  const now = +new Date();
  let index = 0;
  return `${name}-${now}-${++index}`;
};

//////////////////// Text helper ///////////////////////

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
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");

  return str;
};

/////// Style helpers ///////////
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
 * @function setColor
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
