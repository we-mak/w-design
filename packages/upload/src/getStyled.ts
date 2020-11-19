import { css } from "styled-components";
import { width, height, color } from "styled-system";

/**
 * Upload style
 */
export const getUploadContainStyle = ({ theme }: { theme: any }) => {
  return css`
    display: inline-block;
    position: relative;
    border-radius: 0.2rem;
    margin: 0.4rem 0;
    outline: 0;
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    background: ${theme.colors["N3"]};
    border: 1px solid ${theme.colors["N3"]};
    color: ${theme.colors["N50"]};
    height: 1.8rem;

    ${width};
    ${height};
    ${color};

    &:hover {
      border: 1px solid ${theme.colors["N4"]};
      background-color: ${theme.colors["N4"]};
    }
    &:active,
    &:focus {
      background-color: ${theme.colors["B5"]};
      box-shadow: 0 0 0 0.1rem ${theme.colors["B50"]};
    }
  `;
};

export const labelStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  text-align: center;
  position: relative;
  display: block;
  padding: 0.4rem;
  cursor: pointer;
  span {
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const inputStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
  visibility: hidden;
`;
