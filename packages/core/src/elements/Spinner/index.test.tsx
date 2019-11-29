import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Spinner from "./index";
import { Provider } from "../..";

afterEach(cleanup);

describe("<Spinner/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Spinner />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should renders large size correctly", () => {
    const { container } = render(
      <Provider>
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
