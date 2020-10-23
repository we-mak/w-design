import React, { FC } from "react";
import styled from "styled-components";
import { inputStyle } from "./getStyled";

export interface UploadInputProps {
  /* Change input style to image card style */
  isPictureCard?: boolean;
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

const UploadInput: FC<UploadInputProps> = (props) => {
  return <Input {...props} type="file" name="file" onChange={props.onInputChange} />;
};

export default UploadInput;
