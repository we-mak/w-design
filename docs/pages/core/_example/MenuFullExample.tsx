import * as React from "react";
import { Menu, MenuItem, Icon, MenuHeading, SubMenu } from "@w-design/core";

export default () => {
  const subList1 = [
    {
      key: "5",
      title: "Item 5"
    },
    {
      key: "6",
      title: "Item 6"
    },
    {
      key: "7",
      title: "Item 7"
    }
  ];

  const subList2 = [
    {
      key: "8",
      title: "Item 8"
    },
    {
      key: "9",
      title: "Item 9"
    },
    {
      key: "10",
      title: "Item 10"
    }
  ];

  return (
    <Menu defaultSelectedKey="1" defaultOpenKeys={["sub-1"]}>
      <MenuItem key="1" iconBefore={<Icon className="fas fa-user" />} after={<div>info</div>}>
        Automobile
      </MenuItem>
      <MenuItem
        key="2"
        iconBefore={<Icon className="fas fa-user-astronaut" />}
        onClick={() => alert("click")}
      >
        Click on me
      </MenuItem>
      <MenuItem key="3" iconBefore={<Icon className="fas fa-edit" />} isDisabled>
        Cell phone
      </MenuItem>
      <MenuItem key="4" iconBefore={<Icon className="fas fa-paper-plane" />}>
        Real estate & property
      </MenuItem>

      <MenuHeading>Menu heading</MenuHeading>
      <SubMenu key="sub-1" icon={<Icon className="fas fa-cog" />} title="Submenu title 1">
        {subList1.map(item => (
          <MenuItem key={item.key}>{item.title}</MenuItem>
        ))}
      </SubMenu>

      <SubMenu key="sub-2" icon={<Icon className="fas fa-mail" />} title="Submenu title 2">
        {subList2.map(item => (
          <MenuItem key={item.key}>{item.title}</MenuItem>
        ))}
      </SubMenu>
    </Menu>
  );
};
