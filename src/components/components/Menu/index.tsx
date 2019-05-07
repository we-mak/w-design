import * as React from "react";
import styled from "styled-components";
import { MenuProps } from "./types";
import { getMenuStyle } from "./Styled";
import { MenuContext } from "./MenuContext";
// import to export
import { MenuItem } from "./MenuItem";
import { MenuHeading } from "./MenuHeading";
import { SubMenu } from "./SubMenu";

const MenuStyled = styled.ul`
  ${getMenuStyle}
`;
MenuStyled.displayName = "MenuContainer";

const Menu = ({
  children,
  fullWidth = false,
  width,
  defaultSelectedKey,
  defaultOpenKeys,
  ...rest
}: MenuProps) => {
  const [selectedKey, setSelectedKey] = React.useState(defaultSelectedKey);

  const value = React.useMemo(() => {
    return { selectedKey, setSelectedKey, defaultOpenKeys };
  }, [selectedKey]);

  return (
    <MenuContext.Provider value={value} {...rest}>
      <MenuStyled role="menu" width={width}>
        {React.Children.map(children!, (child: any) => {
          return React.cloneElement(child, { eventKey: child.key || "menu-key" });
        })}
      </MenuStyled>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuItem, SubMenu, MenuHeading };
