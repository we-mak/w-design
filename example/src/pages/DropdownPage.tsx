import * as React from "react";
import { Typo, Dropdown, Menu, MenuItem, ButtonGroup } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `
| Props       | type    | default | description          |
| ----------- | ------- | ------- | -------------------- |

`;

const FirstExample = () => (
  <Dropdown
    title="Dropdown"
    content={
      <Menu>
        <MenuItem key="1">Item 1</MenuItem>
        <MenuItem key="2">Item 2</MenuItem>
        <MenuItem key="3">Item 3</MenuItem>
        <MenuItem key="4">Item 4</MenuItem>
      </Menu>
    }
  />
);

const DropdownPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Dropdown</Typo>
    <p>Button and menu combination</p>
    <Typo appearance="h3">Example</Typo>
    <FirstExample />
    <CodeBlock
      exampleCode={`
  import { Dropdown } from "w-design";

  <Dropdown
    title="Dropdown"
    content={
      <Menu>
        <MenuItem key="1">Item 1</MenuItem>
        <MenuItem key="2">Item 2</MenuItem>
        <MenuItem key="3">Item 3</MenuItem>
        <MenuItem key="4">Item 4</MenuItem>
      </Menu>
    }
  />
    `}
    />
    <ButtonGroup>
      <Dropdown
        title="Default"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
      />

      <Dropdown
        title="Bottom Center"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
        position="bottomCenter"
      />

      <Dropdown
        title="Bottom Right"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
        position="bottomRight"
      />

      <Dropdown
        title="Top Left"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
        position="topLeft"
      />

      <Dropdown
        title="Top Right"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
        position="topRight"
      />

      <Dropdown
        title="Top Center"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
        position="topCenter"
      />

      <Dropdown
        appearance="clean"
        iconAfter="fas fa-cog"
        content={
          <Menu>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4">Item 4</MenuItem>
          </Menu>
        }
      />
    </ButtonGroup>
    <br />
    <br />

    <Typo appearance="h3">Api</Typo>
    <ReactMarkdown source={api} />
  </>
);

export default DropdownPage;
