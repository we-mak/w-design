"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var getAppearanceProps = function (props) {
    var appearance = props.appearance, elementSize = props.elementSize, fluid = props.fluid, className = props.className, isDisabled = props.isDisabled, isLoading = props.isLoading;
    return {
        appearance: appearance,
        elementSize: elementSize,
        fluid: fluid,
        className: className,
        disabled: isDisabled,
        isLoading: isLoading
    };
};
var getLinkElementProps = function (props) {
    var href = props.href, target = props.target;
    return { href: href, target: target };
};
var getButtonElementProps = function (props) {
    var ariaHaspopup = props.ariaHaspopup, ariaExpanded = props.ariaExpanded, ariaControls = props.ariaControls, form = props.form, type = props.type;
    return {
        "aria-haspopup": ariaHaspopup,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-label": props.ariaLabel,
        form: form,
        type: type,
        id: props.id
    };
};
var getEventProps = function (component) {
    var onBlur = component.onBlur, onFocus = component.onFocus;
    var _a = component.props, onClick = _a.onClick, tabIndex = _a.tabIndex;
    return {
        onBlur: onBlur,
        onClick: onClick,
        onFocus: onFocus,
        tabIndex: tabIndex
    };
};
exports.getButtonProps = function (component) {
    var props = component.props;
    var defaultProps = __assign({}, getAppearanceProps(props), getEventProps(component));
    if (props.href) {
        if (props.isDisabled)
            return defaultProps;
        return __assign({}, defaultProps, getLinkElementProps(props));
    }
    return __assign({}, defaultProps, getButtonElementProps(props));
};
//# sourceMappingURL=getButtonProps.js.map