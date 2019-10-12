export type ValidatorTypes = {
  validate: Function;
  message: string;
  option?: any;
};

export type FormProps = {
  mandatory?: string;
};

export interface FormType {
  addField: Function;
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
  formErrMessage: string;
  formErr: boolean;
  setFormErrMessage: Function;
  setFormErr: Function;
}
