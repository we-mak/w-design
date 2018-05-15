export type BtnProps = {
  /** button apperance type */
  appearance?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "link";
  /** button apperance size */
  btnSize?: "sm" | "md" | "lg";
  /** fit container button*/
  fluid?: boolean;
  /** html button aria-controls*/
  ariaControls?: string;
  /** html button aria-expanded*/
  ariaExpanded?: boolean;
  /** html button aria-label*/
  ariaLabel?: string;
  /** html button aria-haspopup*/
  ariaHaspopup?: boolean;
  /** custom className*/
  className?: string;
  /** id of the button*/
  id?: string;
  /** button ref*/
  buttonRef?: React.Ref<any>;
  /** children */
  children?: React.ReactChild | string;
  /** button link url */
  href?: string;
  /** passing target attribute, if href available */
  target?: string;
  /** left icon*/
  iconLeft?: boolean;
  /** right icon*/
  iconRight?: boolean;
  /** button type attribute*/
  type?: "button" | "submit" | "reset";
  /** Name property of a linked form that the button submits when clicked. */
  form?: string;
  /** tabIndex assigning*/
  tabIndex?: number;
  /** loading state*/
  isLoading?: boolean;
  /** selected button */
  isSelected?: boolean;
  /** apply disabled button */
  isDisabled?: boolean;
};
