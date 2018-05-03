"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_system_1 = require("styled-system");
var styled_1 = require("../../../utils/styled");
exports.GridWrap = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  margin-left: -0.4rem;\n  margin-right: -0.4rem;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ";\n\n  ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  margin-left: -0.4rem;\n  margin-right: -0.4rem;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ",
    ";\n\n  ",
    ";\n"])), styled_system_1.flexWrap, styled_system_1.flexDirection, styled_system_1.alignItems, styled_system_1.justifyContent, function (props) {
    /* set margin left and right, and child padding to 0*/
    return props.gapless &&
        " margin-left: 0 !important;\n      margin-right: 0 !important;\n      * {\n        padding-left: 0 !important;\n        padding-right: 0 !important;\n      }\n  ";
}, function (props) {
    return props.oneline &&
        "\n      flex-wrap: nowrap !important;\n      overflow-x: auto !important;\n  ";
});
exports.GridWrap.displayName = "GridWrap";
var templateObject_1;
//# sourceMappingURL=GridWrap.js.map