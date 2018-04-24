import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Container from ".";

const stories = storiesOf("Container", module);

stories.add(
  "Container",
  withInfo(`The responsive layout.`, { inline: true })(() => (
    <Container>
      <div style={{ background: "#f4f4f4" }}>Child Component</div>
    </Container>
  ))
);
