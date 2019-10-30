import * as React from "react";
import { Spinner, Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `
| Props       | type    | default | description          |
| ----------- | ------- | ------- | -------------------- |
| borderColor | string  |         | change spinner color |
| large       | boolean | false   | spinner large size   |
`;

const SpinnerPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Spinner</Typo>
    Useful for pending render, loading data...
    <Typo appearance="h3">Example</Typo>
    <Spinner />
    <Spinner spinnerColor="green" />
    <Spinner size="sm" />
    <Spinner size="lg" />
    <CodeBlock
      exampleCode={`
<Spinner />
<Spinner spinnerColor="green" />
<Spinner size="sm" />
<Spinner size="lg" />
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default SpinnerPage;
