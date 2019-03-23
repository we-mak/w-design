import { ActionProps } from "../../types";
import { InputFieldProps } from "../../elements/InputField/types";

export interface InputFormProps extends InputFieldProps, ActionProps {
  label?: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  hintMessage?: string;
}
