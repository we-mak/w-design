/**
 * Input Field
 * Single input field
 */
import * as React from "react";
import styled from "styled-components";
import { InputFieldProps } from "./types";
import { getInputStyle } from "./getInputStyle";

const StyledInput = styled.input<any>`
  ${getInputStyle};
`;
StyledInput.displayName = "StyledInput";

const InputField = (props: InputFieldProps) => {
  const {
    inputRef,
    appearance = "standard",
    type = "text",
    name,
    className,
    id,
    autoComplete = "off",
    size = "md",
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
    <>
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
    </>
  );
};

export default InputField;
