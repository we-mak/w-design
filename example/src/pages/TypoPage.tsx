import * as React from "react";
import { Typo } from "w-design";
// import ReactMarkdown from "react-markdown";
// import { CodeBlock } from "../components/CodeBlock";

// const api = `
// | Props       | type    | default | description          |
// | ----------- | ------- | ------- | -------------------- |
// | borderColor | string  |         | change spinner color |
// | large       | boolean | false   | spinner large size   |
// `;

const Example = () => (
  <>
    <h1>H1</h1>
    <Typo appearance="h1">This is header 1</Typo>
    <h2>H2</h2>
    <Typo appearance="h2">This is header 2</Typo>
    <h3>H3</h3>
    <Typo appearance="h3">This is header 3</Typo>
    <h4>H4</h4>
    <Typo appearance="h4">This is header 4</Typo>
    <h5>H5</h5>
    <Typo appearance="h5">This is header 5</Typo>
    <h6>H6</h6>
    <Typo appearance="h6">This is header 6</Typo>

    <Typo appearance="h2" m="2rem">
      Margin 2rem
    </Typo>

    <Typo appearance="h2" color="teal">
      Teal color
    </Typo>

    <Typo appearance="h2" fontWeight={500}>
      Font weight 500
    </Typo>

    <Typo appearance="h2" fontFamily="Roboto">
      Roboto font
    </Typo>
  </>
);

const TypoPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Typo</Typo>
    Text tag with flexible tag type following heading style
    <Example />
  </>
);

export default TypoPage;
