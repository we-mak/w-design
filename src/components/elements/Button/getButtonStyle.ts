import { css } from "../../../utils/styled";
import { getColorFromTheme } from "../../../utils/themeUtils";
import { padding, height } from "../../../common/themed";
import colors, {
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
  radii
} from "../../../common/theme";
import { SpinnerStyle } from "../Spinner/Spinner";

/**
 * getAppearanceProps
 * @param appearance appearance style
 * @param colors init colors
 * @param themeColors get colors from provided theme props
 * @returns style applies to each button appearance
 */
const getAppearanceProps = (
  appearance: string,
  colors: object,
  themeColors?: object
) => (themeColors ? themeColors[appearance] : colors[appearance]);

const getFontSizeProps = (
  buttonSize: "sm" | "md" | "lg",
  fontSizes: Array<string>,
  themeFontSizes?: Array<string>
) => (themeFontSizes ? themeFontSizes[buttonSize] : fontSizes[buttonSize]);

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
  const { appearance, isSelected, theme } = props;
  if (isSelected) {
    if (
      appearance === "default" ||
      appearance === "link" ||
      appearance === "primary"
    ) {
      return `
        background: ${getColorFromTheme(colors, "B70", theme)};
        border: 0.05rem solid ${getColorFromTheme(colors, "B50", theme)};
        color: ${getColorFromTheme(colors, "N1", theme)};
        &:hover,
        &:focus,
        &:active {
          background: ${getColorFromTheme(colors, "B70", theme)};
          border: 0.05rem solid ${getColorFromTheme(colors, "B50", theme)};
          color: ${getColorFromTheme(colors, "N1", theme)};
          outline: none;
          box-shadow: none;
        }
      `;
    }

    if (appearance === "danger") {
      return `
        border: 0.05rem solid ${getColorFromTheme(
          colors,
          "R40",
          theme
        )} !important;
        background: ${getColorFromTheme(colors, "R30", theme)} !important;
        color: ${getColorFromTheme(colors, "N1", theme)} !important;
        &:focus, &:active {
          box-shadow: none;
        }
      `;
    }

    if (appearance === "warning") {
      return `
        border: 0.05rem solid ${getColorFromTheme(
          colors,
          "O50",
          theme
        )} !important;
        background: ${getColorFromTheme(colors, "040", theme)} !important;
        color: ${getColorFromTheme(colors, "N1", theme)} !important;
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
  const bgDefault = getAppearanceProps(
    appearance,
    background,
    theme.background
  );
  const bgHover = getAppearanceProps(
    appearance,
    backgroundHover,
    theme.backgroundHover
  );
  const bgActive = getAppearanceProps(
    appearance,
    backgroundActive,
    theme.backgroundActive
  );
  const bgFocus = getAppearanceProps(
    appearance,
    backgroundFocus,
    theme.backgroundFocus
  );
  // border
  const borderDefault = getAppearanceProps(appearance, border, theme.border);
  const bdHover = getAppearanceProps(
    appearance,
    borderHover,
    theme.borderHover
  );
  const bdActive = getAppearanceProps(
    appearance,
    borderActive,
    theme.borderActive
  );
  const bdFocus = getAppearanceProps(
    appearance,
    borderFocus,
    theme.borderFocus
  );

  const color = getAppearanceProps(appearance, text, theme.text);

  const boxShadowColor = getAppearanceProps(
    appearance,
    boxShadow,
    theme.boxShadow
  );

  /** Variable styles*/
  const fontSizeStyle = getFontSizeProps(
    elementSize,
    fontSizes,
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
    border-radius: ${theme.radii ? theme.radii[1] : radii[1]};
    display: inline-block;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: ${width};
    border: 0.05rem solid;
    ${appearance === "link" && { border: "none" }}

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
      color: ${getColorFromTheme(colors, "N7", theme)} !important;
      background: ${getColorFromTheme(colors, "N4", theme)} !important;
      border: none;
    }

    font-size: ${fontSizeStyle};
    padding: ${paddingStyle};
    height: ${heightStyle};

    ${loadingStyle};
    ${selectedStyle};
  `;
};
