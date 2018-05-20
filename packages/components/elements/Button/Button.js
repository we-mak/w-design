"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var getButtonStyle_1 = require("./getButtonStyle");
var getButtonProps_1 = require("./getButtonProps");
var styled_1 = require("../../../utils/styled");
var StyledButton = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), getButtonStyle_1.getButtonStyle);
StyledButton.displayName = "StyledButton";
var A = styled_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  a&&& {\n    ", ";\n  }\n"], ["\n  a&&& {\n    ", ";\n  }\n"])), getButtonStyle_1.getButtonStyle);
A.displayName = "StyledA";
var Span = styled_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), getButtonStyle_1.getButtonStyle);
Span.displayName = "StyledSpan";
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Prevent bubbling event when disabled
        _this.onClick = function () {
            _this.props.isDisabled ? undefined : _this.props.onClick;
        };
        _this.onBlur = function (e) {
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
        };
        _this.onFocus = function (e) {
            if (_this.props.onFocus) {
                _this.props.onFocus(e);
            }
        };
        _this.getButtonRef = function (ref) {
            _this.button = ref;
            if (_this.props.buttonRef)
                _this.props.buttonRef(ref);
        };
        return _this;
    }
    Button.prototype.componentDidMount = function () {
        if (this.props.autoFocus && this.button) {
            this.button.focus();
        }
    };
    Button.prototype.componentWillUnmount = function () {
        this.button = null;
    };
    Button.prototype.getComponent = function () {
        if (this.props.href) {
            return this.props.isDisabled ? Span : A;
        }
        return StyledButton;
    };
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, isSelected = _a.isSelected;
        var buttonProps = getButtonProps_1.getButtonProps(this);
        var ButtonComponent = this.getComponent();
        return (React.createElement(ButtonComponent, __assign({ ref: this.getButtonRef, onClick: this.onClick, isSelected: isSelected }, buttonProps), children));
    };
    Button.defaultProps = {
        appearance: "default",
        type: "button",
        elementSize: "md",
        isLoading: false,
        isDisabled: false,
        isSelected: false
    };
    Button.displayName = "ButtonComponent";
    return Button;
}(React.Component));
exports.default = Button;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Button.js.map