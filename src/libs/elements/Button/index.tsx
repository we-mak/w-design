import * as React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { ButtonProps } from "./types";
import { getButtonStyle } from "./getButtonStyle";
import Icon from "../Icon";

const StyledButton = styled.button`
  ${getButtonStyle}
`;

StyledButton.displayName = "StyledButton";

const StyledA = styled.a`
  ${getButtonStyle}
  a& {
    line-height: initial;
    &:hover {
      text-decoration: none;
    }
  }
`;

StyledA.displayName = "StyledAButton";

const StyledSpan = styled.span`
  ${getButtonStyle}
`;
StyledSpan.displayName = "StyledSpanButton";

const Button = (props: ButtonProps) => {
  const {
    appearance = "default",
    type = "button",
    size = "md",
    className,
    id,
    fluid,
    iconBefore,
    iconAfter,
    iconOnly,
    ariaHaspopup,
    ariaExpanded,
    ariaControls,
    ariaLabel,
    form,
    isLoading = false,
    isDisabled = false,
    isSelected = false,
    href,
    target,
    autoFocus,
    onClick,
    tabIndex,
    children,
    buttonRef,
    ...rest
  } = props;

  let ButtonComponent: AnyStyledComponent;

  if (href) {
    isDisabled ? (ButtonComponent = StyledSpan) : (ButtonComponent = StyledA);
  } else {
    ButtonComponent = StyledButton;
  }

  let button!: HTMLElement | undefined;

  React.useEffect(() => {
    if (autoFocus && button) button.focus();
    return () => (button = undefined);
  });

  return (
    <ButtonComponent
      ref={buttonRef}
      //Appearance Props
      appearance={appearance}
      size={size}
      fluid={fluid}
      className={className}
      id={id}
      iconOnly={iconOnly}
      disabled={isDisabled}
      isLoading={isLoading}
      isSelected={isSelected}
      autoFocus={autoFocus}
      href={href}
      target={target}
      // Button Props
      type={type}
      form={form}
      // WAI ARIA
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      //
      tabIndex={tabIndex}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      {iconBefore && <Icon className={`icon-before ${iconBefore}`} />}
      {children}
      {iconAfter && <Icon className={`icon-after ${iconAfter}`} />}
    </ButtonComponent>
  );
};

export default Button;
export { ButtonGroup } from "./ButtonGroup";
