import * as React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Icon from "../Icon";
import Spinner from "../Spinner";
import { getButtonStyle } from "./getButtonStyle";
import {
  GlobProps,
  SizeProps,
  LinkProps,
  ActionProps,
  SyntheticEventProps,
  MouseEventProps,
} from "../common/props";

export interface ButtonProps
  extends GlobProps,
    SizeProps,
    LinkProps,
    ActionProps,
    SyntheticEventProps,
    MouseEventProps {
  /** button apperance type */
  appearance?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "subtle"
    | "link"
    | "help"
    | "clean";
  /** WAI-ARIA support */
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaLabel?: string;
  ariaHaspopup?: boolean;
  name?: string;
  role?: string;
  /** button type attribute*/
  type?: "button" | "submit" | "reset";
  /** Name property of a linked form that the button submits when clicked. */
  form?: string;
  /** selected button */
  isSelected?: boolean;
  /** children */
  children?: React.ReactNode;
  buttonRef?: React.RefObject<HTMLElement>;
  isRequired?: boolean;
}

const Btn = styled.button`
  ${getButtonStyle}
`;

const A = styled.a`
  ${getButtonStyle}
  a& {
    line-height: initial;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Span = styled.span`
  ${getButtonStyle}
`;

const ChildContainer = styled.div<{ isLoading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 100%;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${(props) => props.isLoading && `0`};
`;

const SpinContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 10%;
`;

const Button = (props: ButtonProps) => {
  const {
    type = "button",
    appearance,
    size,
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
    theme,
    ...rest
  } = props;

  let ButtonComponent: AnyStyledComponent;

  if (href) {
    isDisabled ? (ButtonComponent = Span) : (ButtonComponent = A);
  } else {
    ButtonComponent = Btn;
  }

  let button!: HTMLElement | undefined;

  React.useEffect(() => {
    if (autoFocus && button) button.focus();
    return () => (button = undefined);
  });

  let spinnerColor = undefined;
  if (appearance === ("primary" || "warning" || "success" || "help")) {
    spinnerColor = `#fff`;
  }
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
      onClick={isDisabled || isLoading ? undefined : onClick}
      {...rest}
    >
      {isLoading && (
        <SpinContainer>
          <Spinner size="sm" spinnerColor={spinnerColor} />
        </SpinContainer>
      )}
      <ChildContainer isLoading={isLoading}>
        {iconBefore && <Icon className={`icon-before ${iconBefore}`} />}
        {children}
        {iconAfter && <Icon className={`icon-after ${iconAfter}`} />}
      </ChildContainer>
    </ButtonComponent>
  );
};

export default Button;
export { ButtonGroup } from "./ButtonGroup";
