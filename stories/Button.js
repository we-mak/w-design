import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src/components";

storiesOf("Buttons", module).addWithJSX("Default Button ", () => (
  <React.Fragment>
    <Button>Default</Button>{" "}
    <Button appearance="primary">Primary button</Button>{" "}
    <Button appearance="danger">Danger button</Button>{" "}
    <Button appearance="warning">Warning button</Button>{" "}
    <Button appearance="success">Success button</Button>{" "}
    <Button href="#" appearance="link">
      Link button
    </Button>{" "}
    <Button appearance="link">Fake link button</Button>{" "}
  </React.Fragment>
));
