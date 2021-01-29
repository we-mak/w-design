import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Spinner from "./index";
import { Provider } from "..";

afterEach(cleanup);

describe("<Spinner/>", () => {
  it("should renders large size correctly", () => {
    const { container } = render(
      <Provider>
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
        <Spinner spinnerColor="blue" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
