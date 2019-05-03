import React from "react";
import { Typo, Dropdown, Menu, MenuItem } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `
| Props       | type    | default | description          |
| ----------- | ------- | ------- | -------------------- |

`;

const DropdownPage = () => (
  <>
    <Typo appearance="h1">Dropdown</Typo>

    <Typo appearance="h3">Example</Typo>

    <Dropdown
      title="Dropdown"
      content={
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </Menu>
      }
    />

    <CodeBlock
      exampleCode={`
  import { Dropdown } from "w-design";

  <Dropdown
    title="Dropdown"
    content={
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu>
    }
  />
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default DropdownPage;
