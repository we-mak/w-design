import { css } from "styled-components";
import { radii } from "../../../common/styleUtils/theme";

export const getButtonStyle = () => {
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
    border: 0.05rem solid;
    border-radius: ${radii[1]};

    /* custom style */
  `;
};
