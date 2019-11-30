import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "@w-design/core";
import TextArea from "./index";

afterEach(cleanup);

describe("<TextArea/>", () => {
  it("should render correct with TextArea style", () => {
    const { container } = render(
      <Provider>
        <TextArea label="TextArea" />
        <TextArea isWarning />
        <TextArea isValid />
        <TextArea isError />
        <TextArea isError />
        <TextArea autoComplete="on" />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
