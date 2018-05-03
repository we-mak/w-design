"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var ContainerWrap_1 = require("./ContainerWrap");
describe("<ContainerWrap/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(ContainerWrap_1.ContainerWrap, null));
        expect(wrapper).toMatchSnapshot();
    });
    // Props test
    it("should has fixSize", function () {
        var wrapper = enzyme_1.shallow(React.createElement(ContainerWrap_1.ContainerWrap, null));
        wrapper.setProps({ fixSize: "xl" });
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=ContainerWrap.test.js.map