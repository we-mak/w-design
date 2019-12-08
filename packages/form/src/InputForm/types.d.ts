import { ActionProps } from "../../../types/typings";
import { InputFieldProps } from "../InputField/types";

export interface InputFormProps extends InputFieldProps, ActionProps {
  label?: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  hintMessage?: string;
}
