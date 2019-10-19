/**
 * useField and useForm test
 */

// Because of `useForm` and `useField` are combine
// We need a test that produce the code behavior depends on what
// hooks input and output
import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import InputForm from "../../libs/components/InputForm";
import useField from "./useField";
import useForm from "./useForm";
import Button from "../../libs/elements/Button";
import { Provider } from "../..";

afterEach(cleanup);

const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validEmail = (value: string) => emailRegex.test(value);

const Form = ({ onSubmit }: { onSubmit?: (formdata: any) => void }) => {
  const form = useForm({ requiredMessage: "required field" });

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

describe("useField and useForm hooks", () => {
  it("has default value of email", () => {
    const { getByTestId } = render(<Form />);
    const inputVal = getByTestId(/email/i);
    expect(inputVal["value"]).toBe("test@test.com");
  });

  it("calls on submit", () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<Form onSubmit={handleSubmit} />);

    getByText(/submit/i).click();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
