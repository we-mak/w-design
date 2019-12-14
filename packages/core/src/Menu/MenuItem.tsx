/**
 * Menu Item & elements
 * */
import * as React from "react";
import styled from "styled-components";
import { useMenu } from "./MenuContext";
import { getMenuItemStyle } from "./Styled";
import { GlobProps } from "../common/props";

export interface MenuItemProps extends GlobProps {
  eventKey?: string;
  children?: any;
  after?: React.ReactChild | React.ReactChild[];
  iconBefore?: React.ReactChild;
  isSelected?: boolean;
  tabIndex?: number;
  isDisabled?: boolean;
}

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

export const MenuItem = ({
  children,
  iconBefore,
  after,
  eventKey,
  isDisabled,
  ...rest
}: MenuItemProps) => {
  const { selectedKey, onSelectItem } = useMenu();

  return (
    <MenuItemStyled
      role="menuitem"
      onClick={() => {
        if (isDisabled) return;
        if (eventKey) {
          return onSelectItem(eventKey);
        }
        return;
      }}
      isSelected={selectedKey === eventKey && true}
      isDisabled={isDisabled}
      {...rest}
    >
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      {children}
      {after && <MenuItemAfter>{after}</MenuItemAfter>}
    </MenuItemStyled>
  );
};
