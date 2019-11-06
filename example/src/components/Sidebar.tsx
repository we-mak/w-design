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
    title: "List",
    link: "/list"
  },
  {
    title: "Media",
    link: "/media"
  },
  {
    title: "ProgressLoader",
    link: "/progress"
  },
  {
    title: "SectionMessage",
    link: "/sectionmessage"
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
    title: "Anchor scroll",
    link: "/anchor-scroll"
  },
  {
    title: "Card",
    link: "/card"
  },
  {
    title: "Dropdown",
    link: "/dropdown"
  },
  {
    title: "Form",
    link: "/form"
  },

  {
    title: "Navbar",
    link: "/nav"
  },
  {
    title: "Modal",
    link: "/modal"
  },
  {
    title: "Menu",
    link: "/menu"
  },
  {
    title: "Push message",
    link: "/push-message"
  }
  // {
  //   title: "Upload",
  //   link: "/upload"
  // }
];

const baseUrl = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export const Sidebar: React.FunctionComponent<any> = () => {
  return (
    <Location>
      {({ location }) => {
        // console.log(location);
        return (
          <Menu defaultSelectedKey={location.pathname}>
            <MenuItem key={baseUrl + "/"}>
              <Link to={baseUrl + "/"}>Introduction</Link>
            </MenuItem>
            <MenuItem key={baseUrl + "/start"}>
              <Link to={baseUrl + "/start"}>Getting start</Link>
            </MenuItem>

            <MenuItem key={baseUrl + "/layout"}>
              <Link to={baseUrl + "/layout"}>Layout</Link>
            </MenuItem>

            <MenuHeading>Elements</MenuHeading>
            {elements.map(el => (
              <MenuItem key={baseUrl + el.link}>
                <Link to={baseUrl + el.link}>{el.title}</Link>
              </MenuItem>
            ))}
            <MenuHeading>Components</MenuHeading>
            {components.map(c => (
              <MenuItem key={baseUrl + c.link}>
                <Link to={baseUrl + c.link}>{c.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        );
      }}
    </Location>
  );
};
