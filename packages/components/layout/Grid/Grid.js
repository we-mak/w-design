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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_system_1 = require("styled-system");
var clean_tag_1 = require("clean-tag");
var styled_1 = require("../../../utils/styled");
var GridWrap_1 = require("./GridWrap");
var Column = styled_1.default(clean_tag_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: none;\n  max-width: 100%;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n\n  /* Custom props with styled-system*/\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n"], ["\n  flex: none;\n  max-width: 100%;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n\n  /* Custom props with styled-system*/\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n"])), styled_system_1.space, styled_system_1.width, styled_system_1.flex, styled_system_1.color, styled_system_1.fontSize, styled_system_1.order, styled_system_1.alignSelf);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grid.prototype.render = function () {
        var children = React.Children.map(this.props.children, function (child) { return React.cloneElement(child); });
        return React.createElement(GridWrap_1.GridWrap, __assign({}, this.props), children);
    };
    Grid.Column = Column;
    return Grid;
}(React.Component));
Grid.Column.displayName = "Grid.Column";
exports.default = Grid;
var templateObject_1;
//# sourceMappingURL=Grid.js.map