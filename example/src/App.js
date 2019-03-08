import React, { Component } from "react";
import { Provider, Container } from "w-design";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Container p={2}>Content</Container>
        </Provider>
      </>
    );
  }
}

export default App;
