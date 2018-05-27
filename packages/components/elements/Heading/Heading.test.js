"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Heading_1 = require("./Heading");
var theme_1 = require("../../../common/theme");
var colors = theme_1.default.colors;
describe("<Heading/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Heading_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
    it("render as span element", function () {
        var wrapper = enzyme_1.mount(React.createElement(Heading_1.default.H1, { theme: theme_1.default, customComponent: "span" }));
        expect(wrapper.find("span").length).toBe(1);
    });
    // Child test
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Heading_1.default, null,
            React.createElement(Heading_1.default.H1, { theme: theme_1.default }, "Child")));
        expect(wrapper.contains(React.createElement(Heading_1.default.H1, { theme: theme_1.default }, "Child"))).toBeTruthy();
    });
    it("should render right style", function () {
        var h1 = renderer.create(React.createElement(Heading_1.default.H1, { theme: theme_1.default })).toJSON();
        var h2 = renderer.create(React.createElement(Heading_1.default.H2, { theme: theme_1.default })).toJSON();
        var h3 = renderer.create(React.createElement(Heading_1.default.H3, { theme: theme_1.default })).toJSON();
        var h4 = renderer.create(React.createElement(Heading_1.default.H4, { theme: theme_1.default })).toJSON();
        var h5 = renderer.create(React.createElement(Heading_1.default.H5, { theme: theme_1.default })).toJSON();
        var h6 = renderer.create(React.createElement(Heading_1.default.H6, { theme: theme_1.default })).toJSON();
        expect(h1).toHaveStyleRule("color", colors.N90);
        expect(h2).toHaveStyleRule("color", colors.N90);
        expect(h3).toHaveStyleRule("color", colors.N90);
        expect(h4).toHaveStyleRule("color", colors.N90);
        expect(h5).toHaveStyleRule("color", colors.N70);
        expect(h6).toHaveStyleRule("color", colors.N70);
    });
});
//# sourceMappingURL=Heading.test.js.map