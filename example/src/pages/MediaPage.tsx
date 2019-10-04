import * as React from "react";
import { Image, Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `
| Props  | type | default | description          |
| ------ | ---- | ------- | -------------------- |
| height |      |         | styled-system height |
| width  |      |         | styled-system width  |

`;

const Example = () => {
  return (
    <>
      <Image data-src="https://source.unsplash.com/random" width={320} />
      <br />
      <Image data-src="https://source.unsplash.com/random?car" width="50%" />
    </>
  );
};

const MediaPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Image</Typo>
    <p>
      Image component with built-in lazy loading with <b>Intersection Observer</b>.
    </p>

    <Typo appearance="h3">Example</Typo>
    <Example />
    <CodeBlock
      exampleCode={`
<Image data-src="https://source.unsplash.com/random" width={320} />
<Image data-src="https://source.unsplash.com/random?car" width="50%" />
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default MediaPage;
