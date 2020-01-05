import { css } from "styled-components";
import { getValFromObjKey, getFontSize, getElementSize } from "@w-design/helpers";
import { ButtonProps } from "./";

// Set button background colors
const bg = {
  default: "N3",
  primary: "B50",
  warning: "O30",
  danger: "R30",
  success: "G30",
  link: "TRANSPARENT",
  subtle: "TRANSPARENT",
  help: "T30",
  clean: "TRANSPARENT"
};

const bgHover = {
  default: "N4",
  primary: "B40",
  warning: "O20",
  danger: "R20",
  success: "G20",
  link: "N3",
  subtle: "N2",
  help: "T20",
  clean: "TRANSPARENT"
};

const bgActive = {
  default: "B5",
  primary: "B60",
  warning: "O40",
  danger: "R40",
  success: "G40",
  link: "B5",
  subtle: "B5",
  help: "T40",
  clean: "TRANSPARENT"
};
const bordr = {
  default: "N3",
  primary: "B60",
  warning: "O40",
  danger: "R40",
  success: "G40",
  link: "",
  subtle: "",
  help: "T40",
  clean: "TRANSPARENT"
};

const bordrHover = {
  default: "N4",
  primary: "B50",
  warning: "O30",
  danger: "R30",
  success: "G30",
  link: "",
  subtle: "",
  help: "T30",
  clean: "TRANSPARENT"
};
const bordrActive = {
  default: "B5",
  primary: "B70",
  warning: "O50",
  danger: "R50",
  success: "G50",
  link: "",
  subtle: "",
  help: "T50",
  clean: "TRANSPARENT"
};
const text = {
  default: "N50",
  primary: "N1",
  warning: "N1",
  danger: "N1",
  success: "N1",
  link: "B50",
  subtle: "N70",
  help: "N1",
  clean: "N70"
};
const boxShadow = {
  default: "B50",
  primary: "B5",
  warning: "O10",
  danger: "R5",
  success: "G5",
  link: "B50",
  subtle: "B50",
  help: "T10",
  clean: "N1"
};

export function getButtonStyle(props: ButtonProps) {
  const { fontSizes, fonts, lineHeights, colors, radii, space, padding, height } = props.theme;

  const { appearance = "default", size = "md", isSelected, fluid, iconOnly } = props;

  /** Buttonn size style */
  const paddingStyle = iconOnly ? 0 : getElementSize(padding, size);
  const heightStyle = getElementSize(height, size);
  const fontSizeStyle = getFontSize(size, fontSizes);
  /** Button appearance style*/
  let bgStyle = getValFromObjKey(appearance, bg);
  let bgHoverStyle = getValFromObjKey(appearance, bgHover);
  let bgActiveStyle = getValFromObjKey(appearance, bgActive);
  let borderStyle = getValFromObjKey(appearance, bordr);
  let borderHoverStyle = getValFromObjKey(appearance, bordrHover);
  let borderActiveStyle = getValFromObjKey(appearance, bordrActive);
  let colorStyle = getValFromObjKey(appearance, text);
  // Selected values
  if (isSelected) {
    bgStyle = "B70";
    bgHoverStyle = "B70";
    bgActiveStyle = "B70";
    borderStyle = "B50";
    borderHoverStyle = "B50";
    borderActiveStyle = "B50";
    colorStyle = "N1";

    if (appearance === "danger") {
      bgStyle = "R30";
      bgHoverStyle = "R30";
      bgActiveStyle = "R30";
      borderStyle = "R40";
      borderHoverStyle = "R40";
      borderActiveStyle = "R40";
    }

    if (appearance === "warning") {
      bgStyle = "O40";
      bgHoverStyle = "O40";
      bgActiveStyle = "O40";
      borderStyle = "O50";
      borderHoverStyle = "O50";
      borderActiveStyle = "O50";
    }

    if (appearance === "clean") {
      bgStyle = "TRANSPARENT";
      bgHoverStyle = "TRANSPARENT";
      bgActiveStyle = "TRANSPARENT";
      borderStyle = "TRANSPARENT";
      borderHoverStyle = "TRANSPARENT";
      borderActiveStyle = "TRANSPARENT";
      colorStyle = "B50";
    }
  }

  const boxShadowStyle = isSelected ? "transparent" : getValFromObjKey(appearance, boxShadow);

  return css`
    appearance: none;
    cursor: pointer;
    outline: 0;
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-align: center;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    line-height: ${lineHeights[1]};
    font-family: ${fonts["normal"]};
    width: ${fluid && `100%`};
    border-radius: ${radii[2]};
    padding: ${paddingStyle};
    height: ${heightStyle};
    font-size: ${fontSizeStyle};
    border: ${appearance === "link" || appearance === "subtle" ? "none" : "0.05rem solid"};
    background: ${colors[bgStyle]};
    border-color: ${colors[borderStyle]};
    color: ${colors[colorStyle]};

    &:disabled,
    &[disabled] {
      color: ${colors["N7"]} !important;
      background: ${colors["N4"]} !important;
      border: none;
      box-shadow: none !important;
      cursor: not-allowed;
    }

    &:hover {
      background: ${colors[bgHoverStyle]};
      border-color: ${colors[borderHoverStyle]};
    }

    &:active,
    &:focus {
      background: ${colors[bgActiveStyle]};
      border-color: ${colors[borderActiveStyle]};
      box-shadow: 0 0 0 0.1rem ${colors[boxShadowStyle]};
    }

    i {
      &.icon-before {
        margin-right: ${space[2]}px;
      }
      &.icon-after {
        margin-left: ${space[2]}px;
      }
      ${iconOnly && `margin: auto ${space[2]}px !important`};
    }
  `;
}
