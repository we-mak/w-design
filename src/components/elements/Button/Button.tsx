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
  ${getButtonStyle};
`;
A.displayName = "StyledA";

const Span = styled.span`
  ${getButtonStyle};
`;
Span.displayName = "StyledSpan";

class Button extends React.Component<BtnProps> {
  static defaultProps = {
    appearance: "default",
    type: "button",
    btnSize: "md",
    isDisabled: false,
    isSelected: false
  };

  getComponent() {
    if (this.props.href) return this.props.isDisabled ? Span : A;

    return StyledButton;
  }

  render() {
    const { buttonRef, children } = this.props;
    const buttonProps = getButtonProps(this as any);

    const StyledComponent = this.getComponent();

    return (
      <StyledComponent ref={buttonRef} {...buttonProps as any}>
        {children}
      </StyledComponent>
    );
  }
}

export default Button;
