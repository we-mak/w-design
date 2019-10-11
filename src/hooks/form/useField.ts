/**
 * useField
 * Hooks to set field props to update component,
 * it has relationship with useForm as useForm child
 */
import { useState, useEffect } from "react";

export interface validatorTypes {
  validate: Function;
  message: string;
  option?: any;
}

export default (
  form: any,
  name: string,
  type?: string,
  validations?: validatorTypes[],
  isRequired?: boolean
): object => {
  const [value, setValue] = useState();
  const [debouncedValue, setDebouncedValue]: [string, Function] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), 400);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  let success: boolean | undefined;
  let error: boolean | undefined;
  let errorMessage: string | undefined;

  // validate values
  if (debouncedValue) {
    validations &&
      validations.map(({ validate, message, option }) => {
        const valid = validate(debouncedValue, option);
        if (!valid) {
          error = true;
          errorMessage = message;
        }
        return true;
      });
  }

  // Success input
  if (validations && debouncedValue && !error) success = true;

  let field = {
    name,
    type,
    value,
    isError: error,
    hintMessage: errorMessage,
    isSuccess: success,
    isRequired,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      // clean form error when adding value
      if (form.formErrMessage) {
        form.setFormErr(false);
        form.setFormErrMessage("");
      }
      return setValue(e.target.value);
    }
  };

  form.addField(field);
  return field;
};
