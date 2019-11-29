import {
  GlobProps,
  SizeProps,
  SyntheticEventProps,
  KeyboardEventProps,
  InputControlProps
} from "../../../typings";

export interface TextAreaProps
  extends GlobProps,
    SizeProps,
    SyntheticEventProps,
    KeyboardEventProps,
    InputControlProps {
  label?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  isRequired?: boolean;
  isError?: boolean;
  isValid?: boolean;
  isWarning?: boolean;
  isFocus?: boolean;
  isDisabled?: boolean;
  textAreaRef?: (ref: HTMLInputElement) => {};
}
