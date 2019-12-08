import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "@w-design/core";
import FormGroup from "./index";

afterEach(cleanup);

describe("<FormGroup>", () => {
  it("should render correct form group component", () => {
    const { container } = render(
      <Provider>
        <FormGroup />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
