import { css } from "styled-components";
import { ButtonProps } from "./types";

export const getButtonStyle = (props: ButtonProps) => {
  const { appearance, fluid } = props;
  // fluid button
  let width;
  if (fluid) width = "100%";

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
  `;
};
