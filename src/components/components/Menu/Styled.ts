import { css } from "styled-components";

export const MenuStyle = css`
  list-style: none;
  margin: 0;
  padding: 0.4rem;
  font-family: ${props => props.theme.fonts["normal"]};
  min-width: 180px;
  transform: translateY(0.2rem);
`;

export const MenuItemStyle = css`
  margin-top: 0;
  padding: 0 0.4rem;
  position: relative;
  text-decoration: none;
`;
