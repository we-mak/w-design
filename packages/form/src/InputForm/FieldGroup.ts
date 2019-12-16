import styled from "styled-components";
import { InputFormProps } from "./index";

export const FieldGroup = styled.div<InputFormProps>`
  position: relative;
  font-family: ${props => `${props.theme.fonts["normal"]}px`};
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[2]}px;
  }

  i {
    color: ${props => props.theme.colors["N10"]};

    &.icon-before {
      height: 0.8rem;
      margin: 0 0.25rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 0.8rem;
      z-index: 2;
      left: 0.1rem;
    }
    &.icon-after {
      height: 0.8rem;
      margin: 0 0.25rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 0.8rem;
      z-index: 2;
      right: 0.1rem;
    }
  }
  input {
    &.icon-before {
      padding-left: 1.4rem !important;
    }
    &.icon-after {
      padding-right: 1.4rem !important;
    }
  }
`;
