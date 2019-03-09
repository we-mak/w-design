import React, { Component } from "react";
import { Provider, Container, Flexbox, Spinner, Typo } from "w-design";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Container>
            <Flexbox>
              <Flexbox.Column width={1 / 4}>
                Sidebar
                <Spinner />
              </Flexbox.Column>
              <Flexbox.Column width={3 / 4}>
                <Typo appearance="h1" tag="div">
                  Hello
                </Typo>
              </Flexbox.Column>
            </Flexbox>
          </Container>
        </Provider>
      </>
    );
  }
}

export default App;
