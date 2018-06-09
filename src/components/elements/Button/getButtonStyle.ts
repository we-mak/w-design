import { css } from "../../../utils/styled";
import { setColors } from "../../../utils/themeUtils";
import {
  background,
  backgroundHover,
  backgroundActive,
  backgroundFocus,
  border,
  borderHover,
  borderActive,
  borderFocus,
  text,
  boxShadow,
  fontSizes,
  padding,
  height
} from "../../../common/themed";
import { SpinnerStyle } from "../Spinner/Spinner";

/**
 * getAppearanceProps
 * @returns style applies to each button appearance
 */
const getAppearanceProps = (
  appearance: "default" | "primary" | "danger" | "warning" | "success" | "link",
  colors: Array<string>,
  themeColors: Array<string>
) => {
  const initStyle = setColors(colors);
  const providedStyle = setColors(themeColors);

  return (themeColors && providedStyle[appearance]) || initStyle[appearance];
};

const getFontSizeProps = (
  styleProperty: Function,
  buttonSize: "sm" | "md" | "lg",
  sizes?: Array<string>
) => {
  const fontSizeStyle = styleProperty(sizes);

  return fontSizeStyle[buttonSize];
};

const getSize = (padding: object, buttonSize: "sm" | "md" | "lg") =>
  padding[buttonSize];

/** Apply style to each appearance when loading props is true */
const getLoadingState = (props: any) => {
  if (props.isLoading) {
    if (props.appearance === "default" || props.appearance === "link") {
      return SpinnerStyle;
    }

    return css`
      ${SpinnerStyle};
      &::after {
        border-color: ${props.theme.colors.WHITE};
        border-right-color: transparent;
        border-top-color: transparent;
      }
    `;
  }

  return null;
};

const getSelected = (props: any) => {
  if (props.isSelected) {
    if (
      props.appearance === "default" ||
      props.appearance === "link" ||
      props.appearance === "primary"
    ) {
      return `
        background: ${props.theme.colors.B70};
        border: 0.05rem solid ${props.theme.colors.B50};
        color: ${props.theme.colors.N1};
        &:hover,
        &:focus,
        &:active {
          background: ${props.theme.colors.B70};
          border: 0.05rem solid ${props.theme.colors.B50};
          color: ${props.theme.colors.N1};
          outline: none;
          box-shadow: none;
        }
      `;
    }

    if (props.appearance === "danger") {
      return `
        border: 0.05rem solid ${props.theme.colors.R40} !important;
        background: ${props.theme.colors.R30} !important;
        color: ${props.theme.colors.N1} !important;
        &:focus, &:active {
          box-shadow: none;
        }
      `;
    }

    if (props.appearance === "warning") {
      return `
        border: 0.05rem solid ${props.theme.colors.O50} !important;
        background: ${props.theme.colors.O40} !important;
        color: ${props.theme.colors.N1} !important;
        &:focus, &:active {
          box-shadow: none;
        }
      `;
    }
  }
  return null;
};

/**
 * getButtonStyle
 * Resolves styles based on props
 * @param props button properties
 */
export const getButtonStyle = (props: any) => {
  const { theme, appearance, elementSize, fluid } = props;
  /** Button appearance style using themed*/
  // background
  const bgDefault = getAppearanceProps(appearance, background, [
    theme.colors["N3"],
    theme.colors["B50"],
    theme.colors["O30"],
    theme.colors["R30"],
    theme.colors["G30"]
  ]);
  const bgHover = getAppearanceProps(appearance, backgroundHover, [
    theme.colors["N4"],
    theme.colors["B40"],
    theme.colors["O20"],
    theme.colors["R20"],
    theme.colors["G20"],
    theme.colors["G20"]
  ]);
  const bgActive = getAppearanceProps(appearance, backgroundActive, [
    theme.colors["B5"],
    theme.colors["B60"],
    theme.colors["O40"],
    theme.colors["R40"],
    theme.colors["G40"],
    theme.colors["B5"]
  ]);
  const bgFocus = getAppearanceProps(appearance, backgroundFocus, [
    theme.colors["B5"],
    theme.colors["B60"],
    theme.colors["O40"],
    theme.colors["R40"],
    theme.colors["G40"],
    theme.colors["B5"]
  ]);
  // border
  const borderDefault = getAppearanceProps(appearance, border, [
    theme.colors["N3"],
    theme.colors["B60"],
    theme.colors["O40"],
    theme.colors["R40"],
    theme.colors["G40"]
  ]);
  const bdHover = getAppearanceProps(appearance, borderHover, [
    theme.colors["N4"],
    theme.colors["B50"],
    theme.colors["O30"],
    theme.colors["R30"],
    theme.colors["G30"]
  ]);
  const bdActive = getAppearanceProps(appearance, borderActive, [
    theme.colors["B5"],
    theme.colors["B70"],
    theme.colors["O50"],
    theme.colors["R50"],
    theme.colors["G50"]
  ]);
  const bdFocus = getAppearanceProps(appearance, borderFocus, [
    theme.colors["B5"],
    theme.colors["B70"],
    theme.colors["O50"],
    theme.colors["R50"],
    theme.colors["G50"]
  ]);

  const color = getAppearanceProps(appearance, text, [
    theme.colors["N90"],
    theme.colors["N1"],
    theme.colors["N1"],
    theme.colors["N1"],
    theme.colors["B50"]
  ]);

  const boxShadowColor = getAppearanceProps(appearance, boxShadow, [
    "rgba(0, 0, 0, 0)",
    theme.colors["B5"],
    theme.colors["O10"],
    theme.colors["R5"],
    theme.colors["G5"],
    theme.colors["B50"]
  ]);

  /** Variable styles*/
  const fontSizeStyle = getFontSizeProps(
    fontSizes,
    elementSize,
    theme.fontSizes
  );
  const paddingStyle = getSize(padding, elementSize);
  const heightStyle = getSize(height, elementSize);

  let width;
  if (fluid) width = "100%";

  const loadingStyle = getLoadingState(props);

  const selectedStyle = getSelected(props);

  return css`
    cursor: pointer;
    outline: 0;
    border-radius: ${props.theme.radii[1]};
    display: inline-block;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: ${width};
    border: 0.05rem solid;
    ${props.appearance === "link" && { border: "none" }}

    background: ${bgDefault};
    border-color: ${borderDefault};
    color: ${color};
    box-shadow: 0 0 0 0.1rem var(--box-shadow-color);

    &:hover {
      background: ${bgHover};
      border-color: ${bdHover};
    }

    &:active,
    &:focus {
      --box-shadow-color: ${boxShadowColor};
    }

    &:active {
      background: ${bgActive};
      border-color: ${bdActive};
    }

    &:focus {
      background: ${bgFocus};
      border-color: ${bdFocus};
    }

    &:disabled,
    &[disabled] {
      cursor: not-allowed;
      color: ${props.theme.colors.N7} !important;
      background: ${props.theme.colors.N4} !important;
      border: none;
    }

    font-size: ${fontSizeStyle};
    padding: ${paddingStyle};
    height: ${heightStyle};

    ${loadingStyle};
    ${selectedStyle};
  `;
};
