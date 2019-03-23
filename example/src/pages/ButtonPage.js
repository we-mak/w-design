import React from "react";
import { Button, ButtonGroup } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const p1 = `
# Buttons

Button is used to trigger an event

## Api

| Props        | Type                   | default   | description             |
| ------------ | ---------------------- | --------- | ----------------------- |
| appearance   | string                 | "default" | applied style of button |
| buttonRef    | React.MutableRefObject |           |                         |
| type         | string                 | button    | button type attribute   |
| size         | string                 | "md"      | button size style       |
| fluid        | boolean                |           | fluid style button      |
| iconBefore   |                        |           |                         |
| iconAfter    |                        |           |                         |
| iconOnly     |                        |           |                         |
| fluid        |                        |           |                         |
| form         |                        |           |                         |
| isLoading    |                        |           |                         |
| isDisabled   |                        |           |                         |
| isSelected   |                        |           |                         |
| href         |                        |           |                         |
| target       |                        |           |                         |
| autoFocus    |                        |           |                         |
| onClick      |                        |           |                         |
| tabIndex     |                        |           |                         |
| children     |                        |           |                         |
| ariaHaspopup |                        |           |                         |
| ariaExpanded |                        |           |                         |
| ariaControls |                        |           |                         |
| ariaLabel    |                        |           |                         |

`;

const ButtonPage = () => {
  return (
    <>
      <ReactMarkdown source={p1} />
      <section>
        <br />
        <h4>Appearance</h4>
        <ButtonGroup>
          <Button>Default button</Button>
          <Button appearance="danger">Danger button</Button>
          <Button appearance="warning">Warning button</Button>
          <Button appearance="success">Success button</Button>
          <Button appearance="help">Help button</Button>
          <Button appearance="subtle">Subtle button</Button>
          <Button appearance="link">Link button</Button>
          <Button appearance="clean">Clean button</Button>
        </ButtonGroup>
        <CodeBlock language="language-javascript">
          {`
        <Button>Default button</Button>
        <Button appearance="danger">Danger button</Button>
        <Button appearance="warning">Warning button</Button>
        <Button appearance="success">Success button</Button>
        <Button appearance="help">Help button</Button>
        <Button appearance="subtle">Subtle button</Button>
        <Button appearance="link">Link button</Button>
        <Button appearance="clean">Clean button</Button>
          `}
        </CodeBlock>
      </section>
      <br />
      <section>
        <h4>Auto focus</h4>
        <Button autoFocus>Auto focus button</Button>
      </section>
    </>
  );
};

export default ButtonPage;
