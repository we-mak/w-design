import React from "react";
import { storiesOf } from "@storybook/react";
import { Container, Grid, Hide } from "../src/components";

storiesOf("Hide", module).addWithJSX("Responsive Hide", () => (
  <Container>
    <Grid>
      <Grid.Column width={1} bg="#eaeaea">
        <Hide xs>Hide xs element</Hide>
        <Hide lg>Hide lg element</Hide>
      </Grid.Column>
    </Grid>
  </Container>
));
