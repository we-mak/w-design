import React, { Component } from "react";
import { Provider, Container } from "w-design";
import ReactMarkdown from "react-markdown";

const input = `

## Container contains Grid component

`;

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Container>
          <ReactMarkdown source={input} />
        </Container>
        <Container color="B50" bg="#f4f4f4">
          Hello
        </Container>
      </Provider>
    );
  }
}
