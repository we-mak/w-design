import { css } from "styled-components";
import { InputFieldProps } from "./types";
import {
  getColor,
  hex2Rgba,
  getFontSize,
  getElementSize,
  padding,
  height
} from "../../../common/styleUtils/utils";

export const getInputStyle = (props: InputFieldProps) => {
  const {
    size = "md",
    fluid,
    isError,
    isValid,
    isWarning,
    theme: { colors, fontSizes, radii, lineHeights }
  } = props;

  const boderColor = () => {
    if (isWarning) return colors["O30"];
    if (isValid) return colors["G30"];
    if (isError) return colors["R30"];
    return colors["N5"];
  };

  const boderFocusColor = () => {
    if (isWarning) return colors["O30"];
    if (isValid) return colors["G30"];
    if (isError) return colors["R30"];
    return colors["B50"];
  };

  let width;
  if (fluid) width = "100%";
  const paddingStyle = getElementSize(padding, size);
  const fontSizeStyle = getFontSize(size, fontSizes);
  const heightStyle = getElementSize(height, size);

  return css`
    background: transparent;
    background-image: none;
    outline: none;
    max-width: 100%;
    display: block;
    position: relative;
    border: 0.05rem solid ${boderColor()};
    border-radius: ${radii[2]};
    color: ${colors["N70"]};
    padding: ${paddingStyle};
    font-size: ${fontSizeStyle};
    height: ${heightStyle};
    width: ${width};
    line-height: ${lineHeights[1]};
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;

    &:focus {
      box-shadow: 0 0 0 0.1rem ${hex2Rgba(boderFocusColor(), 0.2)};
      border-color: ${boderFocusColor()};
    }

    &::placeholder {
      color: ${colors["N7"]};
    }

    &:disabled,
    &[disabled] {
      cursor: not-allowed;
      color: ${getColor("N7", colors)} !important;
      background: ${getColor("N2", colors)} !important;
    }

    &[type="file"] {
      height: auto;
    }
  `;
};
