import React from "react";
import { Menu, MenuItem, MenuHeading } from "w-design";
import { Link, Location } from "@reach/router";

const elements = [
  {
    title: "Avatar",
    link: "/avatar"
  },
  {
    title: "Button",
    link: "/button"
  },
  {
    title: "Spinner",
    link: "/spinner"
  },
  {
    title: "Typo",
    link: "/typo"
  }
];

const components = [
  {
    title: "Card",
    link: "card"
  },
  {
    title: "Dropdown",
    link: "dropdown"
  },
  {
    title: "Navbar",
    link: "nav"
  },
  {
    title: "Modal",
    link: "modal"
  },
  {
    title: "Form",
    link: "form"
  },
  {
    title: "Menu",
    link: "menu"
  }
];

export const Sidebar: React.FunctionComponent<any> = () => {
  return (
    <Location>
      {({ location }) => {
        console.log(location);
        return (
          <Menu defaultSelectedKey={location.pathname}>
            <MenuItem key="/">
              <Link to="/">Introduction</Link>
            </MenuItem>
            <MenuItem key="/start">
              <Link to="/start">Getting start</Link>
            </MenuItem>

            <MenuItem key="/layout">
              <Link to="/layout">Layout</Link>
            </MenuItem>

            <MenuHeading>Elements</MenuHeading>
            {elements.map(el => (
              <MenuItem key={el.link}>
                <Link to={el.link}>{el.title}</Link>
              </MenuItem>
            ))}
            <MenuHeading>Components</MenuHeading>
            {components.map(c => (
              <MenuItem key={c.link}>
                <Link to={c.link}>{c.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        );
      }}
    </Location>
  );
};
