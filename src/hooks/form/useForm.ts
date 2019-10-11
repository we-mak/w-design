/**
 * useForm.ts
 *
 */
import * as React from "react";

interface formProps {
  mandatory?: string;
}

export default ({ mandatory }: formProps) => {
  const [formErrMessage, setFormErrMessage]: [string, Function] = React.useState("");
  const [formErr, setFormErr]: [boolean, Function] = React.useState(false);
  // prevent submit multiple times
  const [submitted, setSubmitted]: [boolean, Function] = React.useState(false);

  let fields: any[] = [];
  let formDatas: any[] = [];
  let formErrors: any[] = [];

  const getFormData = () =>
    fields.reduce((formData, f) => {
      formData[f.name] = f.value;
      return formData;
    }, {});

  return {
    addField: (field: any) => fields.push(field),
    onSubmit: (e: React.FormEvent) => {
      e.preventDefault();

      fields.reverse().map(field => {
        if (field.isRequired && !field.value) {
          field.isError = true;
          // Pass error message
          setFormErrMessage(mandatory);
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

      return formDatas;
    },
    submitted,
    formErrMessage,
    setFormErrMessage,
    formErr,
    setFormErr
  };
};
