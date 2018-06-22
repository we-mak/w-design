"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("./theme");
var themeUtils_1 = require("../utils/themeUtils");
// themed colors
var N1 = theme_1.colors.N1, N3 = theme_1.colors.N3, N4 = theme_1.colors.N4, N90 = theme_1.colors.N90, B5 = theme_1.colors.B5, B40 = theme_1.colors.B40, B50 = theme_1.colors.B50, B60 = theme_1.colors.B60, B70 = theme_1.colors.B70, O10 = theme_1.colors.O10, O20 = theme_1.colors.O20, O30 = theme_1.colors.O30, O40 = theme_1.colors.O40, O50 = theme_1.colors.O50, R5 = theme_1.colors.R5, R20 = theme_1.colors.R20, R30 = theme_1.colors.R30, R40 = theme_1.colors.R40, R50 = theme_1.colors.R50, G5 = theme_1.colors.G5, G20 = theme_1.colors.G20, G30 = theme_1.colors.G30, G40 = theme_1.colors.G40, G50 = theme_1.colors.G50;
exports.background = themeUtils_1.setColors([N3, B50, O30, R30, G30]);
exports.backgroundHover = themeUtils_1.setColors([N4, B40, O20, R20, G20, N3]);
exports.backgroundActive = themeUtils_1.setColors([B5, B60, O40, R40, G40, B5]);
exports.backgroundFocus = themeUtils_1.setColors([B5, B60, O40, R40, G40, B5]);
exports.border = themeUtils_1.setColors([N3, B60, O40, R40, G40]);
exports.borderHover = themeUtils_1.setColors([N4, B50, O30, R30, G30]);
exports.borderActive = themeUtils_1.setColors([B5, B70, O50, R50, G50]);
exports.borderFocus = themeUtils_1.setColors([B5, B70, O50, R50, G50]);
exports.text = themeUtils_1.setColors([N90, N1, N1, N1, N1, B50]);
exports.boxShadow = themeUtils_1.setColors(["transparent", B5, O10, R5, G5, B50]);
exports.padding = {
    sm: "0.15rem 0.3rem",
    md: "0.35rem 0.4rem",
    lg: "0.45rem 0.6rem"
};
exports.height = {
    sm: "1.4rem",
    md: "1.8rem",
    lg: "2rem"
};
//# sourceMappingURL=themed.js.map