import * as React from "react";
import { Container, Card, CardContent, Button, SectionMessage } from "@w-design/core";
import { InputForm, useField, useForm } from "@w-design/form";

const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validEmail = (value: string) => emailRegex.test(value);

const CheckPass = ({ value }: { value: React.ReactText }) => {
  if (typeof value !== "string") {
    return;
  }

  if (value.length <= 3) {
    return <small style={{ color: "orange" }}>Your password is terrible</small>;
  } else if (value.length > 0) {
    return <small style={{ color: "green" }}>We are safe now. (Nope, actually)</small>;
  }

  return null;
};

export default () => {
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
    <Container maxWidth={500}>
      <Card>
        <CardContent>
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
            <InputForm
              {...password}
              type="password"
              placeholder="add your password"
              label="Password"
            >
              {password.value && <CheckPass value={password.value} />}
            </InputForm>

            {form.status === "error" && form.formMessage && (
              <SectionMessage title="Error" appearance="error">
                {form.formMessage}
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
        </CardContent>
      </Card>
    </Container>
  );
};
