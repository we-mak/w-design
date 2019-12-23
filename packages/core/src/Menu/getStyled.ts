import { css } from "styled-components";
import { hex2Rgba } from "@w-design/helpers";
import { MenuProps } from ".";
import { MenuItemProps } from "./MenuItem";

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
    padding: 0.4rem;
    background: ${theme.colors["WHITE"]};
    font-family: ${theme.fonts["normal"]};
    color: ${theme.colors["N70"]};
    min-width: 180px;
    transform: translateY(0.2rem);
    width: ${widthStyle};
  `;
};

export const getMenuItemStyle = (props: MenuItemProps) => {
  const { theme, isSelected, isDisabled } = props;

  return css`
    margin-top: 0;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    border-radius: ${theme.radii[1]};
    transition: all 0.09s linear;
    ${isDisabled
      ? `
    background-color: ${hex2Rgba(theme.colors["N10"], 0.3)};
    &:hover {
      cursor: not-allowed;
    }
    opacity: .5;
    `
      : `
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &:focus {
      background-color: ${hex2Rgba(theme.colors["B5"], 0.3)};
      color: ${theme.colors["B60"]};
    }
    `}

    &:focus,
    &:active {
      ${!isDisabled && `box-shadow: 0 0 0 0.1rem ${hex2Rgba(theme.colors["B20"], 0.5)}`};
      outline: none;
      > a {
        color: ${theme.colors["B60"]};
      }
    }

    > * {
      padding: 0.4rem;
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

export const getSubMenuStyle = () => {
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
