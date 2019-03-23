import { css } from "styled-components";
import { ButtonProps } from "./types";
import {
  getColor,
  setColor,
  getFontSize,
  getAppearanceColor,
  getElementSize,
  padding,
  height
} from "../../../common/styleUtils/utils";
import { StyledSpinner } from "../Spinner";

const appearanceKeys = [
  "default",
  "primary",
  "warning",
  "danger",
  "success",
  "link",
  "subtle",
  "help",
  "clean"
];
// Set button colors
const bg = setColor(appearanceKeys, [
  "N3",
  "B50",
  "O30",
  "R30",
  "G30",
  "NONE",
  "NONE",
  "T30",
  "NONE"
]);
const bgHover = setColor(appearanceKeys, [
  "N4",
  "B40",
  "O20",
  "R20",
  "G20",
  "N3",
  "N2",
  "T20",
  "NONE"
]);
const bgActive = setColor(appearanceKeys, [
  "B5",
  "B60",
  "O40",
  "R40",
  "G40",
  "B5",
  "B5",
  "T40",
  "NONE"
]);
const bordr = setColor(appearanceKeys, ["N3", "B60", "O40", "R40", "G40", "", "", "T40", "NONE"]);
const bordrHover = setColor(appearanceKeys, [
  "N4",
  "B50",
  "O30",
  "R30",
  "G30",
  "",
  "",
  "T30",
  "NONE"
]);
const bordrActive = setColor(appearanceKeys, [
  "B5",
  "B70",
  "O50",
  "R50",
  "G50",
  "",
  "",
  "T50",
  "NONE"
]);
const text = setColor(appearanceKeys, ["N70", "N1", "N1", "N1", "N1", "B50", "N70", "N1", "N70"]);
const boxShadow = setColor(appearanceKeys, [
  "B50",
  "B5",
  "O10",
  "R5",
  "G5",
  "B50",
  "B50",
  "T10",
  "N1"
]);

/** Apply style to each appearance when isLoading = true */
const getLoadingState = (props: ButtonProps) => {
  const { isLoading, appearance } = props;
  if (isLoading) {
    if (appearance === "default" || appearance === "link") return StyledSpinner;

    return css`
      ${StyledSpinner};
      &::after {
        border-color: ${getColor("WHITE", props.theme.colors)};
        border-right-color: transparent;
        border-top-color: transparent;
      }
    `;
  }
  return;
};

export function getButtonStyle(props: ButtonProps) {
  const { fontSizes, lineHeights, colors, radii } = props.theme;
  const { appearance = "default", size = "md", isSelected, fluid, iconOnly } = props;

  // fluid button
  let width;
  if (fluid) width = "100%";

  /** Buttonn size style */
  const paddingStyle = iconOnly ? 0 : getElementSize(padding, size);
  const heightStyle = getElementSize(height, size);
  const fontSizeStyle = getFontSize(size, fontSizes);

  /** Button appearance style*/
  let bgStyle = getAppearanceColor(appearance, bg);
  let bgHoverStyle = getAppearanceColor(appearance, bgHover);
  let bgActiveStyle = getAppearanceColor(appearance, bgActive);
  let borderStyle = getAppearanceColor(appearance, bordr);
  let borderHoverStyle = getAppearanceColor(appearance, bordrHover);
  let borderActiveStyle = getAppearanceColor(appearance, bordrActive);
  let colorStyle = getAppearanceColor(appearance, text);
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
      bgStyle = "NONE";
      bgHoverStyle = "NONE";
      bgActiveStyle = "NONE";
      borderStyle = "NONE";
      borderHoverStyle = "NONE";
      borderActiveStyle = "NONE";
      colorStyle = "B50";
    }
  }

  const boxShadowStyle = isSelected ? "transparent" : getAppearanceColor(appearance, boxShadow);

  // Apply loading style
  const loadingStyle = getLoadingState(props);

  return css`
    appearance: none;
    cursor: pointer;
    outline: 0;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    line-height: ${lineHeights[1]};
    width: ${width};
    padding: ${paddingStyle};
    height: ${heightStyle};
    font-size: ${fontSizeStyle};
    border: ${appearance === "link" || appearance === "subtle" ? "none" : "0.05rem solid"};
    background: ${colors[bgStyle]};
    border-color: ${colors[borderStyle]};
    color: ${colors[colorStyle]};
    border-radius: ${radii[2]};

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

    &:disabled,
    &[disabled] {
      cursor: not-allowed;
      color: ${getColor("N7", colors)} !important;
      background: ${getColor("N4", colors)} !important;
      border: none;
    }

    ${loadingStyle};
  `;
}
