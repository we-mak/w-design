import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuHeading } from "@w-design/core";

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
  },
  {
    title: "Upload",
    link: "/upload"
  }
];

const baseUrl =
  process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export const Sidebar: React.FunctionComponent<any> = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Menu defaultSelectedKey="">
      <MenuItem key={baseUrl + "/"}>
        <Link href={baseUrl + "/"}>
          <a>Introduction</a>
        </Link>
      </MenuItem>
      <MenuItem key={baseUrl + "/start"}>
        <Link href={baseUrl + "/start"}>
          <a>Getting start</a>
        </Link>
      </MenuItem>

      <MenuItem key={baseUrl + "/layout"}>
        <Link href={baseUrl + "/layout"}>
          <a>Layout</a>
        </Link>
      </MenuItem>

      <MenuHeading>Elements</MenuHeading>
      {elements.map(el => (
        <MenuItem key={baseUrl + el.link}>
          <Link href={baseUrl + el.link}>
            <a>{el.title}</a>
          </Link>
        </MenuItem>
      ))}
      <MenuHeading>Components</MenuHeading>
      {components.map(c => (
        <MenuItem key={baseUrl + c.link}>
          <Link href={baseUrl + c.link}>
            <a>{c.title}</a>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};
