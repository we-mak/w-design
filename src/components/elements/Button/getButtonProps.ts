import { ButtonProps } from "./types";

const getAppearanceProps = (props: ButtonProps) => {
  const {
    appearance,
    size,
    fluid,
    className,
    id,
    isDisabled,
    isLoading
  } = props;

  return {
    appearance,
    size,
    fluid,
    className,
    id,
    disabled: isDisabled,
    isLoading
  };
};

const getLinkElementProps = (props: ButtonProps) => {
  const { href, target } = props;
  return { href, target };
};

const getButtonElementProps = (props: ButtonProps) => {
  const { ariaHaspopup, ariaExpanded, ariaControls, form, type } = props;

  return {
    "aria-haspopup": ariaHaspopup,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    "aria-label": props.ariaLabel,
    form,
    type
  };
};

const getEventProps = (component: any) => {
  const {
    onBlur,
    onFocus,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave
  } = component;

  const { tabIndex } = component.props;

  return {
    onBlur,
    onClick,
    onFocus,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    tabIndex
  };
};

export const getButtonProps = (component: any) => {
  const { props } = component;

  const defaultProps = {
    ...getAppearanceProps(props),
    ...getEventProps(component)
  };

  if (props.href) {
    if (props.isDisabled) return defaultProps;

    return {
      ...defaultProps,
      ...getLinkElementProps(props)
    };
  }

  return {
    ...defaultProps,
    ...getButtonElementProps(props)
  };
};
