import React, { Component } from "react";
import { Provider, Container } from "w-design";

class App extends Component {
  render() {
    return (
      <Provider>
        <Container>Hello</Container>
        <Container color="B50">Hello</Container>
      </Provider>
    );
  }
}

export default App;
