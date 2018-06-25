import React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "../src/components";

storiesOf("Container", module).addWithJSX("Full width and fixed", () => (
  <React.Fragment>
    <Container bg="#eaeaea">
      <div style={{ padding: "1em" }}>Full width </div>
    </Container>
    <br />
    <Container fixSize="xl" bg="#eaeaea">
      <div style={{ padding: "1em" }}>xlarge </div>
    </Container>
    <br />
    <Container fixSize="lg" bg="#eaeaea">
      <div style={{ padding: "1em" }}>large </div>
    </Container>
    <br />
    <Container fixSize="md" bg="#eaeaea">
      <div style={{ padding: "1em" }}>medium </div>
    </Container>
    <br />
    <Container fixSize="sm" bg="#eaeaea">
      <div style={{ padding: "1em" }}>small </div>
    </Container>
    <br />
    <Container fixSize="xs" bg="#eaeaea">
      <div style={{ padding: "1em" }}>xsmall </div>
    </Container>
  </React.Fragment>
));
