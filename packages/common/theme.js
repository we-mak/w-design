"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hex2Rgba_1 = require("../utils/hex2Rgba");
var colors_1 = require("./colors");
// breakpoint values
exports.breakpoints = [24, 32, 48, 64, 80].map(function (n) { return n + "em"; });
exports.fonts = {
    0: "system-ui, sans-serif",
    sans: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    base: 'Roboto, "Helvetica Neue"'
};
exports.fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];
exports.fontWeights = {
    normal: 400,
    bold: 700,
    xbold: 900
};
// for any scale, either array or objects will work
exports.lineHeights = [1, 1.125, 1.25, 1.5];
exports.letterSpacings = {
    normal: "normal",
    caps: "0.25em"
};
// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
exports.space = [0, 4, 8, 16, 32, 64, 128];
exports.radii = [0, 2, 4];
exports.shadows = [
    "none",
    "0 .2rem .5rem " + hex2Rgba_1.default(colors_1.colors.N50, 0.5),
    "inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)"
];
exports.default = {
    fonts: exports.fonts,
    fontSizes: exports.fontSizes,
    fontWeights: exports.fontWeights,
    lineHeights: exports.lineHeights,
    colors: colors_1.colors,
    space: exports.space,
    breakpoints: exports.breakpoints,
    letterSpacings: exports.letterSpacings
};
//# sourceMappingURL=theme.js.map