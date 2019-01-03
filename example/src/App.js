import React, { Component } from "react";
import { Provider, Container, Button } from "w-design";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Container p={2}>
            <Button>Button</Button>
          </Container>
        </Provider>
        <Button>Button</Button>
      </>
    );
  }
}

export default App;
