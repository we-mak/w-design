import React from "react";
import ReactMarkdown from "react-markdown";
import { Typo, Card, CardMedia } from "w-design";
import { CodeBlock } from "../components/CodeBlock";

const api = `
| Props       | type    | default | description          |
| ----------- | ------- | ------- | -------------------- |

`;

const SpinnerPage = () => (
  <>
    <Typo appearance="h1">Card</Typo>
    <p>A content container</p>
    <Typo appearance="h3">Example</Typo>
    <div style={{ maxWidth: 300 }}>
      <Card>
        <CardMedia
          imageUrl="https://photo.foodgawker.com/wp-content/uploads/2019/04/3425217.jpg"
          alt=""
        />
      </Card>
    </div>
    <CodeBlock
      exampleCode={`
  import { Card, CardMedia } from "w-design";
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default SpinnerPage;
