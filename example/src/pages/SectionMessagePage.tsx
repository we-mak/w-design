import * as React from "react";
import { Typo, Container, SectionMessage } from "w-design";
import ReactMarkdown from "react-markdown";

const Example = () => {
  return (
    <Container maxWidth={500}>
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

const api = `
| Props      | type                                         | default | description                   |
| ---------- | -------------------------------------------- | ------- | ----------------------------- |
| appearance | string: "info" , "confirm" , "warn" ,"error" | "info"  | appearance of section message |
| title      | string                                       |         | title of message              |
| child      | ReactNode                                    |         | Content of section message    |
`;

const SectionMessagePage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">SectionMessage</Typo>
    Message block to notice user what happened, or something to require an action
    <Example />
    <ReactMarkdown source={api} />
  </>
);

export default SectionMessagePage;
