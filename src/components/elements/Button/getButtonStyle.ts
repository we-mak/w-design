import { css } from "styled-components";
import { borderRadius } from "styled-system";
import { ButtonProps } from "./types";
import { colors, radii, fontSizes } from "../../../common/styleUtils/theme";
import {
  getColor,
  getFontSize,
  getAppearanceProps,
  getElementSize
} from "../../../common/styleUtils/utils";
import { StyledSpinner } from "../Spinner";
import {
  padding,
  height,
  bg,
  bgActive,
  bgHover,
  bordr,
  bordrActive,
  bordrHover,
  text,
  boxShadow
} from "../../../common/styleUtils/themed";

/** Apply style to each appearance when isLoading = true */
const getLoadingState = (props: ButtonProps) => {
  const { isLoading, appearance, theme } = props;
  if (isLoading) {
    if (appearance === "default" || appearance === "link") return StyledSpinner;

    return css`
      ${StyledSpinner};
      &::after {
        border-color: ${getColor(colors, "WHITE", theme)};
        border-right-color: transparent;
        border-top-color: transparent;
      }
    `;
  }
  return;
};

/**
 * @function getButtonStyle
 * @param props Props from component
 */
export function getButtonStyle(props: any) {
  const { appearance, size, fluid, isSelected, theme } = props;

  /** Buttonn size style */
  const paddingStyle = getElementSize(padding, size);
  const heightStyle = getElementSize(height, size);
  const fontSizeStyle = getFontSize(size, fontSizes);
  // fluid button
  let width;
  if (fluid) width = "100%";

  /** Button appearance style*/
  // Default values
  let bgStyle = getAppearanceProps(appearance, bg);
  let bgHoverStyle = getAppearanceProps(appearance, bgHover);
  let bgActiveStyle = getAppearanceProps(appearance, bgActive);
  let borderStyle = getAppearanceProps(appearance, bordr);
  let borderHoverStyle = getAppearanceProps(appearance, bordrHover);
  let borderActiveStyle = getAppearanceProps(appearance, bordrActive);
  let colorStyle = getAppearanceProps(appearance, text);
  // Selected values
  if (isSelected) {
    bgStyle = getColor(colors, "B70", theme);
    bgHoverStyle = getColor(colors, "B70", theme);
    bgActiveStyle = getColor(colors, "B70", theme);
    borderStyle = getColor(colors, "B50", theme);
    borderHoverStyle = getColor(colors, "B50", theme);
    borderActiveStyle = getColor(colors, "B50", theme);
    colorStyle = getColor(colors, "N1", theme);

    if (appearance === "danger") {
      bgStyle = getColor(colors, "R30", theme);
      bgHoverStyle = getColor(colors, "R30", theme);
      bgActiveStyle = getColor(colors, "R30", theme);
      borderStyle = getColor(colors, "R40", theme);
      borderHoverStyle = getColor(colors, "R40", theme);
      borderActiveStyle = getColor(colors, "R40", theme);
    }

    if (appearance === "warning") {
      bgStyle = getColor(colors, "O40", theme);
      bgHoverStyle = getColor(colors, "O40", theme);
      bgActiveStyle = getColor(colors, "O40", theme);
      borderStyle = getColor(colors, "O50", theme);
      borderHoverStyle = getColor(colors, "O50", theme);
      borderActiveStyle = getColor(colors, "O50", theme);
    }
  }

  const boxShadowStyle = isSelected
    ? "transparent"
    : getAppearanceProps(appearance, boxShadow);

  // Apply loading style
  const loadingStyle = getLoadingState(props);

  return css`
    cursor: pointer;
    outline: 0;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: ${width};
    border: ${appearance === "link" || appearance === "subtle"
      ? "none"
      : "0.05rem solid"};
    border-radius: ${theme.radii ? theme.radii[2] : radii[2]};
    padding: ${paddingStyle};
    height: ${heightStyle};
    font-size: ${fontSizeStyle};
    background: ${bgStyle};
    border-color: ${borderStyle};
    color: ${colorStyle};
    box-shadow: 0 0 0 0.1rem var(--box-shadow-color);

    &:hover {
      background: ${bgHoverStyle};
      border-color: ${borderHoverStyle};
    }

    &:active {
      background: ${bgActiveStyle};
      border-color: ${borderActiveStyle};
      --box-shadow-color: ${boxShadowStyle};
    }

    &:disabled,
    &[disabled] {
      cursor: not-allowed;
      color: ${getColor(colors, "N7", theme)} !important;
      background: ${getColor(colors, "N4", theme)} !important;
      border: none;
    }

    ${loadingStyle};
    ${borderRadius};
  `;
}
