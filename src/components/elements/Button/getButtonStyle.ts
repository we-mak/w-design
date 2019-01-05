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
  bgActiveFocus,
  bgHover,
  bordr,
  bordrActiveFocus,
  bordrHover,
  text
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
  const backgroundStyle = getAppearanceProps(appearance, bg);
  const borderStyle = getAppearanceProps(appearance, bordr);
  const colorStyle = getAppearanceProps(appearance, text);

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
    background: ${backgroundStyle};
    border-color: ${borderStyle};
    color: ${colorStyle};

    ${loadingStyle};
    ${borderRadius};
  `;
}
