import * as React from "react";
import styled from "styled-components";
import { MenuProps, MenuItemProps } from "./types";
import { MenuStyle, MenuItemStyle, MenuItemAfter, IconBefore } from "./Styled";

const Menu = styled(({ children, className, id, ...rest }: MenuProps) => {
  return (
    <ul className={className} id={id} {...rest}>
      {children}
    </ul>
  );
})`
  ${MenuStyle}
`;

const MenuItem = styled(({ children, className, id, iconBefore, after }: MenuItemProps) => {
  return (
    <li className={className} id={id}>
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      {children}
      {after && <MenuItemAfter>{after}</MenuItemAfter>}
    </li>
  );
})`
  ${MenuItemStyle}
`;

export default Menu;
export { MenuItem };
