import { BtnProps } from "./buttonType";

const getAppearanceProps = (props: BtnProps) => {
  const { appearance, btnSize, fluid, className, isDisabled } = props;

  return {
    appearance,
    btnSize,
    fluid,
    className,
    disabled: isDisabled
  };
};

const getLinkElementProps = (props: BtnProps) => {
  const { href, target } = props;
  return { href, target };
};

const getButtonElementProps = (props: BtnProps) => {
  const { ariaHaspopup, ariaExpanded, ariaControls, form, type } = props;

  return {
    "aria-haspopup": ariaHaspopup,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    form,
    type
  };
};

export const getButtonProps = (component: any) => {
  const { props } = component;

  const defaultProps = {
    ...getAppearanceProps(props),
    "aria-label": props.ariaLabel
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
