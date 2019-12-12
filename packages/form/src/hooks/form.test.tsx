/**
 * useField and useForm test
 */

// Because of `useForm` and `useField` are combine
// We need a test that produce the code behavior depends on what
// hooks input and output
import * as React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { Provider, Button } from "@w-design/core";
import useField from "./useField";
import useForm from "./useForm";
import InputForm from "../InputForm";

afterEach(cleanup);

const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validEmail = (value: string) => emailRegex.test(value);

const Form = ({ onSubmit }: { onSubmit?: (formdata: any) => void }) => {
  const form = useForm({ requiredMessage: "required field" });

  const name = useField({
    form,
    name: "name",
    isRequired: false
  });

  const email = useField({
    form,
    name: "email",
    defaultValue: "test@test.com",
    isRequired: true,
    validations: [{ validate: validEmail, message: "not a valid email" }]
  });

  return (
    <Provider>
      <form
        onSubmit={(e: React.FormEvent) =>
          form.onSubmit(e, (formdata: any) => {
            form.setStatus("submitted");
            onSubmit && onSubmit(formdata);
          })
        }
        noValidate
      >
        <InputForm
          {...name}
          type="name"
          label="Name"
          placeholder="add your name"
        />
        <InputForm
          {...email}
          type="email"
          label="Email"
          placeholder="add your email"
          data-testid="email"
        />
        <Button type="submit">submit</Button>
      </form>
    </Provider>
  );
};

describe("formHooks", () => {
  it("has default value of email", () => {
    const { getByTestId } = render(<Form />);
    const inputVal = getByTestId(/email/i);
    expect(inputVal["value"]).toBe("test@test.com");
  });

  it("change value and call on submit", () => {
    const handleSubmit = jest.fn();
    const { container } = render(<Form onSubmit={handleSubmit} />);

    const email: any = container.querySelector("input[name=email]");

    fireEvent.change(email, { target: { value: "foo@test.com" } });
    expect(email.value).toBe("foo@test.com");

    const form: any = container.querySelector("form");
    fireEvent.submit(form);
    expect(handleSubmit).toBeCalled();
  });
});
