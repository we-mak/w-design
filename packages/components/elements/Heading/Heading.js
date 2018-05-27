"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var clean_tag_1 = require("clean-tag");
var theme_1 = require("../../../common/theme");
var styled_1 = require("../../../utils/styled");
var BaseStyle_1 = require("./BaseStyle");
var getThemeColor = function (props) { return props.theme.colors[props.color]; };
var TagElement = function (_a) {
    var customComponent = _a.customComponent, props = __rest(_a, ["customComponent"]);
    return React.createElement(clean_tag_1.default[customComponent || "div"], __assign({}, props));
};
var colors = theme_1.default.colors;
// H1
var H1 = styled_1.default(TagElement)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return props.theme.fontSizes[8]; }, function (props) { return getThemeColor(props) || colors.N90; }, BaseStyle_1.default);
H1.displayName = "Heading.H1";
// H2
var H2 = styled_1.default(TagElement)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return props.theme.fontSizes[6]; }, function (props) { return getThemeColor(props) || colors.N90; }, BaseStyle_1.default);
H2.displayName = "Heading.H2";
// H3
var H3 = styled_1.default(TagElement)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return props.theme.fontSizes[5]; }, function (props) { return getThemeColor(props) || colors.N90; }, BaseStyle_1.default);
H3.displayName = "Heading.H3";
// H4
var H4 = styled_1.default(TagElement)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return props.theme.fontSizes[4]; }, function (props) { return getThemeColor(props) || colors.N90; }, BaseStyle_1.default);
H4.displayName = "Heading.H4";
// H5
var H5 = styled_1.default(TagElement)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return props.theme.fontSizes[3]; }, function (props) { return getThemeColor(props) || colors.N70; }, BaseStyle_1.default);
H5.displayName = "Heading.H5";
// H6
var H6 = styled_1.default(TagElement)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return props.theme.fontSizes[1]; }, function (props) { return getThemeColor(props) || colors.N70; }, BaseStyle_1.default);
H6.displayName = "Heading.H6";
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heading.prototype.render = function () {
        var children = React.Children.map(this.props.children, function (child) { return React.cloneElement(child); });
        return React.createElement(React.Fragment, __assign({}, this.props), children);
    };
    Heading.H1 = H1;
    Heading.H2 = H2;
    Heading.H3 = H3;
    Heading.H4 = H4;
    Heading.H5 = H5;
    Heading.H6 = H6;
    Heading.displayName = "Heading";
    return Heading;
}(React.Component));
exports.default = Heading;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Heading.js.map