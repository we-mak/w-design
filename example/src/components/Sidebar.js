import React from "react";
import { Menu, MenuItem, MenuHeading } from "w-design";
import { Link } from "@reach/router";

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
  }
];

const components = [
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

export const Sidebar = () => {
  return (
    <Menu>
      <MenuItem>
        <Link to="/">Introduction</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/start">Getting start</Link>
      </MenuItem>

      <MenuItem>
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
};
