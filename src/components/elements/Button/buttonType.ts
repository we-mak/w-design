import {
  SyntheticEventProps,
  GlobProps,
  LinkProps,
  FormActionProps,
  SizeProps
} from "../../../common/propsType";

export interface BtnProps
  extends GlobProps,
    SyntheticEventProps,
    LinkProps,
    FormActionProps,
    SizeProps {
  /** button apperance type */
  appearance?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "link";
  /** html button aria-controls*/
  ariaControls?: string;
  /** html button aria-expanded*/
  ariaExpanded?: boolean;
  /** html button aria-label*/
  ariaLabel?: string;
  /** html button aria-haspopup*/
  ariaHaspopup?: boolean;
  /** button ref*/
  buttonRef?: (ref: HTMLElement) => {};
  /** children */
  children?: React.ReactChild | string;
  /** button type attribute*/
  type?: "button" | "submit" | "reset";
  /** Name property of a linked form that the button submits when clicked. */
  form?: string;
  /** selected button */
  isSelected?: boolean;
}
