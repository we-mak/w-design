import * as React from "react";
import { getButtonStyle } from "./getButtonStyle";
import { getButtonProps } from "./getButtonProps";
import styled from "../../../utils/styled";
import { BtnProps } from "./buttonType";

const StyledButton = styled.button`
  ${getButtonStyle};
`;
StyledButton.displayName = "StyledButton";

const A = styled.a`
  a&&& {
    ${getButtonStyle};
  }
`;
A.displayName = "StyledA";

const Span = styled.span`
  ${getButtonStyle};
`;
Span.displayName = "StyledSpan";

class Button extends React.Component<BtnProps> {
  button: HTMLElement | null;

  static defaultProps = {
    appearance: "default",
    type: "button",
    elementSize: "md",
    isLoading: false,
    isDisabled: false,
    isSelected: false
  };

  static displayName = "ButtonComponent";

  componentDidMount() {
    if (this.props.autoFocus && this.button) {
      this.button.focus();
    }
  }

  componentWillUnmount() {
    this.button = null;
  }

  // undefined when disabled to stop delegation event
  onClick = () => {
    this.props.isDisabled ? undefined : this.props.onClick;
  };

  onBlur = (e: React.SyntheticEvent<HTMLElement>) => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  onFocus = (e: React.SyntheticEvent<HTMLElement>) => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  getComponent() {
    if (this.props.href) {
      return this.props.isDisabled ? Span : A;
    }

    return StyledButton;
  }

  getButtonRef = (ref: HTMLElement) => {
    this.button = ref;
    if (this.props.buttonRef) this.props.buttonRef(ref);
  };

  render() {
    const { children, isSelected } = this.props;
    const buttonProps = getButtonProps(this as any);
    const ButtonComponent = this.getComponent();

    return (
      <ButtonComponent
        innerRef={this.getButtonRef}
        onClick={this.onClick}
        isSelected={isSelected}
        {...buttonProps as any}
      >
        {children}
      </ButtonComponent>
    );
  }
}

export default Button;
