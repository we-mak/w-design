import styled from "styled-components";
import { width, height, color } from "styled-system";
import { UploadProps, UploadListProps } from "./types";

/**
 * Main upload style
 */
const getUploadContainStyle = (props: UploadProps) => {
  const { theme, uploadType } = props;

  let width = "";
  let height = `1.8rem`;
  let border = `1px solid ${theme.colors["N3"]}`;
  let borderHover = `1px solid ${theme.colors["N4"]}`;
  let backgroundColor = `${theme.colors["N3"]}`;
  let backgroundHoverColor = `${theme.colors["N4"]}`;
  let backgroundActiveColor = `${theme.colors["B5"]}`;
  let boxShadow = `0 0 0 0.1rem ${theme.colors["B50"]}`;

  if (uploadType === "picture") {
    height = `120px`;
    width = `120px`;
    border = `1px dashed ${theme.colors["N30"]}`;
    borderHover = `1px dashed ${theme.colors["B50"]}`;
    backgroundColor = `${theme.colors["N1"]}`;
    backgroundHoverColor = `${theme.colors["B0"]}`;
    backgroundActiveColor = "";
    boxShadow = "";
  }

  return `
    background: ${backgroundColor};
    border: ${border};
    color: ${theme.colors["N50"]};
    height: ${height};
    width: ${width};
    &:hover {
      border: ${borderHover};
      background-color: ${backgroundHoverColor};
    }
    &:active, &:focus {
      background-color: ${backgroundActiveColor};
      box-shadow: ${boxShadow};
    }
  `;
};

export const UploadContainer = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 0.2rem;
  margin: 0.4rem 0;
  outline: 0;
  transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${getUploadContainStyle};

  ${width};
  ${height};
  ${color};
`;
UploadContainer.displayName = "UploadContainer";

export const UploadLabel = styled.label`
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
UploadLabel.displayName = "UploadLabel";

export const UploadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
  visibility: hidden;
`;
UploadInput.displayName = "UploadInput";

/**
 * File list style
 */

const getListStyle = (props: UploadListProps) => {
  return `
   border: 0.05rem solid ${props.theme.colors["N5"]}
   `;
};

export const ListContainer = styled.div`
  display: block;
  position: relative;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background: #fff;
  width: 100%;
  ${getListStyle};
`;
ListContainer.displayName = "ListContainer";
