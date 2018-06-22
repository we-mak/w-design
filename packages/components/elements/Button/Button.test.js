"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var Button_1 = require("./Button");
describe("<Button/>", function () {
    // Render test
    it("should renders correctly", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, null, "Test"));
        expect(wrapper).toMatchSnapshot();
    });
    it("render as a button element", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, null));
        expect(wrapper.find("button").length).toBe(1);
    });
    it("render as a link element", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { href: "#", appearance: "link" }));
        expect(wrapper.find("a").length).toBe(1);
    });
    it("should change to span tag if link with href button is disabled", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { href: "#", appearance: "link", isDisabled: true }));
        expect(wrapper.find("span").length).toBe(1);
    });
    it("should render Child component", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, null,
            React.createElement("div", null, "Child")));
        expect(wrapper.contains(React.createElement(Button_1.default, null,
            React.createElement("div", null, "Child")))).toBeTruthy();
    });
    // Props test
    it("should add appearance props", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, null));
        expect(Object.keys(wrapper.find("StyledComponent").props())).toEqual(expect.arrayContaining([
            "appearance",
            "className",
            "disabled",
            "isSelected",
            "fluid",
            "elementSize",
            "isLoading"
        ]));
    });
    it("should set tabIndex attribute when tabIndex prop is set", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { tabIndex: 0 }, "button"));
        expect(wrapper.find("button").is("[tabIndex=0]")).toBe(true);
    });
    it("should set attributes", function () {
        expect(enzyme_1.mount(React.createElement(Button_1.default, { ariaHaspopup: true })).find("button[aria-haspopup=true]").length).toBe(1);
        expect(enzyme_1.mount(React.createElement(Button_1.default, { ariaExpanded: true })).find("button[aria-expanded=true]").length).toBe(1);
        expect(enzyme_1.mount(React.createElement(Button_1.default, { ariaControls: "test" })).find('button[aria-controls="test"]')
            .length).toBe(1);
        expect(enzyme_1.mount(React.createElement(Button_1.default, { ariaLabel: "test" })).find('button[aria-label="test"]')
            .length).toBe(1);
        expect(enzyme_1.mount(React.createElement(Button_1.default, { id: "test" })).find('button[id="test"]').length).toBe(1);
    });
    // it("should set button to disable when set isDisabled prop", () => {
    //   const wrapper = mount(<Button isDisabled />);
    // });
    it("should pass onClick from onClick props", function () {
        var onClick = function () { };
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { onClick: onClick }));
        expect(wrapper.find("StyledComponent").prop("onClick")).toEqual(expect.anything());
    });
    it("should has autofocus", function () {
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { id: "test", autoFocus: true }));
        var id = document.activeElement ? document.activeElement.id : null;
        expect(wrapper.find("button").prop("id")).toEqual(id);
    });
    // Event test
    it("should trigger onClick when called", function () {
        var spy = jest.fn();
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, { onClick: spy }));
        wrapper.find("StyledButton").simulate("click");
        expect(spy).toHaveBeenCalled();
    });
    it("shouldn't call onClick when button is disabled", function () {
        var spy = jest.fn();
        var wrapper = enzyme_1.mount(React.createElement(Button_1.default, { isDisabled: true, onClick: spy }));
        wrapper.find("StyledButton").simulate("click");
        expect(spy).not.toBeCalled();
    });
    it("should trigger onFocus handler on focus", function () {
        var spy = jest.fn();
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, { onFocus: spy }));
        wrapper.find("StyledButton").simulate("focus");
        expect(spy).toHaveBeenCalled();
    });
    it("should trigger onBlur handler on blur", function () {
        var spy = jest.fn();
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, { onBlur: spy }));
        wrapper.find("StyledButton").simulate("blur");
        expect(spy).toHaveBeenCalled();
    });
    it("should unmount button component", function () {
        var wrapper = enzyme_1.shallow(React.createElement(Button_1.default, null));
        wrapper.unmount();
        expect(wrapper).not.toBe(true);
    });
});
//# sourceMappingURL=Button.test.js.map