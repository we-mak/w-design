import React from "react";
import { Typo, Button, InputField, InputForm, FormGroup } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const inputFieldApi = `

#### Api

| Props       | type    | default | description                                                     |
| ----------- | ------- | ------- | --------------------------------------------------------------- |
|           |   |         |  |


`;
const inputFormApi = `

#### Api

| Props       | type    | default | description                                                     |
| ----------- | ------- | ------- | --------------------------------------------------------------- |
| id          | string  |         | Text field id attribute, automatically apply for label identify |
| label       | string  |         | Input label                                                     |
| hintMessage | string  |         | Text hint message for the input                                 |
| isRequired  | boolean | false   |                                                                 |
| isError     | boolean | false   |                                                                 |
| isWarning   | boolean | false   |                                                                 |
| isSuccess   | boolean | false   |                                                                 |
| children    | any     |         | other element appears below the input field                     |
| fluid       | boolean | false   |                                                                 |

`;

const FormPage = () => {
  return (
    <>
      <Typo appearance="h1">Form</Typo>
      <Typo appearance="h3">InputField</Typo>
      <p>A single input field component</p>
      <ReactMarkdown source={inputFieldApi} />
      <br />
      <Typo appearance="h4">State</Typo>
      <InputField placeholder="Normal status" />
      <br />
      <InputField isError placeholder="Error status" />
      <br />
      <InputField isValid placeholder="Valid status" />
      <br />
      <InputField isWarning placeholder="Warning status" />
      <CodeBlock language="lang-js">
        {`
      <InputField placeholder="Normal status" />
      <InputField isError placeholder="Error status" />
      <InputField isValid placeholder="Valid status" />
      <InputField isWarning placeholder="Warning status" />
      `}
      </CodeBlock>
      <br />
      <Typo appearance="h4">Input filed Size</Typo>
      <InputField size="sm" placeholder="Small input" />
      <br />
      <InputField placeholder="Default input" />
      <br />
      <InputField size="lg" placeholder="Large input" />
      <CodeBlock language="lang-js">
        {`
      <InputField size="sm" placeholder="Small input" />
      <InputField placeholder="Default input" />
      <InputField size="lg" placeholder="Large input" />
      `}
      </CodeBlock>

      <Typo appearance="h4">Focus</Typo>
      <InputField isFocus />

      <br />
      <Typo appearance="h3">InputForm</Typo>
      <ReactMarkdown source={inputFormApi} />
      <InputForm label="Label" hintMessage="Text hint" placeholder="Text..." isRequired />
      <Typo appearance="h3">FormGroup</Typo>
      <FormGroup>
        <InputField placeholder="Text something" />
        <Button appearance="primary">Call to action</Button>
      </FormGroup>
    </>
  );
};

export default FormPage;
