import * as React from "react";
import styled from "styled-components";
import { MenuProps } from "./types";
import { getMenuStyle } from "./Styled";
import { MenuItem } from "./MenuItem";
import { MenuHeading } from "./MenuHeading";
import { SubMenu } from "./SubMenu";

const MenuStyled = styled.ul`
  ${getMenuStyle}
`;
MenuStyled.displayName = "MenuContainer";

const Menu = ({ children, className, id, fullWidth = false, width, ...rest }: MenuProps) => {
  return (
    <MenuStyled role="menu" className={className} id={id} width={width} {...rest}>
      {children}
    </MenuStyled>
  );
};

export default Menu;
export { MenuItem, SubMenu, MenuHeading };
