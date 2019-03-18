import styled from "styled-components";
import { InputFormProps } from "./types";

export const FieldGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[2]};
  }
`;
FieldGroup.displayName = "FieldGroup";

export const Label = styled.label`
  display: block;
  line-height: ${props => props.theme.lineHeights[0]};
  padding: ${props => props.theme.space[2]} 0;
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
`;
