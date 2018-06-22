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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("../../../utils/styled");
var breakpoints = {
    xs: "@media screen and (max-width: 24em)",
    sm: "@media screen and (min-width: 24em) and (max-width: 32em)",
    md: "@media screen and (min-width: 32em) and (max-width: 48em)",
    lg: "@media screen and (min-width: 48em) and (max-width: 64em)",
    xl: "@media screen and (min-width: 64em) and (max-width: 80em)",
    xxl: "@media screen and (min-width: 80em)"
};
var hidden = function (key) { return function (props) {
    var _a;
    return props[key]
        ? (_a = {},
            _a[breakpoints[key]] = {
                display: "none"
            },
            _a) : null;
}; };
var xs = hidden("xs");
var sm = hidden("sm");
var md = hidden("md");
var lg = hidden("lg");
var xl = hidden("xl");
var xxl = hidden("xxl");
var Base = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), xs, sm, md, lg, xl, xxl);
var Hide = function (props) { return (React.createElement(Base, __assign({}, props))); };
exports.default = Hide;
var templateObject_1;
//# sourceMappingURL=Hide.js.map