"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Spinner_1 = require("./Spinner");
describe("<Spinner/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Spinner_1.default, null, "Test"));
        expect(wrapper).toMatchSnapshot();
    });
    // Style test
    it("should large style spinner", function () {
        var wrapper = renderer.create(React.createElement(Spinner_1.default, { largeSpinner: true })).toJSON();
        expect(wrapper).toHaveStyleRule("min-height", "2rem");
    });
});
//# sourceMappingURL=Spinner.test.js.map