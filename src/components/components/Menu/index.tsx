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

const Menu = ({ children, fullWidth = false, width, defaultSelectedKey, ...rest }: MenuProps) => {
  const [selectedKey, setSelectedKey] = React.useState("");

  const handleSelectItem = (newKey: string) => setSelectedKey(newKey);

  return (
    <MenuContext.Provider
      value={{
        defaultSelectedKey: defaultSelectedKey,
        selectedKey: selectedKey,
        onSelectItem: handleSelectItem
      }}
    >
      <MenuStyled role="menu" width={width} {...rest}>
        {children}
      </MenuStyled>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuItem, SubMenu, MenuHeading };
