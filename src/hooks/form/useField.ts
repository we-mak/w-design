import { useState, useEffect } from "react";
import { FieldProps, FieldType, FieldStatus } from "./types";

/**
 * useField
 * This hook update component via `InputField` props.
 */

const useField = ({ form, name, isRequired, defaultValue, validations }: FieldType): FieldProps => {
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
    if (form && form.formErrorMessage) {
      form.setStatus(undefined);
      form.setFormErrorMessage("");
    }

    setValue(e.target.value.trim());
  };

  const field: FieldProps = {
    name,
    value,
    isRequired,
    isSuccess: status === "success",
    isError: status === "error",
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
