import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { getUploadContainStyle, inputStyle, labelStyle } from "./getStyled";

const Container = styled.div`
  ${getUploadContainStyle};
`;

const Label = styled.label`
  ${labelStyle}
`;

export interface UploadInputProps {
  label?: string | ReactNode; // Label title under Label tag
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

const UploadInput: FC<UploadInputProps> = ({
  label,
  onInputChange,
  ...rest
}) => {
  return (
    <Container>
      <Label>
        <span>{label}</span>
        <Input {...rest} type="file" name="file" onChange={onInputChange} />
      </Label>
    </Container>
  );
};

export default UploadInput;
