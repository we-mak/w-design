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
FieldGroup.displayName = "FieldGroup";

export const InputContainer = styled.span`
  position: relative;
  display: block;
`;

export const TextHint = styled.small<InputFormProps>`
  display: block;
  margin-top: 0.4rem;
  color: ${props => {
    const { isWarning, isError, isSuccess, theme } = props;
    if (isWarning) return `${theme.colors["O30"]}`;
    if (isError) return `${theme.colors["R30"]}`;
    if (isSuccess) return `${theme.colors["G30"]}`;
    return `${theme.colors["N30"]}`;
  }};
`;
TextHint.displayName = "TextHint";

export const RequiredMark = styled.sup`
  color: ${props => props.theme.colors["R30"]};
  font-size: ${props => props.theme.fontSizes[0]};
  top: -0.2rem;
`;
RequiredMark.displayName = "RequiredMark";

export const SpinnerWrap = styled.span`
  margin: 0 0.25rem;
  position: absolute;
  top: 10%;
  z-index: 2;
  right: 0;
  display: block;
`;
SpinnerWrap.displayName = "SpinnerWrap";
