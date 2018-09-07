import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src/components";

storiesOf("Buttons", module)
  .addWithJSX("Button Appearances", () => (
    <React.Fragment>
      <Button>Default button</Button>{" "}
      <Button appearance="primary">Primary button</Button>{" "}
      <Button appearance="danger">Danger button</Button>{" "}
      <Button appearance="warning">Warning button</Button>{" "}
      <Button appearance="success">Success button</Button>{" "}
      <Button href="#" appearance="link">
        Link button
      </Button>{" "}
      <Button appearance="link">Fake link button</Button>{" "}
    </React.Fragment>
  ))
  .addWithJSX("Button sizes", () => (
    <div>
      <Button elementSize="sm" appearance="primary">
        Small button
      </Button>{" "}
      <Button appearance="primary">Medium button</Button>{" "}
      <Button elementSize="lg" appearance="primary">
        Large button
      </Button>{" "}
    </div>
  ))
  .addWithJSX("Fluid button", () => (
    <Button appearance="primary" fluid>
      Fluid button
    </Button>
  ))
  .addWithJSX("Button disabled", () => (
    <div>
      <Button isDisabled>Default button</Button>{" "}
      <Button isDisabled appearance="primary">
        Primary button
      </Button>{" "}
      <Button isDisabled appearance="link">
        Link button
      </Button>
    </div>
  ))
  .addWithJSX("Button loading", () => (
    <div>
      <Button isLoading appearance="primary">
        Default button
      </Button>{" "}
      <Button isLoading appearance="link">
        Link button
      </Button>{" "}
      <Button isLoading>Default button</Button>
    </div>
  ))
  .addWithJSX("Button selected", () => (
    <div>
      <Button isSelected>Default button</Button>{" "}
      <Button isSelected appearance="link">
        Link button
      </Button>{" "}
      <Button isSelected appearance="primary">
        Primary button
      </Button>{" "}
      <Button isSelected appearance="danger">
        Danger button
      </Button>{" "}
      <Button isSelected appearance="warning">
        Warn button
      </Button>
    </div>
  ))
  .addWithJSX("Button icons", () => (
    <Button onClick={() => alert("you clicked me")}>Default button</Button>
  ))
  .addWithJSX("Button ref", () => (
    <Button
      buttonRef={ref => (this.ref = ref)}
      onClick={() => alert("you clicked on", this.ref)}
    >
      Ref button
    </Button>
  ))
  .addWithJSX("Button auto focus", () => (
    <Button autoFocus appearance="primary">
      Default button
    </Button>
  ));
