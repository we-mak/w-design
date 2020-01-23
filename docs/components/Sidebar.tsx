import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuHeading, SubMenu, Icon } from "@w-design/core";

const core = [
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
    title: "Badge",
    link: "/core/badge"
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
    title: "Collapse",
    link: "/core/collapse"
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
    title: "Dropdown",
    link: "/core/dropdown"
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
    title: "Portal",
    link: "/core/portal"
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
    title: "PushMessage",
    link: "/core/pushmessage"
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
    title: "Tabs",
    link: "/core/tabs"
  },
  {
    title: "Typo",
    link: "/core/typo"
  }
];

const form = [
  {
    title: "Introduction",
    link: "/form/intro"
  },
  {
    title: "Input Field",
    link: "/form/inputfield"
  },
  {
    title: "Input Form",
    link: "/form/inputform"
  },
  {
    title: "Label",
    link: "/form/label"
  },
  {
    title: "Radio",
    link: "/form/radio"
  },
  {
    title: "Checkbox",
    link: "/form/checkbox"
  },
  {
    title: "TextArea",
    link: "/form/textarea"
  },
  {
    title: "FormGroup",
    link: "/form/formgroup"
  },
  {
    title: "Form hooks",
    link: "/form/hooks"
  }
];

const Wrapper = styled.aside`
  display: block;
  position: fixed;
  height: 100%;
  background: white;
  width: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  bottom: 0.5rem;
  top: 78px;
`;

export const Sidebar: React.FunctionComponent<any> = () => {
  const { pathname } = useRouter();

  return (
    <Wrapper>
      <Menu defaultSelectedKey={pathname} defaultOpenKeys={[pathname.split("/")[1]]}>
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
        <SubMenu key="core" title="Core components" icon={<Icon className="fas fa-atom" />}>
          {core.map(el => (
            <MenuItem key={el.link}>
              <Link href={el.link}>
                <a>{el.title}</a>
              </Link>
            </MenuItem>
          ))}
        </SubMenu>

        <SubMenu key="form" title="Form" icon={<Icon className="fas fa-list" />}>
          {form.map(el => (
            <MenuItem key={el.link}>
              <Link href={el.link}>
                <a>{el.title}</a>
              </Link>
            </MenuItem>
          ))}
        </SubMenu>

        <MenuItem key="/upload">
          <Link href="/upload">
            <a>Upload</a>
          </Link>
        </MenuItem>

        <MenuItem key="/Masonry">
          <Link href="/masonry">
            <a>Masonry</a>
          </Link>
        </MenuItem>

        <MenuHeading>Hooks</MenuHeading>
        <MenuItem key="/clickoutside">
          <Link href="/clickoutside">
            <a>click outside</a>
          </Link>
        </MenuItem>
        <MenuHeading>Utilities</MenuHeading>
      </Menu>
    </Wrapper>
  );
};
