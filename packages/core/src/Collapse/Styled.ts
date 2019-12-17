import { css } from "styled-components";

export const getCollapseContainerStyle = () => {
  return css`
    width: 100%;
    display: block;
    position: relative;
    will-change: transform;
    &:hover {
      cursor: pointer;
    }
  `;
};