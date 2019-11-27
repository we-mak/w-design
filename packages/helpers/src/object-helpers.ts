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
export const getValFromObjKey = (key: string, targetObject: object) =>
  targetObject[key];

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
