import * as React from "react";
import styled from "styled-components";
import { MenuProps, MenuItemProps } from "./types";
import { getMenuStyle, getMenuItemStyle, MenuItemAfter, IconBefore } from "./Styled";

const Menu: React.FunctionComponent<MenuProps> = styled(
  ({ children, className, id, fullWidth = false, width, ...rest }) => {
    return (
      <ul role="menu" className={className} id={id} {...rest}>
        {children}
      </ul>
    );
  }
)`
  ${getMenuStyle}
`;

const MenuItem = styled(
  ({ children, className, id, iconBefore, after, isSelected, ...rest }: MenuItemProps) => {
    return (
      <li role="menuitem" className={className} id={id} {...rest}>
        {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
        {children}
        {after && <MenuItemAfter>{after}</MenuItemAfter>}
      </li>
    );
  }
)`
  ${getMenuItemStyle}
`;

const SubMenu = () => {
  return <li>submenu</li>;
};

export default Menu;
export { MenuItem, SubMenu };
