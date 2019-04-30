/**
 * Menu Item & elements
 * */
import * as React from "react";
import styled from "styled-components";
import { MenuItemProps } from "./types";
import { MenuContext } from "./MenuContext";
import { getMenuItemStyle } from "./Styled";

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

export const IconBefore = styled.span`
  display: inline;
  color: ${props => props.theme.colors["N30"]};
  margin: 0 0.4rem;
`;
IconBefore.displayName = "IconBefore";

const MenuItemStyled = styled.li`
  ${getMenuItemStyle}
`;
MenuItemStyled.displayName = "MenuItemComponent";

export const MenuItem = ({ children, iconBefore, after, ...rest }: MenuItemProps) => {
  const context = React.useContext(MenuContext);

  return (
    <MenuItemStyled role="menuitem" onClick={e => context.onSelectItem(e)} {...rest}>
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      {children}
      {after && <MenuItemAfter>{after}</MenuItemAfter>}
    </MenuItemStyled>
  );
};
