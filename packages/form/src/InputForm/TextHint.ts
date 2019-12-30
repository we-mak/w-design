import styled from "styled-components";
import { InputFormProps } from "./index";

export const TextHint = styled.small<InputFormProps>`
  display: block;
  color: ${props => {
    const { isWarning, isError, isSuccess, theme } = props;
    if (isWarning) return `${theme.colors["O30"]}`;
    if (isError) return `${theme.colors["R30"]}`;
    if (isSuccess) return `${theme.colors["G30"]}`;
    return `${theme.colors["N30"]}`;
  }};
`;
