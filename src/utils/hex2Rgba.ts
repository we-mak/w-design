/**
 * Converts a CSS hex color value to RGBA.
 * @param {string} hex - Expanded hexadecimal CSS color value.
 * @param {number} alpha - Alpha as a decimal.
 * @returns {string} RGBA CSS color value.
 */

const hex2Rgba = (hex: string, alpha?: number): string => {
  hex = hex.replace("#", "");

  const r = parseInt(
    hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16
  );
  const g = parseInt(
    hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16
  );
  const b = parseInt(
    hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16
  );

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgba(${r}, ${g}, ${b})`;
  }
};

export default hex2Rgba;
