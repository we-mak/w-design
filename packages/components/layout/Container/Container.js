"use strict";
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
var ContainerWrap_1 = require("./ContainerWrap");
/**
 * Container
 *
 * Wrapper layout component contains columns layout
 */
var Container = function (props) { return (React.createElement(ContainerWrap_1.ContainerWrap, __assign({ className: props.className }, props), props.children)); };
Container.defaultProps = {
    className: undefined
};
exports.default = Container;
//# sourceMappingURL=Container.js.map