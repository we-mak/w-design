import { GlobProps } from "../../../typings";

export interface CheckboxProps extends GlobProps, InputControlProps {
  //
  checkboxRef?: (ref: HTMLInputElement) => {};
  name: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: string;
  value?: number | string;
}
