import React, { Component } from "react";
import { Provider, Container, Button } from "w-design";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Container p={2}>
            <Button>Button</Button>{" "}
            {/* <Button appearance="primary">Button</Button>{" "}
            <Button appearance="warning">Button</Button>{" "}
            <Button appearance="danger">Button</Button>{" "}
            <Button appearance="success">Button</Button>{" "}
            <Button appearance="link">Button</Button>{" "}
            <Button appearance="subtle">Button</Button>{" "}
            <Button appearance="help">Button</Button> */}
          </Container>
        </Provider>
      </>
    );
  }
}

export default App;
