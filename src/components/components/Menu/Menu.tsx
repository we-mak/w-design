import * as React from "react";
import styled from "styled-components";
import { MenuProps } from "./types";

const MenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.4rem;
  font-family: ${props => props.theme.fonts["normal"]};
  min-width: 180px;
  transform: translateY(0.2rem);
`;

const Menu = (props: MenuProps) => {
  const { children, ...rest } = props;

  return <MenuWrapper {...rest}>{children}</MenuWrapper>;
};

export default Menu;
