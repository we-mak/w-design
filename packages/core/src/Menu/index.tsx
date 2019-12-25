import * as React from "react";
import styled from "styled-components";
import { MenuContext } from "./MenuContext";
import { getMenuStyle } from "./getStyled";
import { GlobProps } from "../common/props";

// export elements
export { MenuItem } from "./MenuItem";
export { MenuHeading } from "./MenuHeading";
export { SubMenu } from "./SubMenu";

export interface MenuProps extends GlobProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  width?: string | number;
  // set default selected key
  defaultSelectedKey?: string | number;
  // get key is selecting
  selectedKey?: string | number;
  // set default open sub menu keys
  defaultOpenKeys?: string[] | number[];
  // open keys list
  openKeys?: string[] | number[];
  // open submenu
  onOpenKeyChange?: (keys?: string[] | number[]) => void;
}

// TODO:
// use ref on child
// add onOpenChange to call when open and close submenu
// add onSelect to have the callback when menu Item is selected

const Container = styled.ul`
  ${getMenuStyle}
`;

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
      <Container role="menu" width={width} {...rest}>
        {React.Children.map(children!, (child: any) => {
          return React.cloneElement(child, {
            eventKey: child.key || "menu-key"
          });
        })}
      </Container>
    </MenuContext.Provider>
  );
};

export default Menu;
