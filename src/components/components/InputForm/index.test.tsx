import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import "jest-styled-components";
import InputForm from "./index";
import Provider from "../../layout/Provider";

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
