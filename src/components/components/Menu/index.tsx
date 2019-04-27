import * as React from "react";
import styled from "styled-components";
import { MenuProps, MenuItemProps, SubMenuProps } from "./types";
import { getMenuStyle, getMenuItemStyle, getSubMenuStyle } from "./Styled";

const MenuStyled = styled.ul`
  ${getMenuStyle}
`;
MenuStyled.displayName = "MenuComponent";

const Menu = ({ children, className, id, fullWidth = false, width, ...rest }: MenuProps) => {
  return (
    <MenuStyled role="menu" className={className} id={id} width={width} {...rest}>
      {children}
    </MenuStyled>
  );
};

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
MenuItem.displayName = "MenuItem";

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

const SubMenuTitle = styled.div`
  padding: 0.4rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    color: ${props => props.theme.colors["B50"]};
    * {
      color: ${props => props.theme.colors["B50"]};
    }
  }
`;
SubMenuTitle.displayName = "SubMenuTitle";

const ArrowStyled = styled.span`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
  transition: transform 0.3s ${(props: SubMenuProps) => props.theme.transition[0]};
  will-change: transform;
  ${(props: SubMenuProps) => props.isOpen && `transform: rotate(-180deg);`}
`;
ArrowStyled.displayName = "ArrowComponent";

const Arrow = (props: SubMenuProps) => (
  <ArrowStyled {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
      <path
        d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z"
        fill="currentColor"
      />
    </svg>
  </ArrowStyled>
);

const SubList = styled.ul`
  padding: 0;
  display: ${(props: SubMenuProps) => (props.isOpen ? "block" : "none")};
  li {
    padding-left: 2rem;
  }
`;
SubList.displayName = "SubList";

const SubMenuStyled = styled.li`
  ${getSubMenuStyle}
`;

SubMenuStyled.displayName = "SubMenuComponent";

const SubMenu: React.FunctionComponent<SubMenuProps> = ({
  title,
  icon,
  isOpen,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <SubMenuStyled {...rest}>
      <SubMenuTitle onClick={() => setOpen(!open)}>
        {icon && <IconBefore>{icon}</IconBefore>}
        {title} <Arrow isOpen={open} />
      </SubMenuTitle>
      <SubList role="menu" isOpen={open}>
        {children}
      </SubList>
    </SubMenuStyled>
  );
};
SubMenu.displayName = "SubMenu";

export default Menu;
export { MenuItem, SubMenu, MenuHeading };
