import React, { Component } from "react";
import { Provider, Container, Grid } from "w-design";

class App extends Component {
  render() {
    return (
      <Provider>
        <Container maxWidth={1200} p={2}>
          <Grid>
            <Grid.Column width={1} bg="N2">
              width 1
            </Grid.Column>

            <Grid.Column width={1 / 2} bg="N3">
              width 1/2
            </Grid.Column>

            <Grid.Column width={1 / 4} bg="N4">
              width 1/4
            </Grid.Column>
            <Grid.Column width={1 / 3} bg="N2">
              width 1/3
            </Grid.Column>
            <Grid.Column
              width={[1 / 3, 1 / 2, 1]}
              bg="N3"
              display={["block", "none", "block"]}
            >
              width 1/3
            </Grid.Column>
          </Grid>
        </Container>
      </Provider>
    );
  }
}

export default App;
