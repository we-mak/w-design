"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set colors to appearance types
 * @param colors colors array
 * @return appearance key - color value pairs object
 {
   'default': '#4a4a4a',
   'primary': '#fff'
 }
 */
exports.setColors = function (colors) {
    var result = {};
    var appearanceKeys = [
        "default",
        "primary",
        "warning",
        "danger",
        "success",
        "link"
    ];
    for (var i in appearanceKeys) {
        result[appearanceKeys[i]] = colors[i];
    }
    return result;
};
/**
 * getColorFromTheme
 * @param colors colors object from init or theme
 * @param color color key
 * @param theme color from values
 */
exports.getColorFromTheme = function (colors, color, theme) {
    return theme.colors ? theme.colors[color] : colors[color];
};
//# sourceMappingURL=themeUtils.js.map