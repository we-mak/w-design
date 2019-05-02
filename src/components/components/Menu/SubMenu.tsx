import * as React from "react";
import styled from "styled-components";
import { SubMenuProps } from "./types";
import { getSubMenuStyle } from "./Styled";
import { Arrow } from "./Arrow";
import { IconBefore } from "./MenuItem";
import Spinner from "../../elements/Spinner";
/**
 * Sub Menu
 * */
// titleSpinner
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
    opacity 0.2s cubic-bezier(0.5, 0.045, 0.4, 1);
  will-change: height;
  will-change: opacity;
  li {
    padding-left: 2rem;
  }
`;
SubList.displayName = "SubList";

// Loading
const Loader = styled(Spinner)`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
  padding: 0 0.6rem;
`;
Loader.displayName = "Loader";

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
  isLoading,
  onLoadingList,
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

    return setOpen(!open);
  };

  return (
    <SubMenuStyled ref={menuRef} {...rest}>
      <SubMenuTitle onClick={onToggleMenu} onFocus={onLoadingList} ref={titleRef}>
        {icon && <IconBefore>{icon}</IconBefore>}
        {title}
        {isLoading ? <Loader /> : <Arrow isOpen={open} />}
      </SubMenuTitle>
      <SubList role="menu" isOpen={open} style={listStyle}>
        {children}
      </SubList>
    </SubMenuStyled>
  );
};
SubMenu.displayName = "SubMenu";