import { css } from "styled-components";
import { StepItemTypes } from ".";

export const getNavItemNumberStyle = ({ theme, isActive }: StepItemTypes) => {
  const color = isActive ? `#fff` : theme.colors["B50"];
  const fontWeight = isActive ? `bold` : `normal`;
  const backgroundColor = isActive ? theme.colors["B50"] : `transparent`;

  return css`
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.2rem;
    text-align: center;
    line-height: 1.3;
    border-radius: 50%;
    border: 0.05rem solid ${theme.colors["B50"]};
    color: ${color};
    font-weight: ${fontWeight};
    background-color: ${backgroundColor};
  `;
};

export const getNaveItemTextStyle = ({ theme, isActive }: StepItemTypes) => {
  const color = isActive ? theme.colors["N50"] : theme.colors["N30"];
  const fontWeight = isActive ? `bold` : `normal`;

  return css`
    margin: auto 0.2rem;
    color: ${color};
    font-weight: ${fontWeight};
  `;
};
