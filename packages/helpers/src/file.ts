/**
 * checkDataURL
 * Check if data input is base 64 data URL
 */

export function checkDataURL(str: string) {
  if (str === null) return false;
  const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;
  return !!str.match(regex);
}
