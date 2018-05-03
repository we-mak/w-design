"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Grid_1 = require("./Grid");
describe("<Grid/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Grid_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
    // Props test: no necessary to do too much test with styled-system
    it("should has props", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Grid_1.default, null));
        wrapper.setProps({ width: [1, 1 / 2], m: "auto" });
        expect(wrapper).toMatchSnapshot();
    });
    // Child test
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Grid_1.default, null,
            React.createElement("div", null, "Child")));
        expect(wrapper.contains(React.createElement("div", null, "Child"))).toBeTruthy();
    });
});
//# sourceMappingURL=Grid.test.js.map