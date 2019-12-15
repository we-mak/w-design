import * as React from "react";
import { ButtonGroup, Button, Container, PushMessage } from "@w-design/core";

export default () => {
  const [messages, setMessages]: any[] = React.useState([]);

  return (
    <Container>
      <ButtonGroup>
        <Button
          onClick={() =>
            setMessages([
              ...messages,
              {
                value: "This is a normal message"
              }
            ])
          }
        >
          Normal message
        </Button>
        <Button
          onClick={() =>
            setMessages([
              ...messages,
              {
                value: "This is a success message",
                appearance: "success"
              }
            ])
          }
        >
          Success message
        </Button>
        <Button
          onClick={() =>
            setMessages([
              ...messages,
              {
                value: "This is a error message",
                appearance: "error"
              }
            ])
          }
        >
          Error message
        </Button>
        <Button
          onClick={() =>
            setMessages([
              ...messages,
              {
                value: "This is a warning message",
                appearance: "warn"
              }
            ])
          }
        >
          Warning message
        </Button>
      </ButtonGroup>
      <PushMessage messages={messages}></PushMessage>
    </Container>
  );
};
