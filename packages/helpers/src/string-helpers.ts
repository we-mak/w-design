/**
 *****************
 * String helpers
 *****************
 */

/**
 * @function firstLetter
 * Return first letter from a string
 */
export const firstLetter = (str: string) => {
  const matches: RegExpMatchArray | null = str.match(/\b(\w)/g);
  return matches && matches.join("");
};

/**
 * @function removeAccentMarks
 * Remove accent marks for Latin characters
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
 * setUid
 * Set a local uid base on datetime
 */
export const setUid = (name: string) => {
  const now = +new Date();
  let index = 0;
  return `${name}-${now}-${++index}`;
};
