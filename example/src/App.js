import React, { Component } from "react";
import { Provider, Container, Grid, Heading, Button } from "w-design";

class App extends Component {
  render() {
    return (
      <Provider>
        <Container maxWidth={1200} minWidth={320} p={2}>
          <Grid>
            <Grid.Column width={1} bg="N2">
              <Heading.H1 customHTMLtag="span">Hello</Heading.H1>

              <Button>Button</Button>
              <Button href="/">Button</Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Provider>
    );
  }
}

export default App;
