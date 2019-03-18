import React from "react";
import { Button } from "w-design";
import ReactMarkdown from "react-markdown";
import Highlight from "react-highlight";

const p1 = `
# Buttons

Button is used to trigger an event

## Api

| Props      | Type   | default   | description                |
| ---------- | ------ | --------- | -------------------------- |
| appearance | string | "default" | appearance style of button |


`;

const ButtonPage = () => {
  return (
    <>
      <ReactMarkdown source={p1} />
      <section>
        <h4>Appearance</h4>
        <Highlight language="jsx">
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
        </Highlight>
        <Button>Default button</Button> <Button appearance="danger">Danger button</Button>{" "}
        <Button appearance="warning">Warning button</Button>{" "}
        <Button appearance="success">Success button</Button>{" "}
        <Button appearance="help">Help button</Button>{" "}
        <Button appearance="subtle">Subtle button</Button>{" "}
        <Button appearance="link">Link button</Button>{" "}
        <Button appearance="clean">Clean button</Button>
      </section>
      <br />
      <section>
        <h4>Auto focus</h4>
      </section>
    </>
  );
};

export default ButtonPage;
