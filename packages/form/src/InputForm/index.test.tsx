import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "@w-design/core";
import InputForm from "./index";

afterEach(cleanup);

describe("<InputForm/>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider>
        <InputForm label="label" hintMessage="hint" iconBefore="fas fa-phone" />
        <InputForm iconAfter="fas fa-phone" />
        <InputForm isError />
        <InputForm isFocus />
        <InputForm isDisabled />
        <InputForm isRequired />
        <InputForm isWarning />
        <InputForm isSuccess />
        <InputForm isLoading />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // Props test
  it("should have label props", () => {
    const { getByText } = render(
      <Provider>
        <InputForm label="Hello" />
      </Provider>
    );
    getByText("Hello");
  });

  it("should have hint message", () => {
    const { getByText } = render(
      <Provider>
        <InputForm hintMessage="Hello" />
      </Provider>
    );
    getByText("Hello");
  });
});
