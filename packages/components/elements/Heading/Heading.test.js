"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Heading_1 = require("./Heading");
var theme_1 = require("../../../common/theme");
describe("<Heading/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Heading_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
    it("render as span element", function () {
        var wrapper = enzyme_1.mount(React.createElement(Heading_1.default.H1, { theme: theme_1.default, as: "span" }));
        expect(wrapper.find("span").length).toBe(1);
    });
    // Child test
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Heading_1.default, null,
            React.createElement(Heading_1.default.H1, { theme: theme_1.default }, "Child")));
        expect(wrapper.contains(React.createElement(Heading_1.default.H1, { theme: theme_1.default }, "Child"))).toBeTruthy();
    });
});
//# sourceMappingURL=Heading.test.js.map