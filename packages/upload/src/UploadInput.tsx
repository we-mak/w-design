import React, { FC } from "react";
import styled from "styled-components";
import { inputStyle } from "./getStyled";

export interface UploadInputProps {
  /* Accept input attribute*/
  accept?: string;
  /* allow upload multiple files*/
  multiple?: boolean;
  /* disable input */
  disabled?: boolean;
  /* input change */
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input<UploadInputProps>`
  ${inputStyle}
`;

const UploadInput: FC<UploadInputProps> = ({ onInputChange, ...rest }) => {
  return <Input {...rest} type="file" name="file" onChange={onInputChange} />;
};

export default UploadInput;
