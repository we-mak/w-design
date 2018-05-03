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
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Container_1 = require("./Container");
describe("<Container/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Container_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
    // Props test
    it("should has class", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Container_1.default, { className: "test" }, "Children"));
        expect(wrapper.prop("className")).toEqual("test");
    });
    it("should has passed spread prop", function () {
        var wrapper = enzyme_1.mount(React.createElement(Container_1.default, __assign({}, { randomProp: 1 }), "Children"));
        expect(wrapper.prop("randomProp")).toEqual(1);
    });
    // Children test
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Container_1.default, null,
            React.createElement("div", null, "Child")));
        expect(wrapper.contains(React.createElement("div", null, "Child"))).toBeTruthy();
    });
});
//# sourceMappingURL=Container.test.js.map