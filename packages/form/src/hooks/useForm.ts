import * as React from "react";
import { FieldProps } from "./useField";

type StatusTypes = "error" | "submitting" | "submitted";

export interface FormProps {
  addField: (field: FieldProps) => void;
  onSubmit: (e: React.FormEvent, submitFetching: Function) => void;
  formMessage: string;
  setFormMessage: Function;
  setStatus: Function;
  status?: StatusTypes;
}

export interface FormType {
  requiredMessage?: string; //generic message for required field notify when submit
}

/**
 * useForm
 * @param requiredMessage - generic message for required field notify when submit
 */
const useForm = ({ requiredMessage }: FormType): FormProps => {
  const [formMessage, setFormMessage] = React.useState<any>("");

  // prevent submit multiple times
  const [status, setStatus] = React.useState<StatusTypes>();

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
    formMessage,
    setFormMessage,
    setStatus
  };
};

export default useForm;
