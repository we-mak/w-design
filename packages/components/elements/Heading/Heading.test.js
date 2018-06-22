"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
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
        var wrapper = enzyme_1.mount(React.createElement(Heading_1.default.H1, { customComponent: "span" }));
        expect(wrapper.find("span").length).toBe(1);
    });
    // Child test
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Heading_1.default, null,
            React.createElement(Heading_1.default.H1, null, "Child")));
        expect(wrapper.contains(React.createElement(Heading_1.default.H1, null, "Child"))).toBeTruthy();
    });
    it("should render right style", function () {
        var h1 = enzyme_1.mount(React.createElement(Heading_1.default.H1, null));
        var h2 = enzyme_1.mount(React.createElement(Heading_1.default.H2, null));
        var h3 = enzyme_1.mount(React.createElement(Heading_1.default.H3, null));
        var h4 = enzyme_1.mount(React.createElement(Heading_1.default.H4, null));
        var h5 = enzyme_1.mount(React.createElement(Heading_1.default.H5, null));
        var h6 = enzyme_1.mount(React.createElement(Heading_1.default.H6, null));
        expect(h1).toHaveStyleRule("color", colors.N90);
        expect(h2).toHaveStyleRule("color", colors.N90);
        expect(h3).toHaveStyleRule("color", colors.N90);
        expect(h4).toHaveStyleRule("color", colors.N90);
        expect(h5).toHaveStyleRule("color", colors.N70);
        expect(h6).toHaveStyleRule("color", colors.N70);
    });
});
//# sourceMappingURL=Heading.test.js.map