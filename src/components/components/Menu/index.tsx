import * as React from "react";
import styled from "styled-components";
import { MenuProps, MenuItemProps } from "./types";
import { getMenuStyle, getMenuItemStyle } from "./Styled";

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

const MenuItemAfter = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
`;
MenuItemAfter.displayName = "AfterItem";

const IconBefore = styled.span`
  display: inline;
  color: ${props => props.theme.colors["N30"]};
  margin: 0 0.4rem;
`;
IconBefore.displayName = "IconBefore";

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

const MenuHeading = styled.li`
  flex-grow: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 1.5;
  padding: 0 0.2rem;
  margin: 0.2rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors["N20"]};
`;
MenuHeading.displayName = "MenuHeading";

const SubMenu = () => {
  return <li>submenu</li>;
};

export default Menu;
export { MenuItem, SubMenu, MenuHeading };
