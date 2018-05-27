"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This component is based on styled-components, unnecessary to do overtest
var React = require("react");
var renderer = require("react-test-renderer");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Provider_1 = require("./Provider");
describe("<Provider/>", function () {
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Provider_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
    it("renders with custom theme", function () {
        var wrapper = renderer
            .create(React.createElement(Provider_1.default, { theme: {
                fonts: "Avenir Next",
                fontSizes: [12, 16, 18, 24, 36, 48, 72],
                space: [0, 6, 12, 18, 24, 30, 36]
            } }))
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
    it("should set stylesheet", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Provider_1.default, null));
        var instance = wrapper.instance();
        instance.componentDidMount();
        var stylesheet = instance.stylesheet;
        if (document && document.head) {
            expect(document.head.appendChild(stylesheet)).toMatchSnapshot();
        }
        instance.componentWillUnmount();
        if (stylesheet && document && document.head) {
            expect(stylesheet).not.toBe(true);
        }
    });
});
//# sourceMappingURL=Provider.test.js.map