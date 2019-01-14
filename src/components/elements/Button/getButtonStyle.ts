import { css } from "styled-components";
import { borderRadius } from "styled-system";
import { ButtonProps } from "./types";
import { colors, radii, fontSizes } from "../../../common/styleUtils/theme";
import {
  getColor,
  setColor,
  getFontSize,
  getAppearanceColor,
  getElementSize
} from "../../../common/styleUtils/utils";
import { StyledSpinner } from "../Spinner";

// Button, input padding style
const padding = {
  sm: "0.15rem 0.3rem",
  md: "0.35rem 0.4rem",
  lg: "0.45rem 0.6rem"
};
// Button, input height
const height = {
  sm: "1.4rem",
  md: "1.8rem",
  lg: "2rem"
};

/** Apply style to each appearance when isLoading = true */
const getLoadingState = (props: ButtonProps) => {
  const { isLoading, appearance, theme } = props;
  if (isLoading) {
    if (appearance === "default" || appearance === "link") return StyledSpinner;

    return css`
      ${StyledSpinner};
      &::after {
        border-color: ${getColor("WHITE", colors, theme)};
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
  // Set colors
  const bg = setColor(["N3", "B50", "O30", "R30", "G30", "WHITE", "WHITE", "T30"], theme);
  const bgHover = setColor(["N4", "B40", "O20", "R20", "G20", "N3", "N2", "T20"], theme);
  const bgActive = setColor(["B5", "B60", "O40", "R40", "G40", "B5", "B5", "T40"], theme);
  const bordr = setColor(["N3", "B60", "O40", "R40", "G40", "", "", "T40"]);
  const bordrHover = setColor(["N4", "B50", "O30", "R30", "G30", "", "", "T30"]);
  const bordrActive = setColor(["B5", "B70", "O50", "R50", "G50", "", "", "T50"]);
  const text = setColor(["N90", "N1", "N1", "N1", "N1", "B50", "N90", "N1"], theme);
  // Default values
  let bgStyle = getAppearanceColor(appearance, bg);
  let bgHoverStyle = getAppearanceColor(appearance, bgHover);
  let bgActiveStyle = getAppearanceColor(appearance, bgActive);
  let borderStyle = getAppearanceColor(appearance, bordr);
  let borderHoverStyle = getAppearanceColor(appearance, bordrHover);
  let borderActiveStyle = getAppearanceColor(appearance, bordrActive);
  let colorStyle = getAppearanceColor(appearance, text);
  // Selected values
  if (isSelected) {
    bgStyle = getColor("B70", colors, theme);
    bgHoverStyle = getColor("B70", colors, theme);
    bgActiveStyle = getColor("B70", colors, theme);
    borderStyle = getColor("B50", colors, theme);
    borderHoverStyle = getColor("B50", colors, theme);
    borderActiveStyle = getColor("B50", colors, theme);
    colorStyle = getColor("N1", colors, theme);

    if (appearance === "danger") {
      bgStyle = getColor("R30", colors, theme);
      bgHoverStyle = getColor("R30", colors, theme);
      bgActiveStyle = getColor("R30", colors, theme);
      borderStyle = getColor("R40", colors, theme);
      borderHoverStyle = getColor("R40", colors, theme);
      borderActiveStyle = getColor("R40", colors, theme);
    }

    if (appearance === "warning") {
      bgStyle = getColor("O40", colors, theme);
      bgHoverStyle = getColor("O40", theme);
      bgActiveStyle = getColor("O40", colors, theme);
      borderStyle = getColor("O50", colors, theme);
      borderHoverStyle = getColor("O50", colors, theme);
      borderActiveStyle = getColor("O50", colors, theme);
    }
  }

  const boxShadow = setColor(["transparent", "B5", "O10", "R5", "G5", "B50", "B50", "T50"], theme);

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
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: ${width};
    border: ${appearance === "link" || appearance === "subtle" ? "none" : "0.05rem solid"};
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
      color: ${getColor("N7", colors, theme)} !important;
      background: ${getColor("N4", colors, theme)} !important;
      border: none;
    }

    ${loadingStyle};

    ${borderRadius};
  `;
}
