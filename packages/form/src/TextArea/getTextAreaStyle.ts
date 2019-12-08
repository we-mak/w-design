import { css } from "styled-components";
import { hex2Rgba } from "@w-design/helpers";
import { TextAreaProps } from "./types";

export const getTextAreaStyle = (props: TextAreaProps) => {
  const {
    isError,
    isValid,
    isWarning,
    theme: { colors, radii },
    fluid
  } = props;

  let width;
  if (fluid) width = "100%";

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

  return css`
    appearance: none;
    background: transparent;
    background-image: none;
    padding: 0.25rem 0.4rem;
    outline: 0;
    line-height: 1.2rem;
    width: ${width};
    max-width: 100%;
    border-radius: ${radii[2]};
    border: 0.05rem solid ${boderColor()};

    &:focus {
      box-shadow: 0 0 0 0.1rem ${hex2Rgba(boderFocusColor(), 0.2)};
      border-color: ${boderFocusColor()};
    }
  `;
};
