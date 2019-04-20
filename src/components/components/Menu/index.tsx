import * as React from "react";
import styled from "styled-components";
import { MenuProps, MenuItemProps } from "./types";
import { MenuStyle, MenuItemStyle } from "./Styled";

const Menu = styled(({ children, ...rest }: MenuProps) => {
  return <ul {...rest}>{children}</ul>;
})`
  ${MenuStyle}
`;

const MenuItem = styled(({ children }: MenuItemProps) => {
  return <li>{children}</li>;
})`
  ${MenuItemStyle}
`;

export default Menu;
export { MenuItem };
