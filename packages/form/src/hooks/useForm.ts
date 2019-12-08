import * as React from "react";
import { FieldProps, FormType, FormProps } from "./types";

/**
 * useForm
 * @param requiredMessage - generic message for required field notify when submit
 */
const useForm = ({ requiredMessage }: FormType): FormProps => {
  const [formErrorMessage, setFormErrorMessage] = React.useState("");

  // prevent submit multiple times
  const [status, setStatus] = React.useState();

  let fields: Array<FieldProps> = [];
  let formData: FieldProps | {};
  let formErrors: Array<any> = [];

  return {
    addField: (field: FieldProps) => fields.push(field),
    onSubmit: (e: React.FormEvent, submitFetching: Function) => {
      e.preventDefault();

      // Error from local
      // reverse to check from top to bottom
      fields.reverse().map(field => {
        if (field.isRequired && !field.value) {
          // update form status
          setStatus("error");
          // update field
          field.setStatus("error");
          requiredMessage && field.setHintMessage(requiredMessage);
          // focus to error field
          field && field.name && e.target[field.name].focus();
          formErrors.push(field.name);
        }

        return;
      });

      formData = fields.reduce((result, currentField: FieldProps) => {
        result[currentField.name!] = currentField.value;
        return result;
      }, {});

      // false if there is any error
      if (formErrors.length > 0) {
        return false;
      }

      return submitFetching(formData);
    },
    status,
    formErrorMessage,
    setFormErrorMessage,
    setStatus
  };
};

export default useForm;
