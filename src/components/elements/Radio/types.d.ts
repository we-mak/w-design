import {
  GlobProps,
  InputControlProps,
  MouseEventProps,
  SyntheticEventProps
} from "../../../typings";

export interface RadioProps
  extends GlobProps,
    InputControlProps,
    MouseEventProps,
    SyntheticEventProps {
  radioRef?: React.RefAttributes;
  name?: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  ariaRequired?: boolean;
  isIndeterminate?: boolean;
  label?: string;
  value?: string;
  defaultValue?: string;
}

export interface RadioGroupProps extends GlobProps, InputControlProps {
  groupLabel?: string;
  groupName?: string;
  options?: RadioProps[];
  isRequired?: boolean;
  ariaRequired?: boolean;
  isDisabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRadioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
