import { css } from "styled-components";
import { width, height, color } from "styled-system";
import { UploadProps } from "./Upload";
import { UploadListProps } from "./FileList";

/**
 * Main upload style
 */
export const getUploadContainStyle = (props: UploadProps) => {
  const { theme } = props;

  let containWidth = "";
  let containHeight = `1.8rem`;
  let border = `1px solid ${theme.colors["N3"]}`;
  let borderHover = `1px solid ${theme.colors["N4"]}`;
  let backgroundColor = `${theme.colors["N3"]}`;
  let backgroundHoverColor = `${theme.colors["N4"]}`;
  let backgroundActiveColor = `${theme.colors["B5"]}`;
  let boxShadow = `0 0 0 0.1rem ${theme.colors["B50"]}`;

  // if (uploadType === "picture") {
  //   height = `120px`;
  //   width = `120px`;
  //   border = `1px dashed ${theme.colors["N30"]}`;
  //   borderHover = `1px dashed ${theme.colors["B50"]}`;
  //   backgroundColor = `${theme.colors["N1"]}`;
  //   backgroundHoverColor = `${theme.colors["B0"]}`;
  //   backgroundActiveColor = "";
  //   boxShadow = "";
  // }

  return css`
    display: inline-block;
    position: relative;
    border-radius: 0.2rem;
    margin: 0.4rem 0;
    outline: 0;
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    background: ${backgroundColor};
    border: ${border};
    color: ${theme.colors["N50"]};
    height: ${containHeight};
    width: ${containWidth};

    ${width};
    ${height};
    ${color};

    &:hover {
      border: ${borderHover};
      background-color: ${backgroundHoverColor};
    }
    &:active,
    &:focus {
      background-color: ${backgroundActiveColor};
      box-shadow: ${boxShadow};
    }
  `;
};

/**
 * File list style
 */

export const getListStyle = (props: UploadListProps) => {
  return css`
    display: block;
    position: relative;
    padding: 0.4rem;
    border-radius: 0.2rem;
    background: #fff;
    width: 100%;
    border: 0.05rem solid ${props.theme.colors["N5"]};
  `;
};
