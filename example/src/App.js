import React, { Component } from "react";
import { Provider, Container, Button } from "w-design";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Container p={2}>
            <Button isLoading>Button</Button>
          </Container>
        </Provider>
      </>
    );
  }
}

export default App;
