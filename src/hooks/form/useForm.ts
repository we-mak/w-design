import * as React from "react";
import { InputFieldProps } from "../../libs/elements/InputField/types";
import { FormType } from "./types";

/**
 * useForm
 * @param requiredMessage - generic message for required field notify when submit
 */
const useForm = (requiredMessage?: string): FormType => {
  const [formErrMessage, setFormErrMessage] = React.useState("");
  const [formErr, setFormErr] = React.useState(false);
  // prevent submit multiple times
  const [submitted, setSubmitted] = React.useState(false);

  let fields: Array<any> = [];
  let formDatas: Array<any> = [];
  let formErrors: Array<any> = [];

  const getFormData = () =>
    fields.reduce((data, f) => {
      data[f.name] = f.value;
      return data;
    }, {});

  return {
    addField: (field: InputFieldProps) => fields.push(field),
    onSubmit: (e: React.FormEvent) => {
      e.preventDefault();

      fields.reverse().map(field => {
        if (field.isRequired && !field.value) {
          field.isError = true;
          // Pass error message
          setFormErrMessage(requiredMessage!);
        }

        if (field.isError) {
          // focus to error field
          e.target[field.name].focus();
          setFormErr(true);
          return formErrors.push(field.name);
        }

        return true;
      });

      formDatas = getFormData();

      // Submit data if no errors
      if (formErrors.length === 0) {
        return setSubmitted(true);
      }

      console.log(formDatas);

      return formDatas;
    },
    submitted,
    formErrMessage,
    setFormErrMessage,
    formErr,
    setFormErr
  };
};

export default useForm;
