/**
 * Input form
 * Input form with label, text hint...
 */
import * as React from "react";
import InputField from "../../elements/InputField";
import { InputFormProps } from "./types";
import { Label, FieldGroup, TextHint, RequiredMark } from "./Styled";

// TODO: add Icon

const InputForm: React.FunctionComponent<InputFormProps> = props => {
  const {
    id,
    label,
    hintMessage,
    isRequired,
    isError,
    isWarning,
    isSuccess,
    children,
    ...rest
  } = props;
  return (
    <FieldGroup>
      {label && (
        <Label htmlFor={id}>
          {label} {isRequired && <RequiredMark aria-hidden="true">*</RequiredMark>}
        </Label>
      )}
      <InputField
        fluid
        id={id}
        isError={isError}
        isWarning={isWarning}
        isValid={isSuccess}
        {...rest}
      />
      {children}
      {hintMessage && (
        <TextHint isError={isError} isWarning={isWarning} isSuccess={isSuccess}>
          {hintMessage}
        </TextHint>
      )}
    </FieldGroup>
  );
};

export default InputForm;
