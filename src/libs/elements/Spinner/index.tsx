import styled, { css } from "styled-components";
import { borderColor } from "styled-system";
import { spin } from "../../../common/styleUtils/keyframes";

interface SpinnerProps {
  large?: boolean;
  borderColor?: string;
}

// Export for other components such as Button
export const StyledSpinner = css`
  color: transparent !important;
  pointer-events: none;
  position: relative;

  &::after {
    animation: ${spin} 500ms infinite linear;
    border: ${(props: SpinnerProps) => (props.large ? `0.14rem` : `0.1rem`)} solid;
    border-color: ${(props: any) => props.theme.colors["B70"]};
    /* custom spinner color */
    ${borderColor}
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    left: 50%;
    top: 50%;
    position: absolute;
    z-index: 1;
  }

  ${props =>
    props.large
      ? `
    min-height: 2rem;
    &::after {
      height: 1.6rem;
      margin-left: -.8rem;
      margin-top: -.8rem;
      width: 1.6rem;
    }`
      : `
      min-height: 0.8rem;
      &::after {
        height: 0.8rem;
        margin-left: -0.4rem;
        margin-top: -0.4rem;
        width: 0.8rem;
      }
    `}
`;

const Spinner = styled.div<SpinnerProps>`
  ${StyledSpinner}
`;

export default Spinner;