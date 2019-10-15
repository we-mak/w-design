import * as React from "react";
import {
  Typo,
  Card,
  CardContent,
  Container,
  InputForm,
  Button,
  useField,
  useForm,
  SectionMessage
} from "w-design";
import ReactMarkdown from "react-markdown";

const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validEmail = (value: string) => emailRegex.test(value);

const CheckPass = ({ value }: { value: string }) => {
  if (value.length <= 3) {
    return <small style={{ color: "orange" }}>Your password is terrible</small>;
  } else if (value.length > 0) {
    return <small style={{ color: "green" }}>We are safe now. (Nope, actually)</small>;
  }

  return null;
};

const Form = () => {
  const form = useForm({ requiredMessage: "required field" });
  const name = useField({ form, name: "name", defaultValue: "John Doe" });
  const email = useField({
    form,
    name: "email",
    isRequired: true,
    validations: [{ validate: validEmail, message: "not a valid email" }]
  });
  const password = useField({ form, name: "password", isRequired: true });

  return (
    <form
      onSubmit={(e: React.FormEvent) =>
        form.onSubmit(e, (formdata: any) => {
          // You can post data here
          // change UI state
          // by setting status to fetching, fetched, disable button
          console.log(formdata);
          form.setStatus("submitted");
        })
      }
      noValidate
    >
      <InputForm {...name} type="text" label="Name" placeholder="Add your name" />
      <InputForm {...email} type="email" label="Email" placeholder="add your email" />
      <InputForm {...password} type="password" placeholder="add your password" label="Password">
        {password.value && <CheckPass value={password.value} />}
      </InputForm>

      {form.status === "error" && form.formErrorMessage && (
        <SectionMessage title="Error" appearance="error">
          {form.formErrorMessage}
        </SectionMessage>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Button appearance="primary" type="submit" isDisabled={form.status === "submitted"}>
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
      We-design <code>useField</code> and <code>useForm</code> are simple hooks, it help to update
      components state with values and other factors for your form, such as validation, error
      status, message, and pass those values to the server.
      <br />
      If you need something more extendable, you may take a look at this{" "}
      <a href="https://final-form.org" target="_blank" rel="noopener noreferrer">
        https://final-form.org
      </a>{" "}
      library.
      <br />
      <ReactMarkdown
        source={`

#### Use case

Typically, when create a from, we need to resolve the user experience senarios that provide the good way to let user
understand what he/she needs to do to the form by getting response from their behaviour:

- When user is typing
- When user finish adding information into the form
- Response after submit the form.


#### useField

This hook update component and return an \`InputField\` props object.

**API**

| Params       | type            | default | description                            |
| ------------ | --------------- | ------- | -------------------------------------- |
| form         | FormType        |         | form hooks values, came from \`useForm\` |
| name         | string          |         | name of input field                    |
| defaultValue | string          | ""      | input value                            |
| validations? | ValidatorType[] |         | an array of validator object.          |

      `}
      />
      <p>
        <strong>Example</strong>
      </p>
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
