import { useState, useEffect } from "react";
import { InputFormProps } from "../InputForm";
import { FormProps } from "./useForm";

export type ValidatorType = {
  validate: Function;
  message: string;
  option?: any;
};

export type FieldStatus = "error" | "success" | "warn";

export interface FieldProps extends InputFormProps {
  setStatus: Function;
  setHintMessage: Function;
}

export interface FieldType {
  form: FormProps; // form that returned from `useForm`
  name: string;
  isRequired?: boolean;
  defaultValue?: string; // the initial value of the input field
  validations?: ValidatorType[]; // validation functions applied to value
}

/**
 * useField
 * This hook update component via `InputField` props.
 */

const useField = ({
  form,
  name,
  isRequired = false,
  defaultValue,
  validations
}: FieldType): FieldProps => {
  const [status, setStatus] = useState<FieldStatus | null>();
  const [hintMessage, setHintMessage] = useState();
  const [value, setValue] = useState(defaultValue || "");
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // render success if has value
    // and no validation
    if (value && !validations) {
      setStatus("success");
    }

    const handler = setTimeout(() => setDebouncedValue(value), 600);
    // Validation the debounce value
    // on the top, we need to define a validation helper
    // to return a validate
    if (debouncedValue && validations) {
      validations.map(({ validate, message, option }) => {
        const valid = validate(debouncedValue, option);

        if (!valid) {
          return setStatus("error"), setHintMessage(message);
        }

        return setStatus("success"), setHintMessage("");
      });
    }
    return () => clearTimeout(handler);
  }, [value, debouncedValue, validations]);

  const handleChangeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status === "success" || "error") {
      setStatus(undefined);
      setHintMessage("");
    }

    // clean form error when adding value
    if (form && form.formMessage) {
      form.setStatus(undefined);
      form.setFormMessage("");
    }

    setValue(e.target.value);
  };

  const field: FieldProps = {
    name,
    value,
    isRequired,
    isSuccess: status === "success",
    isError: status === "error",
    hintMessage,
    onChange: handleChangeVal,
    // implicit extending state when we pass below props to InputField (FieldForm)
    // TODO: check types safety
    setStatus,
    setHintMessage
  };

  form && form.addField(field);

  return field;
};

export default useField;
