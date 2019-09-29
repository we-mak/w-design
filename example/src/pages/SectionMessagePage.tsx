import * as React from "react";
import { Typo, Container, SectionMessage } from "w-design";

const Example = () => {
  return (
    <Container>
      <SectionMessage title="Info">The quick brown fox jumps over the lazy dog</SectionMessage>
      <SectionMessage appearance="confirm" title="Confirm">
        The quick brown fox jumps over the lazy dog
      </SectionMessage>
      <SectionMessage title="Warn" appearance="warn">
        The quick brown fox jumps over the lazy dog
      </SectionMessage>
      <SectionMessage title="Error" appearance="error">
        The quick brown fox jumps over the lazy dog
      </SectionMessage>
    </Container>
  );
};

const SectionMessagePage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">SectionMessage</Typo>
    Message block to notice user what happened, or something to require an action
    <Example />
  </>
);

export default SectionMessagePage;
