"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = require("../../../utils/styled");
var themed_1 = require("../../../common/themed");
var Spinner_1 = require("../Spinner/Spinner");
/**
 * getAppearanceProps
 * @param styleProperty style property
 * @param appearance apperance button style props
 * @returns style applies to each button appearance
 */
var getAppearanceProps = function (styleProperty, appearance, colors) {
    if (!appearance)
        return null;
    var appearanceStyle = styleProperty(colors);
    return appearanceStyle[appearance];
};
var getFontSizeProps = function (styleProperty, buttonSize, sizes) {
    var fontSizeStyle = styleProperty(sizes);
    return fontSizeStyle[buttonSize];
};
var getSize = function (padding, buttonSize) {
    return padding[buttonSize];
};
/** Apply style to each appearance when loading props is true */
var getLoadingState = function (props) {
    if (props.isLoading) {
        if (props.appearance === "default" || props.appearance === "link") {
            return Spinner_1.SpinnerStyle;
        }
        return styled_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", ";\n      &::after {\n        border-color: ", ";\n        border-right-color: transparent;\n        border-top-color: transparent;\n      }\n    "], ["\n      ", ";\n      &::after {\n        border-color: ", ";\n        border-right-color: transparent;\n        border-top-color: transparent;\n      }\n    "])), Spinner_1.SpinnerStyle, props.theme.colors.WHITE);
    }
    return null;
};
var getSelected = function (props) {
    if (props.isSelected) {
        if (props.appearance === "default" ||
            props.appearance === "link" ||
            props.appearance === "primary") {
            return "\n        background: " + props.theme.colors.B70 + ";\n        border: 0.05rem solid " + props.theme.colors.B50 + ";\n        color: " + props.theme.colors.N1 + ";\n        &:hover,\n        &:focus,\n        &:active {\n          background: " + props.theme.colors.B70 + ";\n          border: 0.05rem solid " + props.theme.colors.B50 + ";\n          color: " + props.theme.colors.N1 + ";\n          outline: none;\n          box-shadow: none;\n        }\n      ";
        }
        if (props.appearance === "danger") {
            return "\n        border: 0.05rem solid " + props.theme.colors.R40 + " !important;\n        background: " + props.theme.colors.R30 + " !important;\n        color: " + props.theme.colors.N1 + " !important;\n        &:focus, &:active {\n          box-shadow: none;\n        }\n      ";
        }
        if (props.appearance === "warning") {
            return "\n        border: 0.05rem solid " + props.theme.colors.O50 + " !important;\n        background: " + props.theme.colors.O40 + " !important;\n        color: " + props.theme.colors.N1 + " !important;\n        &:focus, &:active {\n          box-shadow: none;\n        }\n      ";
        }
    }
    return null;
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
    var bgDefault = getAppearanceProps(themed_1.background, appearance, theme.colors);
    var bgHover = getAppearanceProps(themed_1.backgroundHover, appearance, theme.colors);
    var bgActive = getAppearanceProps(themed_1.backgroundActive, appearance, theme.colors);
    var bgFocus = getAppearanceProps(themed_1.backgroundFocus, appearance, theme.colors);
    // border
    var borderDefault = getAppearanceProps(themed_1.border, appearance, theme.colors);
    var bdHover = getAppearanceProps(themed_1.borderHover, appearance, theme.colors);
    var bdActive = getAppearanceProps(themed_1.borderActive, appearance, theme.colors);
    var bdFocus = getAppearanceProps(themed_1.borderFocus, appearance, theme.colors);
    var color = getAppearanceProps(themed_1.text, appearance, theme.colors);
    var shadow = getAppearanceProps(themed_1.boxShadow, appearance, theme.colors);
    /** Variable styles*/
    var fontSizeStyle = getFontSizeProps(themed_1.fontSizes, elementSize, theme.fontSizes);
    var paddingStyle = getSize(themed_1.padding, elementSize);
    var heightStyle = getSize(themed_1.height, elementSize);
    var width;
    if (fluid)
        width = "100%";
    var loadingStyle = getLoadingState(props);
    var selectedStyle = getSelected(props);
    return styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    cursor: pointer;\n    outline: 0;\n    border-radius: ", ";\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.2s ease;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: ", ";\n    border: 0.05rem solid;\n    ", "\n\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:active,\n    &:focus {\n      box-shadow: ", ";\n    }\n\n    &:active {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:disabled,\n    &[disabled] {\n      cursor: not-allowed;\n      color: ", " !important;\n      background: ", " !important;\n      border: none;\n    }\n\n    font-size: ", ";\n    padding: ", ";\n    height: ", ";\n\n    ", ";\n    ", ";\n  "], ["\n    cursor: pointer;\n    outline: 0;\n    border-radius: ", ";\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.2s ease;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: ", ";\n    border: 0.05rem solid;\n    ", "\n\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:active,\n    &:focus {\n      box-shadow: ", ";\n    }\n\n    &:active {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n\n    &:disabled,\n    &[disabled] {\n      cursor: not-allowed;\n      color: ", " !important;\n      background: ", " !important;\n      border: none;\n    }\n\n    font-size: ", ";\n    padding: ", ";\n    height: ", ";\n\n    ", ";\n    ", ";\n  "])), props.theme.radii[1], width, props.appearance === "link" && { border: "none" }, bgDefault, borderDefault, color, bgHover, bdHover, shadow, bgActive, bdActive, bgFocus, bdFocus, props.theme.colors.N7, props.theme.colors.N4, fontSizeStyle, paddingStyle, heightStyle, loadingStyle, selectedStyle);
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=getButtonStyle.js.map