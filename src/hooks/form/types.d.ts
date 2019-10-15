import { InputFormProps } from "../../libs/components/InputForm/types";

export type ValidatorType = {
  validate: Function;
  message: string;
  option?: any;
};

export type FieldStatus = "error" | "success" | "warn" | null;

export interface FieldProps extends InputFormProps {
  setStatus: Function;
  setHintMessage: Function;
}

export interface FieldType {
  form: FormProps; // form that returned from `useForm`
  name: string;
  isRequired: boolean = false;
  defaultValue?: string; // the initial value of the input field
  validations?: ValidatorType[]; // validation functions applied to value
}

export interface FormProps {
  addField: (field: FieldProps) => void;
  onSubmit: (e: React.FormEvent, submitFetching: Function) => void;
  formErrorMessage: string;
  setFormErrorMessage: Function;
  setStatus: Function;
  status?: "error" | "submitting" | "submitted";
}

export interface FormType {
  requiredMessage?: string; //generic message for required field notify when submit
}
