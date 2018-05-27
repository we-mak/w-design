import { css } from "../../../utils/styled";
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
 * @param styleProperty style property
 * @param appearance apperance button style props
 * @returns style applies to each button appearance
 */

const getAppearanceProps = (
  styleProperty: Function,
  appearance?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "link",
  colors?: object
) => {
  if (!appearance) return null;
  const appearanceStyle = styleProperty(colors);

  return appearanceStyle[appearance];
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
  const bgDefault = getAppearanceProps(background, appearance, theme.colors);
  const bgHover = getAppearanceProps(backgroundHover, appearance, theme.colors);
  const bgActive = getAppearanceProps(
    backgroundActive,
    appearance,
    theme.colors
  );
  const bgFocus = getAppearanceProps(backgroundFocus, appearance, theme.colors);
  // border
  const borderDefault = getAppearanceProps(border, appearance, theme.colors);
  const bdHover = getAppearanceProps(borderHover, appearance, theme.colors);
  const bdActive = getAppearanceProps(borderActive, appearance, theme.colors);
  const bdFocus = getAppearanceProps(borderFocus, appearance, theme.colors);

  const color = getAppearanceProps(text, appearance, theme.colors);
  const shadow = getAppearanceProps(boxShadow, appearance, theme.colors);

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

    &:hover {
      background: ${bgHover};
      border-color: ${bdHover};
    }

    &:active,
    &:focus {
      box-shadow: ${shadow};
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
