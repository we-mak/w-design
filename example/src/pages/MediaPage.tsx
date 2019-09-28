import * as React from "react";
import { Image, Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const api = `

`;

const MediaPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Image</Typo>
    Image component with built-in lazy loading with Intersection Observer api.
    <Typo appearance="h3">Example</Typo>
    <Image data-src="https://source.unsplash.com/random" width={320} />
    <br />
    <Image data-src="https://source.unsplash.com/random?car" width="50%" />
    <CodeBlock
      exampleCode={`
      <Image data-src="https://source.unsplash.com/random" />
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default MediaPage;
