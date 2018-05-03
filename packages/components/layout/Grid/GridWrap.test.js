"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var GridWrap_1 = require("./GridWrap");
describe("<GridWrap/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(GridWrap_1.GridWrap, null));
        expect(wrapper).toMatchSnapshot();
    });
    // Props test
    it("should has gapless props", function () {
        var wrapper = enzyme_1.shallow(React.createElement(GridWrap_1.GridWrap, null));
        wrapper.setProps({ gapless: true });
        expect(wrapper).toMatchSnapshot();
    });
    it("should has oneline props", function () {
        var wrapper = enzyme_1.shallow(React.createElement(GridWrap_1.GridWrap, null));
        wrapper.setProps({ oneline: true });
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=GridWrap.test.js.map