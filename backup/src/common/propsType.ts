/**
 * Common props type/interface
 */
import * as React from "react";

/**
 * Shared to all components
 */
export interface GlobProps {
  /** custom className*/
  className?: string;
  /** custom id*/
  id?: string;
}

/**
 * Common event for button or item
 */
export interface SyntheticEventProps {
  onBlur?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onFocus?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

/**
 * Typical keyboard events
 */
export interface KeyboardEventProps {
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
}

/**
 * Typical mouse events
 */
export interface MouseEventProps {
  onMouseDown?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Typical touch events
 */
export interface TouchEventProps {
  onTouchEnd?: (e: React.TouchEvent<HTMLElement>) => void;
  onTouchMove?: (e: React.TouchEvent<HTMLElement>) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLElement>) => void;
}

/**
 * Form controlled input
 */
export interface FormControlProps {
  /** Default value of the input, uncontrolled usage. */
  defaultValue?: string;
  /** Change event handler. Use `event.target.value` for new value. */
  onChange?: React.FormEventHandler<HTMLElement>;
  /** Value of the input, controlled usage. */
  value?: string;
}

/**
 * Action props for button, input, item
 */
export interface FormActionProps {
  /** left icon*/
  iconBefore?: string | JSX.Element;
  /** right icon*/
  iconAfter?: string | JSX.Element;
  /** icon is the only child*/
  iconOnly?: boolean;
  /** loading state*/
  isLoading?: boolean;
  /** apply disabled */
  isDisabled?: boolean;
  /** autofocus attribute */
  autoFocus?: boolean;
  /** tabIndex assigning*/
  tabIndex?: number;
}

/**
 * Size props for button, input, dropdown, item
 */
export interface SizeProps {
  /** apperance size */
  elementSize?: "sm" | "md" | "lg";
  /** fit container button*/
  fluid?: boolean;
}

/** Link props
 * with support for customizing target window.
 * */
export interface LinkProps {
  /** Link URL. */
  href?: string;
  /** passing target attribute. Use `"_blank"` to open in a new window. */
  target?: string;
}
