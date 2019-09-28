import * as React from "react";
import { Typo } from "w-design";
import { CodeBlock } from "../components/CodeBlock";

const PushMessagePage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Push message page</Typo>
    Tiny push message appear at the top of browser window, useful for process notify message such as
    upload, trigger thing.
    <CodeBlock
      exampleCode={`

    `}
    />
  </>
);

export default PushMessagePage;
