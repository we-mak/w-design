import * as React from "react";
import { Typo, ButtonGroup, Button, Container, PushMessage } from "w-design";
import { CodeBlock } from "../components/CodeBlock";

const Example = () => {
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

const PushMessagePage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Push message page</Typo>
    <p>
      Tiny push message appear at the top of browser window, useful for process notify message such
      as upload, trigger thing.
    </p>

    <Typo appearance="h3">Example</Typo>
    <Example />
    <CodeBlock
      exampleCode={`
...
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
...
    `}
    />
  </>
);

export default PushMessagePage;
