import React from "react";
import { storiesOf } from "@storybook/react";
import { Container, Grid } from "../src/components";

storiesOf("Grid", module)
  .addWithJSX("Default Grid", () => (
    <Container>
      <Grid>
        <Grid.Column width={1} bg="#eaeaea">
          width 1
        </Grid.Column>

        <Grid.Column width={1 / 2} bg="#dcdcdc">
          width 1/2
        </Grid.Column>

        <Grid.Column width={1 / 4} bg="#bdbdbd">
          width 1/4
        </Grid.Column>
        <Grid.Column width={1 / 3} bg="#eaeaea">
          width 1/3
        </Grid.Column>
      </Grid>
    </Container>
  ))
  .addWithJSX("Gapless Grid", () => (
    <Container>
      <Grid gapless>
        <Grid.Column width={1} bg="#eaeaea">
          width 1
        </Grid.Column>

        <Grid.Column width={1 / 2} bg="#dcdcdc">
          width 1/2
        </Grid.Column>

        <Grid.Column width={1 / 4} bg="#bdbdbd">
          width 1/4
        </Grid.Column>
        <Grid.Column width={1 / 3} bg="#eaeaea">
          width 1/3
        </Grid.Column>
      </Grid>
    </Container>
  ))
  .addWithJSX("Oneline Grid", () => (
    <Container>
      <Grid oneline>
        <Grid.Column width={1} bg="#eaeaea">
          width 1
        </Grid.Column>

        <Grid.Column width={1 / 2} bg="#dcdcdc">
          width 1/2
        </Grid.Column>

        <Grid.Column width={1 / 4} bg="#bdbdbd">
          width 1/4
        </Grid.Column>
        <Grid.Column width={1 / 3} bg="#eaeaea">
          width 1/3
        </Grid.Column>
      </Grid>
    </Container>
  ))
  .addWithJSX("Custom Grid", () => (
    <Container>
      <Grid justifyContent="space-between">
        <Grid.Column width={1} bg="#eaeaea">
          width 1
        </Grid.Column>

        <Grid.Column width={1 / 2} bg="#dcdcdc" m="auto">
          width 1/2, m="auto"
        </Grid.Column>

        <Grid.Column width={1 / 4} bg="#bdbdbd">
          width 1/4
        </Grid.Column>
        <Grid.Column width={1 / 3} bg="#eaeaea">
          width 1/3
        </Grid.Column>
      </Grid>
    </Container>
  ))
  .addWithJSX("Responsive Column", () => (
    <Container>
      <Grid>
        <Grid.Column width={[1, 1 / 2, 1 / 3, 1 / 4]} bg="#eaeaea">
          Column 1
        </Grid.Column>
        <Grid.Column width={[1, 1 / 2, 1 / 3, 1 / 4, 1]} bg="#dcdcdc">
          Column 2
        </Grid.Column>
      </Grid>
    </Container>
  ));
