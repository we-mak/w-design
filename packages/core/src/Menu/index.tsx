import * as React from "react";
import styled from "styled-components";
import { MenuContext } from "./MenuContext";
import { getMenuStyle } from "./Styled";
import {
  MenuProps,
  MenuItemProps,
  SubMenuProps,
  MenuContextProps
} from "./types";
// import to export
import { MenuItem } from "./MenuItem";
import { MenuHeading } from "./MenuHeading";
import { SubMenu } from "./SubMenu";

// TODO:
// use ref on child
// add onOpenChange to call when open and close submenu
// add onSelect to have the callback when menu Item is selected

const MenuStyled = styled.ul`
  ${getMenuStyle}
`;
MenuStyled.displayName = "MenuContainer";

const Menu = (props: MenuProps) => {
  const {
    children,
    fullWidth = false,
    width,
    defaultSelectedKey,
    defaultOpenKeys = [],
    ...rest
  } = props;

  const [selectedKey, setSelectedKey] = React.useState(defaultSelectedKey);
  const [openKeys, setOpenKeys] = React.useState(defaultOpenKeys);

  const value = React.useMemo(() => {
    return {
      selectedKey,
      setSelectedKey,
      openKeys,
      setOpenKeys,
      defaultOpenKeys
    };
  }, [selectedKey, openKeys]);

  return (
    <MenuContext.Provider value={value}>
      <MenuStyled role="menu" width={width} {...rest}>
        {React.Children.map(children!, (child: any) => {
          return React.cloneElement(child, {
            eventKey: child.key || "menu-key"
          });
        })}
      </MenuStyled>
    </MenuContext.Provider>
  );
};

export default Menu;
export {
  MenuItem,
  SubMenu,
  MenuHeading,
  MenuProps,
  MenuItemProps,
  SubMenuProps,
  MenuContextProps
};
