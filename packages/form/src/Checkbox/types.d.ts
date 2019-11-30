import {
  GlobProps,
  InputControlProps,
  SyntheticEventProps,
  MouseEventProps
} from "@w-design/core";

export interface CheckboxProps
  extends GlobProps,
    InputControlProps,
    SyntheticEventProps,
    MouseEventProps {
  //
  checkboxRef?: React.RefAttributes;
  name?: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isIndeterminate?: boolean;
  label?: string;
  value?: number | string;
  ariaRequired?: boolean;
}
