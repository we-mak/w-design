import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuHeading, SubMenu, Icon } from "@w-design/core";

const core = [
  {
    title: "Provider",
    link: "/core/provider"
  },
  {
    title: "Portal",
    link: "/core/portal"
  },
  {
    title: "Anchor Scroll",
    link: "/core/anchor"
  },
  {
    title: "Avatar",
    link: "/core/avatar"
  },
  {
    title: "Avatar Group",
    link: "/core/avatar-group"
  },
  {
    title: "Box",
    link: "/core/box"
  },
  {
    title: "Breadcrumbs",
    link: "/core/breadcrumbs"
  },
  {
    title: "Button",
    link: "/core/button"
  },
  {
    title: "Card",
    link: "/core/card"
  },
  {
    title: "Collapsible",
    link: "/core/collapsible"
  },
  {
    title: "Comment",
    link: "/core/comment"
  },
  {
    title: "Container",
    link: "/core/container"
  },
  {
    title: "Custom tag",
    link: "/core/customtag"
  },
  {
    title: "Divider",
    link: "/core/divider"
  },
  {
    title: "Drawer",
    link: "/core/drawer"
  },
  {
    title: "Empty view",
    link: "/core/emptyview"
  },
  {
    title: "Flexbox",
    link: "/core/flexbox"
  },
  {
    title: "Media",
    link: "/core/media"
  },
  {
    title: "List",
    link: "/core/list"
  },
  {
    title: "Menu",
    link: "/core/menu"
  },
  {
    title: "Modal",
    link: "/core/modal"
  },
  {
    title: "Navbar",
    link: "/core/navbar"
  },
  {
    title: "ProgressLoader",
    link: "/core/progress"
  },
  {
    title: "SectionMessage",
    link: "/core/sectionmessage"
  },
  {
    title: "Spinner",
    link: "/core/spinner"
  },
  {
    title: "Typo",
    link: "/core/typo"
  }
];

const SidebarWrapper = styled.aside`
  display: block;
  position: fixed;
  height: 100%;
  background: white;
  width: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 80px;
  bottom: 0.5rem;
  top: 0;
`;
SidebarWrapper.displayName = "SidebarWrapper";

export const Sidebar: React.FunctionComponent<any> = () => {
  const router = useRouter();

  return (
    <SidebarWrapper>
      <Menu defaultSelectedKey={router.pathname}>
        <MenuHeading>W-design</MenuHeading>
        <MenuItem key="/">
          <Link href="/">
            <a>Introduction</a>
          </Link>
        </MenuItem>

        <MenuItem key="/start">
          <Link href="/start">
            <a>Getting start</a>
          </Link>
        </MenuItem>

        <MenuHeading>UI Packages</MenuHeading>
        <SubMenu
          key="core"
          title="Core components"
          icon={<Icon className="fas fa-atom" />}
        >
          {core.map(el => (
            <MenuItem key={el.link}>
              <Link href={el.link}>
                <a>{el.title}</a>
              </Link>
            </MenuItem>
          ))}
        </SubMenu>

        <MenuHeading>Hooks</MenuHeading>
        <MenuItem key="/clickoutside">
          <Link href="/clickoutside">
            <a>useClickOutside</a>
          </Link>
        </MenuItem>
        <MenuHeading>Utilities</MenuHeading>
      </Menu>
    </SidebarWrapper>
  );
};
