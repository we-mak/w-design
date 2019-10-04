import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import TextArea from "./index";
import Provider from "../../layout/Provider";

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
