import React from "react";
import { Menu, MenuItem, MenuHeading, SubMenu, Icon, Typo, Divider } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `
### API

`;

const MenuPage = () => {
  return (
    <>
      <h1>Menu</h1>
      <p>List of navigation items</p>
      <p />
      <Typo appearance="h3">Usage</Typo>
      <CodeBlock exampleCode={`import { Menu, MenuItem } from "w-design";`} />
      <Typo appearance="h4">Example</Typo>
      <Menu>
        <MenuItem iconBefore={<Icon className="fas fa-user" />} after={<div>info</div>} isSelected>
          Item 1
        </MenuItem>
        <MenuItem iconBefore={<Icon className="fas fa-user-astronaut" />}>Item 2</MenuItem>
        <MenuItem iconBefore={<Icon className="fas fa-edit" />}>Item 3</MenuItem>
        <MenuItem iconBefore={<Icon className="fas fa-paper-plane" />}>Item 4</MenuItem>
        <Divider customHTMLtag="li" />
        <MenuHeading>Menu heading</MenuHeading>
        <SubMenu icon={<Icon className="fas fa-cog" />} title="Submenu title">
          <MenuItem>Item 5</MenuItem>
          <MenuItem>Item 6</MenuItem>
          <MenuItem>Item 7</MenuItem>
        </SubMenu>
      </Menu>

      <CodeBlock
        exampleCode={`<Menu>
  <MenuItem iconBefore={<Icon className="fas fa-user" />}>Item 1</MenuItem>
  <MenuItem>Item 2</MenuItem>
</Menu>`}
      />
      <p />
      <ReactMarkdown source={api} />
    </>
  );
};

export default MenuPage;
