import * as React from "react";

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

/**
 * Shared to most of components
 */
export interface GlobProps {
  /** Theme props*/
  theme?: any;
  /** custom className*/
  className?: string;
  /** custom id*/
  id?: string;
}

/**
 * Common event for button or item
 */
export interface SyntheticEventProps {
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onBlur?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onFocus?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

/**
 * Typical mouse events
 */
export interface MouseEventProps {
  onMouseDown?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Typical keyboard events
 */
export interface KeyboardEventProps {
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
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
 * Controlled input
 */
export interface InputControlProps {
  /** Default value of the input, uncontrolled usage. */
  defaultValue?: string;
  /** Value of the input, controlled usage. */
  value?: string;
  placeholder?: string;
  /** Change event handler. Use `event.target.value` for new value. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

/**
 * Action props for button, input, item
 */
export interface ActionProps {
  /** left icon*/
  iconBefore?: string;
  /** right icon*/
  iconAfter?: string;
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
  size?: "sm" | "md" | "lg";
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