import { useState, useEffect } from "react";
import { FieldProps, FieldType, FieldStatus } from "./types";

/**
 * useField
 * This hook update component via `InputField` props.
 */

const useField = ({ form, name, isRequired, defaultValue, validations }: FieldType): FieldProps => {
  const [status, setStatus] = useState<FieldStatus>();
  const [hintMessage, setHintMessage] = useState();
  const [value, setValue] = useState(defaultValue || "");
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), 400);
    return () => clearTimeout(handler);
  }, [value]);

  // Validation the debounce value
  // on the top, we need to define a validation helper
  // to return a validate
  if (debouncedValue && validations) {
    validations.map(({ validate, message, option }) => {
      const valid = validate(debouncedValue, option);
      if (!valid) {
        setStatus("error");
        setHintMessage(message);
        return false;
      }

      setStatus("success");
      return true;
    });
  }

  const handleChangeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status === "success" || "error") {
      setStatus(undefined);
      setHintMessage("");
    }

    // clean form error when adding value
    if (form && form.formErrorMessage) {
      form.setStatus(undefined);
      form.setFormErrorMessage("");
    }

    return setValue(e.target.value.trim());
  };

  const field: FieldProps = {
    name,
    value,
    isRequired,
    isSuccess: status! === "success",
    isError: status! === "error",
    hintMessage,
    onChange: handleChangeVal,
    // leaky extends state
    // TODO: check safety types since we don't have any props like this in FieldForm
    setStatus,
    setHintMessage
  };

  form && form.addField(field);

  return field;
};

export default useField;
