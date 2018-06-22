"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_system_1 = require("styled-system");
var theme_1 = require("../../../common/theme");
var styled_1 = require("../../../utils/styled");
exports.SpinnerStyle = styled_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: transparent !important;\n  min-height: ", ";\n  pointer-events: none;\n  position: relative;\n\n  @keyframes loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  &::after {\n    animation: loading 500ms infinite linear;\n    border: 0.1rem solid ", ";\n    ", ";\n    border-radius: 50%;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    z-index: 1;\n\n    ", ";\n  }\n"], ["\n  color: transparent !important;\n  min-height: ", ";\n  pointer-events: none;\n  position: relative;\n\n  @keyframes loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  &::after {\n    animation: loading 500ms infinite linear;\n    border: 0.1rem solid ", ";\n    ", ";\n    border-radius: 50%;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    z-index: 1;\n\n    ",
    ";\n  }\n"])), function (props) { return (props.largeSpinner ? "2rem" : ".8rem"); }, theme_1.default.colors.B50, styled_system_1.borderColor, function (props) {
    return props.largeSpinner
        ? "\n      height: 1.6rem;\n      margin-left: -.8rem;\n      margin-top: -.8rem;\n      width: 1.6rem;\n    "
        : "\n      height: 0.8rem;\n      margin-left: -0.4rem;\n      margin-top: -0.4rem;\n      width: 0.8rem;\n    ";
});
var SpinnerWrapper = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), exports.SpinnerStyle);
var Spinner = function (_a) {
    var props = __rest(_a, []);
    return React.createElement(SpinnerWrapper, __assign({}, props));
};
exports.default = Spinner;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Spinner.js.map