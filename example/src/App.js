import React, { Component } from "react";
import { Provider, Container, Grid, Heading, Spinner } from "w-design";

class App extends Component {
  render() {
    return (
      <Provider>
        <Container maxWidth={1200} minWidth={320} p={2}>
          <Grid>
            <Grid.Column width={1} bg="N2">
              <Heading.H1 customHTMLtag="span">Hello</Heading.H1>
              <Heading.H2>Hello</Heading.H2>
              <Heading.H3>Hello</Heading.H3>
              <Heading.H4>Hello</Heading.H4>
              <Heading.H5>Hello</Heading.H5>
              <Heading.H6>Hello</Heading.H6>
              <Spinner large />
            </Grid.Column>
          </Grid>
        </Container>
      </Provider>
    );
  }
}

export default App;
