import React from "react";
import { Typo, Button, InputField, InputForm, FormGroup, Checkbox, TextArea } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const inputFieldApi = `

#### Api

| Props        | type                                             | default    | description                   |
| ------------ | ------------------------------------------------ | ---------- | ----------------------------- |
| inputRef     | (ref: HTMLInputElement) => {}                    |            | input refs                    |
| appearance   | string                                           | "standard" |                               |
| type         | string                                           | "text"     | type of input                 |
| name         | string                                           |            | field name                    |
| className    | string                                           |            | class name of input field     |
| autoComplete | string                                           | "off"      | control browser auto complete |
| size         | string                                           |            |                               |
| tabIndex     | number                                           |            | tabindex order                |
| value        | string                                           |            |                               |
| defaultValue | string                                           |            |                               |
| isRequired   | boolean                                          |            |                               |
| isError      | boolean                                          |            |                               |
| isValid      | boolean                                          |            |                               |
| isWarning    | boolean                                          |            |                               |
| isFocus      | boolean                                          | false      |                               |
| isDisabled   | boolean                                          | false      |                               |
| onChange     | (e: React.ChangeEvent<HTMLInputElement>) => void |            |                               |
| onBlur       | (e: React.SyntheticEvent<HTMLElement>) => void   |            |                               |




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

      <Typo appearance="h4">State</Typo>
      <div style={{ display: "flex" }}>
        <InputField placeholder="Normal status" />
        &nbsp;&nbsp;
        <InputField isError placeholder="Error status" />
        &nbsp;&nbsp;
        <InputField isValid placeholder="Valid status" />
        &nbsp;&nbsp;
        <InputField isWarning placeholder="Warning status" />
      </div>
      <CodeBlock language="language-js">
        {`
<InputField placeholder="Normal status" />
<InputField isError placeholder="Error status" />
<InputField isValid placeholder="Valid status" />
<InputField isWarning placeholder="Warning status" />
      `}
      </CodeBlock>
      <br />

      <Typo appearance="h4">InputField Size</Typo>
      <div style={{ display: "flex" }}>
        <InputField size="lg" placeholder="Large input" />
        &nbsp;&nbsp;
        <InputField placeholder="Default input" />
        &nbsp;&nbsp;
        <InputField size="sm" placeholder="Small input" />
        &nbsp;&nbsp;
      </div>
      <CodeBlock language="lang-js">
        {`
<InputField size="sm" placeholder="Small input" />
<InputField placeholder="Default input" />
<InputField size="lg" placeholder="Large input" />
      `}
      </CodeBlock>

      <br />
      <ReactMarkdown source={inputFieldApi} />
      <br />

      <Typo appearance="h3">InputForm</Typo>

      <InputForm label="Label" hintMessage="Text hint" placeholder="Text..." isRequired />
      <InputForm label="Icon before" iconBefore="fas fa-user" placeholder="Text..." />
      <InputForm label="Icon after" iconAfter="fas fa-user" placeholder="Text..." />
      <InputForm label="Is loading" isLoading placeholder="Text..." />

      <CodeBlock language="lang-js">
        {`
<InputForm label="Label" hintMessage="Text hint" placeholder="Text..." isRequired />
<InputForm label="Icon before" iconBefore="fas fa-user" placeholder="Text..." />
<InputForm label="Icon after" iconAfter="fas fa-user" placeholder="Text..." />
<InputForm label="Is loading" isLoading placeholder="Text..." />
      `}
      </CodeBlock>
      <br />

      <ReactMarkdown source={inputFormApi} />
      <br />
      <Typo appearance="h3">Checkbox</Typo>
      <Checkbox label="Check me" onChange={e => console.log(e.target.checked)} />
      <Typo appearance="h3">FormGroup</Typo>
      <FormGroup>
        <InputField placeholder="Text something" />
        <Button appearance="primary">Call to action</Button>
      </FormGroup>

      <br />

      <Typo appearance="h3">TextArea</Typo>
      <TextArea label="Textarea label" />
    </>
  );
};

export default FormPage;
