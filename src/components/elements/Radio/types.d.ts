import { GlobProps } from "../../../typings";

export interface RadioProps extends GlobProps, InputControlProps {
  radioRef?: React.RefAttributes;
  name?: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isIndeterminate?: boolean;
  label?: string;
  value?: number | string;
  ariaRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
