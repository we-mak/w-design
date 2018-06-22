"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Button_1 = require("./Button");
var Provider_1 = require("../../layout/Provider");
describe("test Button style", function () {
    // render test
    it("should render right style", function () {
        var tree = renderer.create(React.createElement(Button_1.default, null)).toJSON();
        expect(tree).toMatchSnapshot();
        var fullTree = renderer
            .create(React.createElement(Provider_1.default, null,
            React.createElement(Button_1.default, null, "Test")))
            .toJSON();
        expect(fullTree).toMatchSnapshot();
    });
    // get style test
    it("should renders correctly with theme provider", function () {
        var defaultBtn = enzyme_1.mount(React.createElement(Provider_1.default, null,
            React.createElement(Button_1.default, null, "Test")));
        expect(defaultBtn.find("button")).toHaveStyleRule("background", "#E2EAF2");
        var primaryBtn = enzyme_1.mount(React.createElement(Provider_1.default, null,
            React.createElement(Button_1.default, { appearance: "primary" }, "Test")));
        expect(primaryBtn.find("button")).toHaveStyleRule("background", "#008CC0");
    });
    // appearance
    it("should has right appearance style", function () {
        var defaultBtn = enzyme_1.mount(React.createElement(Button_1.default, null));
        var primaryBtn = enzyme_1.mount(React.createElement(Button_1.default, { appearance: "primary" }));
        var dangerBtn = enzyme_1.mount(React.createElement(Button_1.default, { appearance: "danger" }));
        var warnBtn = enzyme_1.mount(React.createElement(Button_1.default, { appearance: "warning" }));
        var successBtn = enzyme_1.mount(React.createElement(Button_1.default, { appearance: "success" }));
        expect(defaultBtn).toHaveStyleRule("background", "#E2EAF2");
        expect(primaryBtn).toHaveStyleRule("background", "#008CC0");
        expect(dangerBtn).toHaveStyleRule("background", "#DC1F1F");
        expect(warnBtn).toHaveStyleRule("background", "#FA9B00");
        expect(successBtn).toHaveStyleRule("background", "#29A634");
    });
    // button size
    it("should has right size style", function () {
        var smBtn = enzyme_1.mount(React.createElement(Button_1.default, { elementSize: "sm" }));
        var defaultBtn = enzyme_1.mount(React.createElement(Button_1.default, null));
        var lgBtn = enzyme_1.mount(React.createElement(Button_1.default, { elementSize: "lg" }));
        expect(smBtn).toHaveStyleRule("padding", "0.15rem 0.3rem");
        expect(smBtn).toHaveStyleRule("font-size", "0.7rem");
        expect(defaultBtn).toHaveStyleRule("padding", "0.35rem 0.4rem");
        expect(defaultBtn).toHaveStyleRule("font-size", "0.8rem");
        expect(lgBtn).toHaveStyleRule("padding", "0.45rem 0.6rem");
        expect(lgBtn).toHaveStyleRule("font-size", "0.9rem");
    });
    // loading style
    it("should render loading style", function () {
        var btn = enzyme_1.mount(React.createElement(Button_1.default, { isLoading: true }));
        expect(btn).toHaveStyleRule("animation", "loading 500ms infinite linear", {
            modifier: "::after"
        });
        var primaryBtn = enzyme_1.mount(React.createElement(Button_1.default, { isLoading: true, appearance: "primary" }));
        expect(primaryBtn).toHaveStyleRule("border-color", "#FFF", {
            modifier: "::after"
        });
    });
    // selected style
    it("should render selected style", function () {
        var btn = enzyme_1.mount(React.createElement(Button_1.default, { isSelected: true }));
        expect(btn).toHaveStyleRule("background", "#004660");
        var warnBtn = enzyme_1.mount(React.createElement(Button_1.default, { isSelected: true, appearance: "warning" }));
        expect(warnBtn).toHaveStyleRule("background", "#EF8100");
        expect(warnBtn).toHaveStyleRule("background", "#EF8100", {
            modifier: ":hover"
        });
        var dangerBtn = enzyme_1.mount(React.createElement(Button_1.default, { isSelected: true, appearance: "danger" }));
        expect(dangerBtn).toHaveStyleRule("background", "#DC1F1F");
    });
    // fluid button
    it("should render fluid style", function () {
        var btn = enzyme_1.mount(React.createElement(Button_1.default, { fluid: true }));
        expect(btn).toHaveStyleRule("width", "100%");
    });
});
//# sourceMappingURL=ButtonStyle.test.js.map