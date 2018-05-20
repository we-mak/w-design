"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Button_1 = require("./Button");
var theme_1 = require("../../../common/theme");
var colors = theme_1.default.colors;
describe("<Button/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, null, "Test"));
        expect(wrapper).toMatchSnapshot();
    });
    // Tag render test
    it("render as a link element", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { href: "#", appearance: "link" }));
        expect(wrapper.find("a").length).toBe(1);
    });
    // Test render style
    it("render right style", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { appearance: "primary" }));
        expect(wrapper).toHaveStyleRule("background", "" + colors.B50);
    });
    // Child test
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, null,
            React.createElement("div", null, "Child")));
        expect(wrapper.contains(React.createElement(Button_1.default, null,
            React.createElement("div", null, "Child")))).toBeTruthy();
    });
    // Props test
    it("should has className", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, { className: "test" }));
        expect(wrapper.prop("className")).toEqual("test");
    });
});
//# sourceMappingURL=Button.test.js.map