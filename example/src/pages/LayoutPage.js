import React from "react";
import { Typo, Container } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const containerApi = `
Container contains Flexbox components to form the responsive layout.

#### Api

\`Container\` uses \`color, space, display, maxWidth, minWidth\` Api properties from styled-system. [See more here](https://styled-system.com/api)


#### Example

`;

const ContainerPage = () => {
  return (
    <>
      <Typo appearance="h1">Container</Typo>
      <ReactMarkdown source={containerApi} />

      <Container bg="N2">
        <div style={{ padding: "1em" }}>Full width container </div>
      </Container>

      <CodeBlock language="lang-js">
        {`
        <Container bg="N2">
          <div style={{ padding: "1em" }}>Full width container </div>
        </Container>`}
      </CodeBlock>

      <Typo appearance="h1">Flexbox</Typo>
      <Typo appearance="h1">DisplayElement</Typo>
    </>
  );
};

export default ContainerPage;
