import * as React from "react";
import { borderColor } from "styled-system";
import theme from "../../../common/theme";
import styled, { css } from "../../../utils/styled";

export const SpinnerStyle = css`
  color: transparent !important;
  min-height: ${(props: any) => (props.largeSpinner ? "2rem" : ".8rem")};
  pointer-events: none;
  position: relative;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::after {
    animation: loading 500ms infinite linear;
    border: 0.1rem solid ${theme.colors.B50};
    ${borderColor};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    z-index: 1;

    ${(props: any) =>
      props.largeSpinner
        ? `
      height: 1.6rem;
      margin-left: -.8rem;
      margin-top: -.8rem;
      width: 1.6rem;
    `
        : `
      height: 0.8rem;
      margin-left: -0.4rem;
      margin-top: -0.4rem;
      width: 0.8rem;
    `};
  }
`;

const SpinnerWrapper = styled.div`
  ${SpinnerStyle};
`;

const Spinner = ({ ...props }) => <SpinnerWrapper {...props} />;

export default Spinner;
