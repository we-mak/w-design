/**
 * Input form
 * Input form with label, text hint...
 */
import * as React from "react";
import { Spinner, Icon } from "@w-design/core";
import { Label, InputField } from "..";
import { InputFormProps } from "./types";
import {
  FieldGroup,
  TextHint,
  RequiredMark,
  SpinnerWrap,
  InputContainer
} from "./Styled";

const InputForm: React.FunctionComponent<InputFormProps> = props => {
  const {
    id,
    label,
    hintMessage,
    iconBefore,
    iconAfter,
    isLoading,
    isRequired,
    isError,
    isWarning,
    isSuccess,
    children,
    ...rest
  } = props;
  return (
    <FieldGroup>
      <Label htmlFor={id}>
        {label}{" "}
        {isRequired && <RequiredMark aria-hidden="true">*</RequiredMark>}
        <InputContainer>
          {iconBefore && <Icon className={`icon-before ${iconBefore}`} />}
          <InputField
            className={
              (iconBefore && `icon-before`) || (iconAfter && `icon-after`)
            }
            fluid
            id={id}
            isError={isError}
            isWarning={isWarning}
            isRequired={isRequired}
            isValid={isSuccess}
            {...rest}
          />
          {iconAfter && <Icon className={`icon-after ${iconAfter}`} />}
          {isLoading && (
            <SpinnerWrap>
              <Spinner size="sm" />
            </SpinnerWrap>
          )}
        </InputContainer>
      </Label>

      {children}
      <TextHint isError={isError} isWarning={isWarning} isSuccess={isSuccess}>
        {hintMessage}
      </TextHint>
    </FieldGroup>
  );
};

export default InputForm;
