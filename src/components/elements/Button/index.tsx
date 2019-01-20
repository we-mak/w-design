import * as React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";
import { getButtonProps } from "./getButtonProps";
import { getButtonStyle } from "./getButtonStyle";

const StyledButton = styled.button`
  ${getButtonStyle};
`;

const StyledA = styled.a`
  a& {
    ${getButtonStyle};
    line-height: initial;
    &:hover {
      text-decoration: none;
    }
  }
`;

const StyledSpan = styled.span`
  ${getButtonStyle};
`;

class Button extends React.Component<ButtonProps> {
  button!: HTMLElement | null;

  static defaultProps = {
    appearance: "default",
    type: "button",
    size: "md",
    isLoading: false,
    isDisabled: false,
    isSelected: false
  };

  componentDidMount() {
    if (this.props.autoFocus && this.button) this.button.focus();
  }

  componentWillUnmount() {
    this.button = null;
  }

  getComponent() {
    // custom component
    // href button
    if (this.props.href) return this.props.isDisabled ? StyledSpan : StyledA;

    return StyledButton;
  }

  getButtonRef = (ref: HTMLElement) => {
    this.button = ref;
    if (this.props.buttonRef) this.props.buttonRef(ref);
  };

  render() {
    const { children, isSelected, isDisabled, onClick } = this.props;
    const buttonProps = getButtonProps(this as ButtonProps);
    const ButtonComponent: any = this.getComponent();

    return (
      <ButtonComponent
        ref={this.getButtonRef}
        onClick={isDisabled ? undefined : onClick}
        isSelected={isSelected}
        {...buttonProps}
      >
        {children}
      </ButtonComponent>
    );
  }
}

export default Button;
