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

const getSelected = (props: any) => {
  const { appearance, isSelected, theme } = props;

  if (isSelected) {
    if (appearance === "danger")
      return css`
        border-color: ${getColor(colors, "R40", theme)};
        background: ${getColor(colors, "R30", theme)};
        &:hover,
        &:focus,
        &:active {
          box-shadow: none;
          border-color: ${getColor(colors, "R40", theme)};
          background: ${getColor(colors, "R30", theme)};
        }
      `;

    if (appearance === "warning")
      return css`
        border-color: ${getColor(colors, "O50", theme)};
        background: ${getColor(colors, "O40", theme)};
        &:hover,
        &:focus,
        &:active {
          box-shadow: none;
          border-color: ${getColor(colors, "O50", theme)};
          background: ${getColor(colors, "O40", theme)};
        }
      `;

    return css`
      background: ${getColor(colors, "B70", theme)};
      border-color: ${getColor(colors, "B50", theme)};
      color: ${getColor(colors, "N1", theme)};
      &:hover,
      &:focus,
      &:active {
        background: ${getColor(colors, "B70", theme)};
        border-color: ${getColor(colors, "B50", theme)};
        color: ${getColor(colors, "N1", theme)};
        outline: none;
        box-shadow: none;
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
  const { appearance, size, fluid, theme } = props;

  /** Buttonn size style */
  const paddingStyle = getElementSize(padding, size);
  const heightStyle = getElementSize(height, size);
  const fontSizeStyle = getFontSize(size, fontSizes);
  // fluid button
  let width;
  if (fluid) width = "100%";

  /** Button appearance style*/
  const bgStyle = getAppearanceProps(appearance, bg);
  const bgHoverStyle = getAppearanceProps(appearance, bgHover);
  const bgActiveStyle = getAppearanceProps(appearance, bgActive);
  const borderStyle = getAppearanceProps(appearance, bordr);
  const borderHoverStyle = getAppearanceProps(appearance, bordrHover);
  const borderActiveStyle = getAppearanceProps(appearance, bordrActive);
  const colorStyle = getAppearanceProps(appearance, text);
  const boxShadowStyle = getAppearanceProps(appearance, boxShadow);

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
    box-shadow: 0 0 0 0.1rem var(--box-shadow-color);
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
    ${getSelected(props)};

    ${loadingStyle};
    ${borderRadius};
  `;
}
