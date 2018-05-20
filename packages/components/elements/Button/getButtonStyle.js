"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = require("../../../utils/styled");
var theme_1 = require("../../../common/theme");
var hex2Rgba_1 = require("../../../utils/hex2Rgba");
var Spinner_1 = require("../Spinner/Spinner");
var colors = theme_1.default.colors;
/**
 * getAppearanceProps
 * @param appearance take the apperance props
 * @returns style applies to each button appearance
 */
var getAppearanceProps = function (appearance) {
    var appearances = {
        default: function () {
            return "\n        border: 0.05rem solid " + colors.N3 + ";\n        background: " + colors.N3 + ";\n        color: " + colors.N90 + ";\n\n        &:hover {\n          background: " + colors.N4 + ";\n          border-color: " + colors.N4 + ";\n        }\n\n        &:active {\n          background: " + colors.B5 + ";\n          border-color: " + colors.B5 + ";\n          color: " + colors.N90 + ";\n        }\n\n      ";
        },
        primary: function () {
            return "\n        border: 0.05rem solid " + colors.B60 + ";\n        background: " + colors.B50 + ";\n        color: " + colors.N1 + ";\n\n        &:hover {\n          background: " + colors.B40 + ";\n        }\n\n        &:active {\n          background: " + colors.B60 + ";\n          border-color: " + colors.B70 + ";\n          color: " + colors.N1 + ";\n          box-shadow: 0 0 0 0.1rem " + hex2Rgba_1.default(colors.B5) + ";\n        }\n      ";
        },
        danger: function () {
            return "\n        border: 0.05rem solid " + colors.R40 + ";\n        background: " + colors.R30 + ";\n        color: " + colors.N1 + ";\n\n        &:hover {\n          background: " + colors.R20 + ";\n        }\n\n        &:active {\n          background: " + colors.R40 + ";\n          border-color: " + colors.R50 + ";\n          color: " + colors.N1 + ";\n          box-shadow: 0 0 0 0.1rem " + hex2Rgba_1.default(colors.R5) + ";\n        }\n      ";
        },
        warning: function () {
            return "\n        border: 0.05rem solid " + colors.O50 + ";\n        background: " + colors.O40 + ";\n        color: " + colors.N1 + ";\n\n        &:hover {\n          background: " + colors.O30 + ";\n        }\n\n        &:active {\n          background: " + colors.O40 + ";\n          border-color: " + colors.O50 + ";\n          color: " + colors.N1 + ";\n          box-shadow: 0 0 0 0.1rem " + hex2Rgba_1.default(colors.O10) + ";\n        }\n      ";
        },
        success: function () {
            return "\n        border: 0.05rem solid " + colors.G40 + ";\n        background: " + colors.G30 + ";\n        color: " + colors.N1 + ";\n\n        &:hover {\n          background: " + colors.G20 + ";\n        }\n\n        &:active {\n          background: " + colors.G40 + ";\n          border-color: " + colors.G50 + ";\n          color: " + colors.N1 + ";\n          box-shadow: 0 0 0 0.1rem " + hex2Rgba_1.default(colors.G7) + ";\n        }\n      ";
        },
        link: function () {
            return "\n        color: " + colors.B50 + ";\n        border: none;\n\n        &:hover {\n          background: " + colors.N3 + ";\n          color: " + colors.B60 + ";\n        }\n\n        &:active {\n          background: " + colors.B5 + ";\n          box-shadow: 0 0 0 0.1rem " + hex2Rgba_1.default(colors.B50) + ";\n        }\n      ";
        }
    };
    return appearances[appearance || "default"];
};
/**
 * getSizeProps
 * Take each size props as params to return style
 */
var getSizeProps = function (props) {
    var sizes = {
        sm: function () {
            return "\n        font-size: .7rem;\n        height: 1.4rem;\n        padding: .15rem .3rem;\n      ";
        },
        md: function () {
            return "\n        height: 1.8rem;\n        font-size: 0.8rem;\n        padding: 0.35rem 0.4rem;\n      ";
        },
        lg: function () {
            return "\n        font-size: .9rem;\n        height: 2rem;\n        padding: .45rem .6rem;\n      ";
        }
    };
    return sizes[props || "md"];
};
/** Apply style to each appearance when loading props is true */
var getLoadingState = function (props) {
    if (props.isLoading) {
        if (props.appearance === "default" || props.appearance === "link") {
            return Spinner_1.SpinnerStyle;
        }
        return styled_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", ";\n      &::after {\n        border-color: ", ";\n        border-right-color: transparent;\n        border-top-color: transparent;\n      }\n    "], ["\n      ", ";\n      &::after {\n        border-color: ", ";\n        border-right-color: transparent;\n        border-top-color: transparent;\n      }\n    "])), Spinner_1.SpinnerStyle, colors.WHITE);
    }
    return;
};
var getSelected = function (props) {
    if (props.isSelected) {
        if (props.appearance === "default" ||
            props.appearance === "link" ||
            props.appearance === "primary") {
            return "\n        background: " + colors.B70 + ";\n        border: 0.05rem solid " + colors.B50 + ";\n        color: " + colors.N1 + ";\n        &:hover,\n        &:focus,\n        &:active {\n          background: " + colors.B70 + ";\n          border: 0.05rem solid " + colors.B50 + ";\n          color: " + colors.N1 + ";\n          outline: none;\n          box-shadow: none;\n        }\n      ";
        }
        if (props.appearance === "danger") {
            return "\n        border: 0.05rem solid " + colors.R40 + " !important;\n        background: " + colors.R30 + " !important;\n        color: " + colors.N1 + " !important;\n        &:active {\n          box-shadow: none;\n        }\n      ";
        }
        if (props.appearance === "warning") {
            return "\n        border: 0.05rem solid " + colors.O50 + " !important;\n        background: " + colors.O40 + " !important;\n        color: " + colors.N1 + " !important;\n        &:active {\n          box-shadow: none;\n        }\n      ";
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
    /** Button type style*/
    var buttonAppearance = getAppearanceProps(props.appearance);
    /** Variable styled*/
    var buttonSize = getSizeProps(props.elementSize);
    var width;
    if (props.fluid)
        width = "100%";
    var loadingStyle = getLoadingState(props);
    var selectedStyle = getSelected(props);
    return styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    cursor: pointer;\n    outline: 0;\n    border-radius: 0.1rem;\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.2s ease;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: ", ";\n    &:disabled,\n    &[disabled] {\n      cursor: not-allowed;\n      color: ", " !important;\n      background: ", " !important;\n      border: none;\n    }\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "], ["\n    cursor: pointer;\n    outline: 0;\n    border-radius: 0.1rem;\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.2s ease;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: ", ";\n    &:disabled,\n    &[disabled] {\n      cursor: not-allowed;\n      color: ", " !important;\n      background: ", " !important;\n      border: none;\n    }\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "])), width, colors.N7, colors.N4, buttonSize, buttonAppearance, loadingStyle, selectedStyle);
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=getButtonStyle.js.map