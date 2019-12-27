/**
 * Sub Menu
 * */
import * as React from "react";
import { IconBefore } from "./MenuItem";
import { useMenu } from "./MenuContext";
import Collapse, { CollapseProps } from "../Collapse";

export interface SubMenuProps extends CollapseProps {
  eventKey?: string;
}

export const SubMenu: React.FunctionComponent<SubMenuProps> = React.memo(
  ({ title = "", icon, eventKey, children, ...rest }) => {
    const { setDefaultOpenKey } = useMenu();

    return (
      <Collapse
        title={title}
        icon={icon && <IconBefore>{icon}</IconBefore>}
        isDefaultOpen={setDefaultOpenKey(eventKey)}
        {...rest}
      >
        {React.Children.map(children!, (child: any) => {
          return React.cloneElement(child, {
            eventKey: child.key || "submenu-key"
          });
        })}
      </Collapse>
    );
  }
);
