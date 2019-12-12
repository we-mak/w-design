/**
 * Input Field
 * Single input field
 */
import * as React from "react";
import styled from "styled-components";
import { getInputStyle } from "./getInputStyle";
import {
  GlobProps,
  SizeProps,
  SyntheticEventProps,
  KeyboardEventProps,
  InputControlProps
} from "../../../types/typings";

export interface InputFieldProps
  extends GlobProps,
    SizeProps,
    SyntheticEventProps,
    KeyboardEventProps,
    InputControlProps {
  name?: string;
  type?: string;
  /* auto-complete attribute for input */
  autoComplete?: string;
  appearance?: "standard" | "none";
  isRequired?: boolean;
  isError?: boolean;
  isValid?: boolean;
  isWarning?: boolean;
  isFocus?: boolean;
  isDisabled?: boolean;
  tabIndex?: number;
  /** input ref*/
  inputRef?: (ref: HTMLInputElement) => {};
}

const StyledInput = styled.input<any>`
  ${getInputStyle};
`;
StyledInput.displayName = "StyledInput";

const InputField = (props: InputFieldProps) => {
  const {
    inputRef,
    appearance,
    type = "text",
    name,
    className,
    id,
    autoComplete = "off",
    size,
    tabIndex,
    value,
    defaultValue,
    isRequired,
    isError,
    isValid,
    isWarning,
    isFocus = false,
    isDisabled = false,
    onChange,
    onBlur,
    ...rest
  } = props;

  let input!: HTMLInputElement | undefined;

  const getInputRef = (ref: HTMLInputElement) => {
    input = ref;
    if (inputRef) inputRef(ref);
  };

  React.useEffect(() => {
    if (isFocus && input) input.focus();
    return () => (input = undefined);
  });

  return (
    <StyledInput
      ref={getInputRef}
      type={type}
      size={size}
      name={name}
      appearance={appearance}
      autoComplete={autoComplete}
      className={className}
      id={id}
      required={isRequired}
      value={value}
      defaultValue={defaultValue}
      isFocus={isFocus}
      isValid={isValid}
      isError={isError}
      isWarning={isWarning}
      disabled={isDisabled}
      onChange={isDisabled ? undefined : onChange}
      onBlur={onBlur}
      tabIndex={tabIndex}
      {...rest}
    />
  );
};

export default InputField;
