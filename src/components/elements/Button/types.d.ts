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
    | "help"
    | "clean";
  /** WAI-ARIA support */
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaLabel?: string;
  ariaHaspopup?: boolean;
  /** button type attribute*/
  type?: "button" | "submit" | "reset";
  /** Name property of a linked form that the button submits when clicked. */
  form?: string;
  /** selected button */
  isSelected?: boolean;
  /** children */
  children?: any;
}
