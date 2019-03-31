/**
 * Pick random property from object
 */

export const randomProperty = (obj: object) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

/**
 * @function firstLetter - Retun first letter from a string
 */
export const firstLetter = (str: string) => {
  const matches: RegExpMatchArray | null = str.match(/\b(\w)/g);
  return matches && matches.join("");
};

/**
 * @function filterObject
 * filter out the object by key
 */

export const filterObject = (raw: object, removed: string[]) =>
  Object.keys(raw)
    .filter(key => !removed.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key];
      return obj;
    }, {});
