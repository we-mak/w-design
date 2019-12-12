import * as React from "react";
import styled from "styled-components";
import Label from "../Label";
import { TextAreaWrapper } from "./Styled";
import { getTextAreaStyle } from "./getTextAreaStyle";
import {
  GlobProps,
  SizeProps,
  SyntheticEventProps,
  KeyboardEventProps,
  InputControlProps
} from "../../../types/typings";

export interface TextAreaProps
  extends GlobProps,
    SizeProps,
    SyntheticEventProps,
    KeyboardEventProps,
    InputControlProps {
  label?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  isRequired?: boolean;
  isError?: boolean;
  isValid?: boolean;
  isWarning?: boolean;
  isFocus?: boolean;
  isDisabled?: boolean;
  textAreaRef?: (ref: HTMLInputElement) => {};
}

const TextField = styled.textarea<any>`
  ${getTextAreaStyle};
`;

const TextArea = ({
  label,
  id,
  name,
  placeholder,
  autoComplete = "off",
  ...rest
}: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextField
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...rest}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
