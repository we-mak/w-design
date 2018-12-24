import React, { Component } from "react";
import { Provider, Container } from "w-design";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Container>Hello</Container>
        <Container color="B50" bg="#f4f4f4">
          Hello
        </Container>
      </Provider>
    );
  }
}
