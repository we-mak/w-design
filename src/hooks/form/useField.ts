import { useState, useEffect } from "react";
import { FormType, ValidatorTypes } from "./types";
import { InputFieldProps } from "../../libs/elements/InputField/types";

/**
 * useField
 * This hook update component via `InputField` props.
 * @param form - form that returned from `useForm`
 * @param validations - validation functions to validate value
 * @param defaultValue - the initial value of the input field
 */
const useField = (form?: FormType, validations?: ValidatorTypes[]): InputFieldProps => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), 400);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  let status: "error" | "success";
  let errorMessage: string;

  // Validation the debounce value
  // on the top, we need to define a validation helper
  // to return a validate
  if (debouncedValue) {
    validations &&
      validations.map(({ validate, message, option }) => {
        const valid = validate(debouncedValue, option);
        if (!valid) {
          status = "error";
          errorMessage = message;
          return false;
        }
        return true;
      });
  }

  // Success validate
  if (validations && debouncedValue) {
    status = "success";
  }

  let field = {
    value,
    isSuccess: status! === "success",
    isError: status! === "error",
    hintMessage: errorMessage!,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      // clean form error when adding value
      if (form && form.formErrMessage) {
        form.setFormErr(false);
        form.setFormErrMessage("");
      }
      return setValue(e.target.value);
    }
  };

  form && form.addField(field);

  return field;
};

export default useField;
