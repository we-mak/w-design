import * as React from "react";
import { Typo, Card, CardContent, Container, InputForm, Button, useField, useForm } from "w-design";
import ReactMarkdown from "react-markdown";

const Form = () => {
  const form = useForm("required field");
  const name = useField(form);
  return (
    <form onSubmit={form.onSubmit}>
      <InputForm
        name="name"
        type="text"
        label="Name"
        placeholder="Add your name"
        isRequired
        {...name}
      />
      <InputForm name="email" type="email" label="Email" placeholder="add your email" />
      <InputForm name="password" type="password" placeholder="add your password" label="Password" />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export const HooksExample = () => {
  return (
    <>
      <Typo appearance="h3">Hooks</Typo>
      <ReactMarkdown
        source={`
\`useField\` and \`useForm\` hooks are helpers to update components state with values and other factors
for your form, such as validation, error status, message.

#### useField

This hook update component via \`InputField\` props.

      `}
      />
      <Container maxWidth={500}>
        <Card>
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
