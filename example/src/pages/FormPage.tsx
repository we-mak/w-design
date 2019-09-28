import React from "react";
import {
  Typo,
  Button,
  InputField,
  InputForm,
  FormGroup,
  Checkbox,
  RadioGroup,
  TextArea
} from "w-design";
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

const FormPage: React.FunctionComponent<any> = () => {
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
      <CodeBlock
        exampleCode={`
  <InputField placeholder="Normal status" />
  <InputField isError placeholder="Error status" />
  <InputField isValid placeholder="Valid status" />
  <InputField isWarning placeholder="Warning status" />
      `}
      />
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
      <br />
      <InputField placeholder="fluid input" fluid />

      <CodeBlock
        exampleCode={`
  <InputField size="sm" placeholder="Small input" />
  <InputField placeholder="Default input" />
  <InputField size="lg" placeholder="Large input" />
      `}
      />

      <br />
      <ReactMarkdown source={inputFieldApi} />
      <br />

      <Typo appearance="h3">InputForm</Typo>

      <InputForm label="Label" hintMessage="Text hint" placeholder="Text..." isRequired />
      <InputForm label="Icon before" iconBefore="fas fa-user" placeholder="Text..." />
      <InputForm label="Icon after" iconAfter="fas fa-user" placeholder="Text..." />
      <InputForm label="Is loading" isLoading placeholder="Text..." />

      <CodeBlock
        exampleCode={`
  <InputForm label="Label" hintMessage="Text hint" placeholder="Text..." isRequired />
  <InputForm label="Icon before" iconBefore="fas fa-user" placeholder="Text..." />
  <InputForm label="Icon after" iconAfter="fas fa-user" placeholder="Text..." />
  <InputForm label="Is loading" isLoading placeholder="Text..." />
      `}
      />
      <br />

      <ReactMarkdown source={inputFormApi} />
      <br />
      <Typo appearance="h3">Checkbox</Typo>
      <Checkbox label="Check me" />
      <br />
      <Typo appearance="h3">Radio</Typo>
      <RadioGroup
        groupLabel="Label"
        groupName="radio"
        options={[
          {
            label: "Option 1",
            value: "foo"
          },
          {
            label: "Option 2",
            value: "bar"
          }
        ]}
      />
      <br />
      <Typo appearance="h3">FormGroup</Typo>
      <FormGroup>
        <InputField placeholder="Text something" />
        <Button appearance="primary">Call to action</Button>
      </FormGroup>
      <br />

      <Typo appearance="h3">TextArea</Typo>
      <TextArea label="Textarea label" />
      <br />
      <TextArea label="Textarea fluid" fluid />
    </>
  );
};

export default FormPage;
