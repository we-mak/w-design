import React from "react";
import { Typo, Container, Flexbox } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const containerApi = `
Container contains Flexbox components to form the responsive layout.

#### Api

\`Container\` uses \`color, space, display, maxWidth, minWidth\` Api properties from styled-system. [See more here](https://styled-system.com/api)


#### Example

`;

const ContainerPage: React.FunctionComponent<any> = () => {
  return (
    <>
      <Typo appearance="h1">Container</Typo>
      <ReactMarkdown source={containerApi} />

      <Container bg="N2">
        <div style={{ padding: "1em" }}>Full width container </div>
      </Container>

      <CodeBlock
        exampleCode={`<Container bg="N2">
  <div style={{ padding: "1em" }}>Full width container </div>
</Container>`}
      />

      <Typo appearance="h1">Flexbox</Typo>

      <Container>
        <Flexbox>
          <Flexbox.Column width={1} bg="N2">
            width 1
          </Flexbox.Column>

          <Flexbox.Column width={1 / 2} bg="N3">
            width 1/2
          </Flexbox.Column>

          <Flexbox.Column width={1 / 4} bg="N4">
            width 1/4
          </Flexbox.Column>
          <Flexbox.Column width={1 / 3} bg="N2">
            width 1/3
          </Flexbox.Column>
        </Flexbox>
      </Container>

      <Typo appearance="h3">Gapless</Typo>
      <Container>
        <Flexbox gapless>
          <Flexbox.Column width={1} bg="N2">
            width 1
          </Flexbox.Column>

          <Flexbox.Column width={1 / 2} bg="N3">
            width 1/2
          </Flexbox.Column>

          <Flexbox.Column width={1 / 4} bg="N4">
            width 1/4
          </Flexbox.Column>
          <Flexbox.Column width={1 / 3} bg="N2">
            width 1/3
          </Flexbox.Column>
        </Flexbox>
      </Container>

      <Typo appearance="h3">One line</Typo>
      <Container>
        <Flexbox oneline>
          <Flexbox.Column width={1} bg="N2">
            width 1
          </Flexbox.Column>

          <Flexbox.Column width={1 / 2} bg="N3">
            width 1/2
          </Flexbox.Column>

          <Flexbox.Column width={1 / 4} bg="N4">
            width 1/4
          </Flexbox.Column>
          <Flexbox.Column width={1 / 3} bg="N2">
            width 1/3
          </Flexbox.Column>
        </Flexbox>
      </Container>

      <Typo appearance="h3">Custom</Typo>
      <Container>
        <Flexbox justifyContent="space-between">
          <Flexbox.Column width={1} bg="N2">
            width 1
          </Flexbox.Column>

          <Flexbox.Column width={1 / 2} bg="N3" m="auto">
            width 1/2, m="auto"
          </Flexbox.Column>

          <Flexbox.Column width={1 / 4} bg="N4">
            width 1/4
          </Flexbox.Column>
          <Flexbox.Column width={1 / 3} bg="N2">
            width 1/3
          </Flexbox.Column>
        </Flexbox>
      </Container>

      <Typo appearance="h3">Responsive Column</Typo>
      <Container>
        <Flexbox>
          <Flexbox.Column width={[1, 1 / 2, 1 / 3, 1 / 4]} bg="N4">
            Column 1
          </Flexbox.Column>
          <Flexbox.Column width={[1, 1 / 2, 1 / 3, 1 / 4, 1]} bg="N2">
            Column 2
          </Flexbox.Column>
        </Flexbox>
      </Container>
      <br />
      <Typo appearance="h1">DisplayElement</Typo>
    </>
  );
};

export default ContainerPage;
