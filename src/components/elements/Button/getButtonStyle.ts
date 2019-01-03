import { css } from "styled-components";
import { borderRadius } from "styled-system";
import { ButtonProps } from "./types";
import { colors, radii } from "../../../common/styleUtils/theme";
import { padding, height } from "../../../common/styleUtils/themed";
import { getColorFromTheme } from "../../../common/styleUtils/utils";
import { StyledSpinner } from "../Spinner";

function getSize(styleProperty: object, size?: "sm" | "md" | "lg") {
  return styleProperty[size || "md"];
}

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
  const { appearance, size, fluid } = props;
  // Set button size
  const paddingStyle = getSize(padding, size);
  const heightStyle = getSize(height, size);
  // fluid button
  let width;
  if (fluid) width = "100%";

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
    border-radius: ${radii[2]};
    padding: ${paddingStyle};
    height: ${heightStyle};

    ${loadingStyle};

    ${borderRadius};
  `;
}
