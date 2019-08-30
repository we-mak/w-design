import * as React from "react";
import styled from "styled-components";
import Label from "../Label";
import { TextAreaWrapper } from "./Styled";
import { getTextAreaStyle } from "./getTextAreaStyle";
import { TextAreaProps } from "./types";

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
