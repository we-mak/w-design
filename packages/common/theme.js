"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hex2Rgba_1 = require("../utils/hex2Rgba");
var colors_1 = require("./colors");
// breakpoint values
exports.breakpoints = [24, 32, 48, 64, 80].map(function (n) { return n + "em"; });
exports.fonts = '-apple-system, BlinkMacSystemFont, Helvetica, "Helvetica Neue", system-ui, sans-serif';
exports.fontSizes = [0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2].map(function (n) { return n + "rem"; });
exports.fontWeights = {
    normal: 400,
    strong: 500,
    bold: 700,
    xbold: 900
};
// for any scale, either array or objects will work
exports.lineHeights = [1, 1.125, 1.25, 1.5];
exports.letterSpacings = {
    normal: "normal",
    caps: "0.25em"
};
exports.radii = [0, 0.1, 0.2, 0.3, 0.4].map(function (n) { return n + "rem"; });
// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
exports.space = [0, 4, 8, 16, 32, 64, 128];
exports.shadows = [
    "none",
    "0 .2rem .5rem " + hex2Rgba_1.default(colors_1.colors.N50, 0.5),
    "inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)"
];
var colors_2 = require("./colors");
exports.colors = colors_2.colors;
exports.default = {
    fonts: exports.fonts,
    fontSizes: exports.fontSizes,
    fontWeights: exports.fontWeights,
    lineHeights: exports.lineHeights,
    space: exports.space,
    breakpoints: exports.breakpoints,
    radii: exports.radii,
    letterSpacings: exports.letterSpacings,
    colors: colors_1.colors
};
//# sourceMappingURL=theme.js.map