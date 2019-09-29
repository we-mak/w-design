import * as React from "react";
import { Typo, ButtonGroup, Button, Container } from "w-design";
import { CodeBlock } from "../components/CodeBlock";

const Example = () => {
  return (
    <Container>
      <ButtonGroup>
        <Button>Normal message</Button>
        <Button>Success message</Button>
        <Button>Error message</Button>
        <Button>Warning message</Button>
      </ButtonGroup>
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

    `}
    />
  </>
);

export default PushMessagePage;
