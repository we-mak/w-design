import {
  GlobProps,
  SizeProps,
  SyntheticEventProps,
  KeyboardEventProps,
  InputControlProps
} from "../../../typings";

export interface InputFieldProps
  extends GlobProps,
    SizeProps,
    SyntheticEventProps,
    KeyboardEventProps,
    InputControlProps {
  name?: string;
  type?: string;
  autoComplete?: string;
  appearance?: "standard" | "none";
  isRequired?: boolean;
  isError?: boolean;
  isValid?: boolean;
  isWarning?: boolean;
  isFocus?: boolean;
  isDisabled?: boolean;
  tabIndex?: number;
  /** input ref*/
  inputRef?: (ref: HTMLInputElement) => {};
}
