import styled, { css } from "styled-components";
import { hex2Rgba } from "../../../common/styleUtils/utils";
import { MenuProps, MenuItemProps } from "./types";

export const getMenuStyle = (props: MenuProps) => {
  const { theme, fullWidth, width } = props;

  const widthStyle = () => {
    if (fullWidth) {
      return `100%`;
    }
    if (width) {
      return `${width}`;
    }
    return `280px`;
  };

  return css`
    list-style: none;
    margin: 0;
    padding: 0 0.4rem;
    font-family: ${theme.fonts["normal"]};
    color: ${theme.colors["N70"]};
    min-width: 180px;
    transform: translateY(0.2rem);
    width: ${widthStyle};
  `;
};

export const getMenuItemStyle = (props: MenuItemProps) => {
  const { theme, isSelected } = props;

  return css`
    margin-top: 0;
    padding: 0.2rem;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    border-radius: ${theme.radii[1]};
    &:hover,
    &:focus {
      background-color: ${hex2Rgba(theme.colors["B5"], 0.3)};
      color: ${theme.colors["B60"]};
    }

    &:focus {
      box-shadow: 0 0 0 0.1rem ${hex2Rgba(theme.colors["B20"], 0.3)};
      outline: none;
      > a {
        color: ${theme.colors["B60"]};
      }
    }

    > * {
      padding: 0.2rem;
    }

    a {
      width: 100%;
      color: ${props => props.theme.colors["N50"]};
      &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors["B60"]};
      }
    }

    ${isSelected &&
      `
      background-color: ${hex2Rgba(theme.colors["B5"], 0.3)};
      color: ${theme.colors["B60"]};
    `}
  `;
};

export const MenuItemAfter = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
`;
MenuItemAfter.displayName = "AfterItem";

export const IconBefore = styled.span`
  display: inline;
  color: ${props => props.theme.colors["N30"]};
  margin: 0 0.4rem;
`;
IconBefore.displayName = "IconBefore";
