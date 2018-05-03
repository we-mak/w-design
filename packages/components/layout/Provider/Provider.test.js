"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This component is based on styled-components, unnecessary to do overtest
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Provider_1 = require("./Provider");
describe("<Provider/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Provider_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=Provider.test.js.map