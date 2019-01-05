import { css } from "styled-components";
import { borderRadius } from "styled-system";
import { ButtonProps } from "./types";
import { colors, radii } from "../../../common/styleUtils/theme";
import { getColorFromTheme } from "../../../common/styleUtils/utils";
import { StyledSpinner } from "../Spinner";
import {
  padding,
  height,
  bg,
  bgActiveFocus,
  bgHover,
  bordr,
  bordrActiveFocus,
  bordrHover
} from "../../../common/styleUtils/themed";

/**
 * getAppearanceProps
 * @param appearance appearance style
 * @param colors default initial colors
 * @param themeColors get colors from provided theme props
 * @returns style applies to each button appearance
 */
const getAppearanceProps = (
  appearance: string,
  colors: object,
  themeColors?: object
) => (themeColors ? themeColors[appearance] : colors[appearance]);

//
const getSize = (styleProperty: object, size?: "sm" | "md" | "lg") =>
  styleProperty[size || "md"];

/** Apply style to each appearance when loading props is true */
const getLoadingState = (props: ButtonProps) => {
  const { isLoading, appearance, theme } = props;
  if (isLoading) {
    if (appearance === "default" || appearance === "link") return StyledSpinner;

    return css`
      ${StyledSpinner};
      &::after {
        border-color: ${getColorFromTheme(colors, "WHITE", theme)};
        border-right-color: transparent;
        border-top-color: transparent;
      }
    `;
  }

  return;
};

export function getButtonStyle(props: ButtonProps) {
  const { appearance, size, fluid, theme } = props;

  // Set button size
  const paddingStyle = getSize(padding, size);
  const heightStyle = getSize(height, size);
  // fluid button
  let width;
  if (fluid) width = "100%";

  /** Button appearance style*/
  // const background = getAppearanceProps(appearance, bg, )
  console.log(bg);

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

    ${loadingStyle};

    ${borderRadius};
  `;
}
