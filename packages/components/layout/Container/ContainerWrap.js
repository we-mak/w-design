"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_system_1 = require("styled-system");
var styled_1 = require("../../../utils/styled");
var fixSize_1 = require("../../../utils/fixSize");
exports.ContainerWrap = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  width: 100%;\n  ", ";\n  max-width: ", ";\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  width: 100%;\n  ", ";\n  max-width: ", ";\n"])), styled_system_1.color, function (props) { return props.fixSize && fixSize_1.default(props.fixSize); });
exports.ContainerWrap.displayName = "ContainerWrap";
var templateObject_1;
//# sourceMappingURL=ContainerWrap.js.map