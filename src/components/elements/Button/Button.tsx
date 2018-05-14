import * as React from "react";
import { getButtonStyle } from "./getButtonStyle";
import styled from "../../../utils/styled";

type BtnType =
  | "default"
  | "primary"
  | "danger"
  | "warning"
  | "success"
  | "help"
  | "link";

type BtnSize = "small" | "medium" | "large";

export type BtnProps = {
  /** button apperance type */
  btnType?: BtnType;
  /** button apperance size */
  size?: BtnSize;
  /** html button aria-controls*/
  ariaControls?: string;
  /** html button aria-expanded*/
  ariaExpanded?: boolean;
  /** html button aria-label*/
  ariaLabel?: string;
  /** html button aria-haspopup*/
  ariaHaspopup?: boolean;
  /** custom className*/
  className?: string;
  /** id of the button*/
  id?: string;
  /** children */
  children?: React.ReactChild;
  /** button link url */
  href?: string;
  /** left icon*/
  iconLeft?: boolean;
  /** right icon*/
  iconRight?: boolean;
  /** loading state*/
  isLoading?: boolean;
  /** selected button */
  isSelected?: boolean;
};

const StyledButton = styled.button`
  ${getButtonStyle};
`;
StyledButton.displayName = "StyledButton";

const A = styled.a`
  ${getButtonStyle};
`;
A.displayName = "A";

class Button extends React.Component<BtnProps> {
  static defaultProps = {
    btnType: "default"
  };

  getComponent() {
    if (this.props.href) return A;

    return StyledButton;
  }

  render() {
    const { btnType, href, children } = this.props;

    const StyledComponent = this.getComponent();

    return (
      <StyledComponent btnType={btnType} href={href}>
        {children}
      </StyledComponent>
    );
  }
}

export default Button;
