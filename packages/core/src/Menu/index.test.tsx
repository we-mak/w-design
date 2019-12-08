import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Provider from "../Provider";
import Icon from "../Icon";
import Menu, { MenuItem, MenuHeading, SubMenu } from "./index";

afterEach(cleanup);

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

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Menu defaultSelectedKey="1" defaultOpenKeys={["sub-1"]} fullWidth>
          <MenuItem
            key="1"
            iconBefore={<Icon className="fas fa-user" />}
            after={<div>info</div>}
          >
            Item 1
          </MenuItem>
          <MenuItem
            key="2"
            iconBefore={<Icon className="fas fa-user-astronaut" />}
          >
            Item 2
          </MenuItem>
          <MenuItem
            key="3"
            iconBefore={<Icon className="fas fa-edit" />}
            isDisabled
          >
            Item 3
          </MenuItem>
          <MenuItem
            key="4"
            iconBefore={<Icon className="fas fa-paper-plane" />}
          >
            Item 4
          </MenuItem>

          <MenuHeading>Menu heading</MenuHeading>
          <SubMenu
            key="sub-1"
            icon={<Icon className="fas fa-cog" />}
            title="Submenu title 1"
          >
            {subList1.map(item => (
              <MenuItem key={item.key}>{item.title}</MenuItem>
            ))}
          </SubMenu>

          <SubMenu
            key="sub-2"
            icon={<Icon className="fas fa-mail" />}
            title="Submenu title 2"
          >
            {subList2.map(item => (
              <MenuItem key={item.key}>{item.title}</MenuItem>
            ))}
          </SubMenu>
        </Menu>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
