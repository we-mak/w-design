import {
  GlobProps,
  SizeProps,
  SyntheticEventProps,
  KeyboardEventProps,
  InputControlProps
} from "@w-design/core";

export interface InputFieldProps
  extends GlobProps,
    SizeProps,
    SyntheticEventProps,
    KeyboardEventProps,
    InputControlProps {
  name?: string;
  type?: string;
  /* auto-complete attribute for input */
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
