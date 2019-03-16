/**
 * Button
 *
 */
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

function Button(props: ButtonProps) {
  const {
    buttonRef,
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
    ...rest
  } = props;

  let ButtonComponent: AnyStyledComponent;

  if (href) {
    isDisabled ? (ButtonComponent = StyledSpan) : (ButtonComponent = StyledA);
  } else {
    ButtonComponent = StyledButton;
  }

  let button: any = React.createRef();

  React.useEffect(() => {
    if (autoFocus) {
      button && button.current.focus();
    }
    return () => (button = undefined);
  }, [autoFocus]);

  return (
    <ButtonComponent
      // if buttonRef is call
      // there is no autoFocus
      ref={buttonRef ? buttonRef : button}
      //Appearance Props
      appearance={appearance}
      size={size}
      fluid={fluid}
      className={className}
      id={id}
      iconOnly={iconOnly}
      disabled={isDisabled}
      // TODO: change this to state
      isLoading={isLoading}
      isSelected={isSelected}
      // Link Props
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
}

export default Button;
