import * as React from "react";
import styled from "styled-components";
import { SubMenuProps } from "./types";
import { getSubMenuStyle } from "./Styled";
import { Arrow } from "./Arrow";
import { IconBefore } from "./MenuItem";
/**
 * Sub Menu
 * */
// title
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
// list
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

/**
 * Submenu Container
 */
const SubMenuStyled = styled.li`
  ${getSubMenuStyle}
`;
SubMenuStyled.displayName = "SubMenuComponent";

export const SubMenu: React.FunctionComponent<SubMenuProps> = ({
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
