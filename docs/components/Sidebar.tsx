import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuHeading, SubMenu, Icon } from "@w-design/core";

const core = [
  {
    title: "Anchor Scroll",
    link: "/anchor"
  },
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

const baseUrl =
  process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export const Sidebar: React.FunctionComponent<any> = () => {
  const router = useRouter();

  return (
    <Menu defaultSelectedKey={router.pathname}>
      <MenuHeading>W-design</MenuHeading>
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

      <SubMenu key="core" title="Core" icon={<Icon className="fas fa-atom" />}>
        {core.map(el => (
          <MenuItem key={`core${el.link}`}>
            <Link href={`core${el.link}`}>
              <a>{el.title}</a>
            </Link>
          </MenuItem>
        ))}
      </SubMenu>
    </Menu>
  );
};
