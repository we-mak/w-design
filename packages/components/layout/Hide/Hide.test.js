"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Hide_1 = require("./Hide");
describe("<Hide/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Hide_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
    // Column Style test
    it("should has display none with xs", function () {
        var wrapper = renderer.create(React.createElement(Hide_1.default, { xs: true })).toJSON();
        expect(wrapper).toHaveStyleRule("display", "none", {
            media: "screen and (max-width: 24em)"
        });
    });
    it("should has display none with sm", function () {
        var wrapper = renderer.create(React.createElement(Hide_1.default, { sm: true })).toJSON();
        expect(wrapper).toHaveStyleRule("display", "none", {
            media: "screen and (min-width: 24em) and (max-width: 32em)"
        });
    });
    it("should has display none with md", function () {
        var wrapper = renderer.create(React.createElement(Hide_1.default, { md: true })).toJSON();
        expect(wrapper).toHaveStyleRule("display", "none", {
            media: "screen and (min-width: 32em) and (max-width: 48em)"
        });
    });
    it("should has display none with lg", function () {
        var wrapper = renderer.create(React.createElement(Hide_1.default, { lg: true })).toJSON();
        expect(wrapper).toHaveStyleRule("display", "none", {
            media: "screen and (min-width: 48em) and (max-width: 64em)"
        });
    });
    it("should has display none with xl", function () {
        var wrapper = renderer.create(React.createElement(Hide_1.default, { xl: true })).toJSON();
        expect(wrapper).toHaveStyleRule("display", "none", {
            media: "screen and (min-width: 64em) and (max-width: 80em)"
        });
    });
    it("should has display none with xxl", function () {
        var wrapper = renderer.create(React.createElement(Hide_1.default, { xxl: true })).toJSON();
        expect(wrapper).toHaveStyleRule("display", "none", {
            media: "screen and (min-width: 80em)"
        });
    });
});
//# sourceMappingURL=Hide.test.js.map