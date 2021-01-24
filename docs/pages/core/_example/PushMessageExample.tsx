import * as React from "react";
import {
  ButtonGroup,
  Button,
  Container,
  PushMessage,
  PushMessageType,
} from "@w-design/core";

export default function PushMessageExample() {
  const [message, setMessage] = React.useState<PushMessageType | undefined>();

  return (
    <Container>
      <ButtonGroup>
        <Button
          onClick={() =>
            setMessage({
              value: "This is a normal message",
              appearance: "info",
            })
          }
        >
          Normal message
        </Button>
        <Button
          onClick={() =>
            setMessage({
              value: "This is a success message",
              appearance: "success",
            })
          }
        >
          Success message
        </Button>
        <Button
          onClick={() =>
            setMessage({
              value: "This is a error message",
              appearance: "error",
            })
          }
        >
          Error message
        </Button>
        <Button
          onClick={() =>
            setMessage({
              value: "This is a warning message",
              appearance: "warn",
            })
          }
        >
          Warning message
        </Button>
      </ButtonGroup>
      <PushMessage message={message}></PushMessage>
    </Container>
  );
}
