import styled from "styled-components";
import { InputFormProps } from "./types";

export const FieldGroup = styled.div<InputFormProps>`
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[2]}px;
  }

  i {
    color: ${props => props.theme.colors["N10"]};

    &.icon-before {
      height: 0.8rem;
      margin: 0 0.25rem;
      position: absolute;
      top: 73%;
      transform: translateY(-50%);
      width: 0.8rem;
      z-index: 2;
      left: 0.1rem;
    }
    &.icon-after {
      height: 0.8rem;
      margin: 0 0.25rem;
      position: absolute;
      top: 73%;
      transform: translateY(-50%);
      width: 0.8rem;
      z-index: 2;
      right: 0.1rem;
    }
  }
  input {
    &.icon-before {
      padding-left: 1.3rem !important;
    }
    &.icon-after {
      padding-right: 1.3rem !important;
    }
  }
`;
FieldGroup.displayName = "FieldGroup";

export const Label = styled.label`
  display: block;
  line-height: ${props => props.theme.lineHeights[0]};
  padding: ${props => props.theme.space[2]}px 0;
  font-weight: ${props => props.theme.fontWeights.strong};
`;
Label.displayName = "Label";

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

export const SpinnerWrap = styled.span`
  position: absolute;
  right: 1rem;
  top: 60%;
`;
