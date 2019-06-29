import React from "react";
import { Icon, Button, ButtonGroup } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `

## Api

| Props        | Type                | default   | description             |
| ------------ | ------------------- | --------- | ----------------------- |
| buttonRef    | React.RefAttributes |           | button ref              |
| appearance   | string              | "default" | applied style of button |
| type         | string              | button    | button type attribute   |
| size         | string              | "md"      | button size style       |
| fluid        | boolean             |           | fluid style button      |
| iconBefore   |                     |           |                         |
| iconAfter    |                     |           |                         |
| iconOnly     |                     |           |                         |
| fluid        |                     |           |                         |
| form         |                     |           |                         |
| isLoading    |                     |           |                         |
| isDisabled   |                     |           |                         |
| isSelected   |                     |           |                         |
| href         |                     |           |                         |
| target       |                     |           |                         |
| autoFocus    |                     |           |                         |
| onClick      |                     |           |                         |
| tabIndex     |                     |           |                         |
| children     |                     |           |                         |
| ariaHaspopup |                     |           |                         |
| ariaExpanded |                     |           |                         |
| ariaControls |                     |           |                         |
| ariaLabel    |                     |           |                         |

`;

const ButtonPage = () => {
  return (
    <>
      <h1>Buttons</h1>
      <p>Button is used to trigger an event</p>

      <div>
        <h4>Auto focus</h4>
        <Button autoFocus>Default button</Button>
        <CodeBlock exampleCode={`<Button autoFocus>Default button</Button>`} />
        <p />
        <h4>Appearance</h4>
        <ButtonGroup>
          <Button>Default button</Button>
          <Button appearance="primary">Primary button</Button>
          <Button appearance="danger">Danger button</Button>
          <Button appearance="warning">Warning button</Button>
          <Button appearance="success">Success button</Button>
          <Button appearance="help">Help button</Button>
        </ButtonGroup>
        <p />
        <ButtonGroup>
          <Button appearance="subtle">Subtle button</Button>
          <Button appearance="link">Link button</Button>
          <Button appearance="clean">Clean button</Button>
        </ButtonGroup>
        <CodeBlock
          exampleCode={`
<Button>Default button</Button>
<Button appearance="danger">Danger button</Button>
<Button appearance="warning">Warning button</Button>
<Button appearance="success">Success button</Button>
<Button appearance="help">Help button</Button>
<Button appearance="subtle">Subtle button</Button>
<Button appearance="link">Link button</Button>
<Button appearance="clean">Clean button</Button>
          `}
        />
      </div>
      <section>
        <p />
        <h4>Button icon</h4>
        <p>
          The Icon is currently use Fontawesome, to apply the icon you need to add the Fontawesome
          library as well.
        </p>
        <ButtonGroup>
          <Button iconBefore="fas fa-atom">Icon Before</Button>
          <Button iconAfter="fas fa-clock">Icon After</Button>
          <Button iconOnly>
            <Icon className="fas fa-thumbs-up" />
          </Button>
        </ButtonGroup>

        <CodeBlock
          exampleCode={`
<Button iconBefore="fas fa-atom">Icon Before</Button>
<Button iconAfter="fas fa-clock">Icon After</Button>
<Button iconOnly>
  <Icon className="fas fa-thumbs-up" />
</Button>
        `}
        />
      </section>
      <ReactMarkdown source={api} />
    </>
  );
};

export default ButtonPage;
