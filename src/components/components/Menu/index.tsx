import * as React from "react";
import styled from "styled-components";
import { MenuProps, MenuItemProps, SubMenuProps } from "./types";
import { getMenuStyle, getMenuItemStyle, getSubMenuStyle } from "./Styled";
import { Arrow } from "./Arrow";

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

const MenuItemStyled = styled.li`
  ${getMenuItemStyle}
`;
MenuItemStyled.displayName = "MenuItemComponent";

const MenuItem = ({ children, iconBefore, after, isSelected, ...rest }: MenuItemProps) => {
  return (
    <MenuItemStyled role="menuitem" {...rest}>
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      {children}
      {after && <MenuItemAfter>{after}</MenuItemAfter>}
    </MenuItemStyled>
  );
};

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

const SubList = styled.ul`
  padding: 0;
  position: relative;
  display: block;
  opacity: ${(props: SubMenuProps) => (props.isOpen ? 1 : 0)};
  transition: height 0.3s cubic-bezier(0.5, 0.045, 0.4, 1),
    opacity 0.3s cubic-bezier(0.5, 0.045, 0.4, 1);
  will-change: height;
  will-change: opacity;
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
  const [listStyle, setListStyle] = React.useState({});

  // Use sub menu title as a marker
  // to apply the result height of sub menu list
  const menuRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const getMenuHeight = () => {
    const menuNode: HTMLElement = menuRef!.current!;
    const titleNode: HTMLElement = titleRef!.current!;

    return menuNode!.scrollHeight - titleNode!.getBoundingClientRect().height;
  };

  React.useEffect(() => {
    requestAnimationFrame(() =>
      setListStyle({
        height: open ? getMenuHeight() : 0
      })
    );

    return () => setListStyle({});
  }, [open]);

  const onToggleMenu = () => {
    requestAnimationFrame(() =>
      setListStyle({
        height: open ? getMenuHeight() : 0
      })
    );

    setOpen(!open);
  };

  return (
    <SubMenuStyled ref={menuRef} {...rest}>
      <SubMenuTitle onClick={onToggleMenu} ref={titleRef}>
        {icon && <IconBefore>{icon}</IconBefore>}
        {title} <Arrow isOpen={open} />
      </SubMenuTitle>
      <SubList role="menu" isOpen={open} style={listStyle}>
        {children}
      </SubList>
    </SubMenuStyled>
  );
};
SubMenu.displayName = "SubMenu";

export default Menu;
export { MenuItem, SubMenu, MenuHeading };
