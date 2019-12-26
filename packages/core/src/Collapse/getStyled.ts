import { css } from "styled-components";
import { ContentProps } from ".";

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

export const getCollapseTitleStyle = () => css`
  padding: 0.4rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  &:hover {
    color: ${props => props.theme.colors["B50"]};
    * {
      color: ${props => props.theme.colors["B50"]};
    }
  }
`;

export const getLoaderStyle = () => css`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
  padding: 0 0.6rem;
`;

export const getContentStyle = ({ height }: ContentProps) => {
  return css`
    padding: 0.4rem;
    position: relative;
    display: block;
    height: ${height}px;
    opacity: ${height && height > 0 ? 1 : 0};
    transition: height 120ms cubic-bezier(0.5, 0.045, 0.4, 1),
      opacity 420ms cubic-bezier(0.5, 0.045, 0.4, 1);
    will-change: opacity;
    li {
      padding-left: 2rem;
    }
  `;
};
