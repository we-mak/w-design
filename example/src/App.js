import React, { Component } from "react";
import { Provider, Container, Button } from "w-design";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Container p={2}>
            <Button isSelected>Button</Button>{" "}
            <Button isSelected appearance="primary">
              Button
            </Button>{" "}
            <Button isSelected appearance="warning">
              Button
            </Button>{" "}
            <Button isSelected appearance="danger">
              Button
            </Button>{" "}
            <Button isSelected appearance="success">
              Button
            </Button>{" "}
            <Button isSelected appearance="link">
              Button
            </Button>{" "}
            <Button isSelected appearance="subtle">
              Button
            </Button>{" "}
            <Button isSelected appearance="help">
              Button
            </Button>
          </Container>
        </Provider>
      </>
    );
  }
}

export default App;
