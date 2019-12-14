/**
 * Input form
 * Input form with label, text hint...
 */
import * as React from "react";
import { Spinner, Icon } from "@w-design/core";
import Label from "../Label";
import InputField from "../InputField";
import { FieldGroup, TextHint, RequiredMark, SpinnerWrap, InputContainer } from "./Styled";
import { ActionProps } from "@w-design/core/lib/types/common/props";
import { InputFieldProps } from "../InputField";

export interface InputFormProps extends InputFieldProps, ActionProps {
  label?: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  hintMessage?: string;
}

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
        {label} {isRequired && <RequiredMark aria-hidden="true">*</RequiredMark>}
        <InputContainer>
          {iconBefore && <Icon className={`icon-before ${iconBefore}`} />}
          <InputField
            className={(iconBefore && `icon-before`) || (iconAfter && `icon-after`)}
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
              <Spinner />
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
