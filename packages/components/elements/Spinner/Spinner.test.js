"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
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
    it("should right style spinner", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Spinner_1.default, null));
        expect(wrapper).toHaveStyleRule("min-height", ".8rem");
        var wrapperLg = enzyme_1.shallow(React.createElement(Spinner_1.default, { largeSpinner: true }));
        expect(wrapperLg).toHaveStyleRule("min-height", "2rem");
    });
});
//# sourceMappingURL=Spinner.test.js.map