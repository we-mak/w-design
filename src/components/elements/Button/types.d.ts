import {
  GlobProps,
  SizeProps,
  LinkProps,
  ActionProps,
  SyntheticEventProps,
  MouseEventProps
} from "../../../typings";

export interface ButtonProps
  extends GlobProps,
    SizeProps,
    LinkProps,
    ActionProps,
    SyntheticEventProps,
    MouseEventProps {
  /** button apperance type */
  appearance?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "subtle"
    | "link"
    | "help";
  /** custom component*/
  customComponent?: string;
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
  /** button type attribute*/
  type?: "button" | "submit" | "reset";
  /** Name property of a linked form that the button submits when clicked. */
  form?: string;
  /** selected button */
  isSelected?: boolean;
  children?: React.ReactChild | string;
}
