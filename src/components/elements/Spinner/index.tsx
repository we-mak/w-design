import * as React from "react";
import styled from "styled-components";
import { borderColor } from "styled-system";
import { spin } from "../../../common/styleUtils/keyframes";
import theme from "../../../common/styleUtils/theme";

const StyledSpinner = styled.div`
  color: transparent !important;
  pointer-events: none;
  position: relative;

  &::after {
    animation: ${spin} 500ms infinite linear;
    border: 0.1rem solid
      ${(props: any) => props.theme.colors["B70"] || theme.colors["B70"]};
    /* custom spinner color */
    ${borderColor}
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  ${(props: any) =>
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
      min-height: .8rem;
      &::after {
        height: 0.8rem;
        margin-left: -0.4rem;
        margin-top: -0.4rem;
        width: 0.8rem;
      }

  `}
`;

const Spinner: React.StatelessComponent<any> = ({ ...props }) => (
  <StyledSpinner {...props} />
);

export default Spinner;
