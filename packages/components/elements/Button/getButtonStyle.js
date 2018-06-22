"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = require("../../../utils/styled");
var themeUtils_1 = require("../../../utils/themeUtils");
var themed_1 = require("../../../common/themed");
var theme_1 = require("../../../common/theme");
var Spinner_1 = require("../Spinner/Spinner");
/**
 * getAppearanceProps
 * @param appearance appearance style
 * @param colors init colors
 * @param themeColors get colors from provided theme props
 * @returns style applies to each button appearance
 */
var getAppearanceProps = function (appearance, colors, themeColors) { return (themeColors ? themeColors[appearance] : colors[appearance]); };
var getFontSizeProps = function (buttonSizes, fontSizes, themeFontSizes) {
    var getTheme = function (theme) {
        switch (buttonSizes) {
            case "sm":
                return theme[0];
            case "md":
                return theme[1];
            case "lg":
                return theme[2];
        }
    };
    if (themeFontSizes)
        return getTheme(themeFontSizes);
    return getTheme(fontSizes);
};
var getSize = function (styleProperty, buttonSize) {
    return styleProperty[buttonSize];
};
/** Apply style to each appearance when loading props is true */
var getLoadingState = function (props) {
    var isLoading = props.isLoading, appearance = props.appearance, theme = props.theme;
    if (isLoading) {
        if (appearance === "default" || appearance === "link") {
            return Spinner_1.SpinnerStyle;
        }
        return styled_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", ";\n      &::after {\n        border-color: ", ";\n        border-right-color: transparent;\n        border-top-color: transparent;\n      }\n    "], ["\n      ", ";\n      &::after {\n        border-color: ", ";\n        border-right-color: transparent;\n        border-top-color: transparent;\n      }\n    "])), Spinner_1.SpinnerStyle, themeUtils_1.getColorFromTheme(theme_1.colors, "WHITE", theme));
    }
    return;
};
var getSelected = function (props) {
    var appearance = props.appearance, isSelected = props.isSelected, theme = props.theme;
    if (isSelected) {
        if (appearance === "default" ||
            appearance === "link" ||
            appearance === "primary") {
            return styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background: ", ";\n        border-color: ", ";\n        color: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          background: ", ";\n          border-color: ", ";\n          color: ", ";\n          outline: none;\n          box-shadow: none;\n        }\n      "], ["\n        background: ", ";\n        border-color: ", ";\n        color: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          background: ", ";\n          border-color: ", ";\n          color: ", ";\n          outline: none;\n          box-shadow: none;\n        }\n      "])), themeUtils_1.getColorFromTheme(theme_1.colors, "B70", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "B50", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "N1", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "B70", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "B50", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "N1", theme));
        }
        if (appearance === "danger") {
            return styled_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        border-color: ", ";\n        background: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          box-shadow: none;\n          border-color: ", ";\n          background: ", ";\n        }\n      "], ["\n        border-color: ", ";\n        background: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          box-shadow: none;\n          border-color: ", ";\n          background: ", ";\n        }\n      "])), themeUtils_1.getColorFromTheme(theme_1.colors, "R40", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "R30", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "R40", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "R30", theme));
        }
        if (appearance === "warning") {
            return styled_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        border-color: ", ";\n        background: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          box-shadow: none;\n          border-color: ", ";\n          background: ", ";\n        }\n      "], ["\n        border-color: ", ";\n        background: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          box-shadow: none;\n          border-color: ", ";\n          background: ", ";\n        }\n      "])), themeUtils_1.getColorFromTheme(theme_1.colors, "O50", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "O40", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "O50", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "O40", theme));
        }
    }
    return;
};
/**
 * getButtonStyle
 * Resolves styles based on props
 * @param props button properties
 */
exports.getButtonStyle = function (props) {
    var theme = props.theme, appearance = props.appearance, elementSize = props.elementSize, fluid = props.fluid;
    /** Button appearance style using themed*/
    // background
    var bgDefault = getAppearanceProps(appearance, themed_1.background, theme.background);
    var bgHover = getAppearanceProps(appearance, themed_1.backgroundHover, theme.backgroundHover);
    var bgActive = getAppearanceProps(appearance, themed_1.backgroundActive, theme.backgroundActive);
    var bgFocus = getAppearanceProps(appearance, themed_1.backgroundFocus, theme.backgroundFocus);
    // border
    var borderDefault = getAppearanceProps(appearance, themed_1.border, theme.border);
    var bdHover = getAppearanceProps(appearance, themed_1.borderHover, theme.borderHover);
    var bdActive = getAppearanceProps(appearance, themed_1.borderActive, theme.borderActive);
    var bdFocus = getAppearanceProps(appearance, themed_1.borderFocus, theme.borderFocus);
    var color = getAppearanceProps(appearance, themed_1.text, theme.text);
    var boxShadowColor = getAppearanceProps(appearance, themed_1.boxShadow, theme.boxShadow);
    /** Variable styles*/
    var fontSizeStyle = getFontSizeProps(elementSize, theme_1.fontSizes, theme.fontSizes);
    var paddingStyle = getSize(themed_1.padding, elementSize);
    var heightStyle = getSize(themed_1.height, elementSize);
    var width;
    if (fluid)
        width = "100%";
    var loadingStyle = getLoadingState(props);
    var selectedStyle = getSelected(props);
    return styled_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    cursor: pointer;\n    outline: 0;\n    border-radius: ", ";\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.2s ease;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: ", ";\n    border: 0.05rem solid;\n    ", ";\n\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    box-shadow: 0 0 0 0.1rem var(--box-shadow-color);\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:active,\n    &:focus {\n      --box-shadow-color: ", ";\n    }\n\n    &:active {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:disabled,\n    &[disabled] {\n      cursor: not-allowed;\n      color: ", " !important;\n      background: ", " !important;\n      border: none;\n    }\n\n    font-size: ", ";\n    padding: ", ";\n    height: ", ";\n\n    ", ";\n    ", ";\n  "], ["\n    cursor: pointer;\n    outline: 0;\n    border-radius: ", ";\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.2s ease;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: ", ";\n    border: 0.05rem solid;\n    ", ";\n\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    box-shadow: 0 0 0 0.1rem var(--box-shadow-color);\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:active,\n    &:focus {\n      --box-shadow-color: ", ";\n    }\n\n    &:active {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:disabled,\n    &[disabled] {\n      cursor: not-allowed;\n      color: ", " !important;\n      background: ", " !important;\n      border: none;\n    }\n\n    font-size: ", ";\n    padding: ", ";\n    height: ", ";\n\n    ", ";\n    ", ";\n  "])), theme.radii ? theme.radii[1] : theme_1.radii[1], width, appearance === "link" && { border: "none" }, bgDefault, borderDefault, color, bgHover, bdHover, boxShadowColor, bgActive, bdActive, bgFocus, bdFocus, themeUtils_1.getColorFromTheme(theme_1.colors, "N7", theme), themeUtils_1.getColorFromTheme(theme_1.colors, "N4", theme), fontSizeStyle, paddingStyle, heightStyle, loadingStyle, selectedStyle);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=getButtonStyle.js.map