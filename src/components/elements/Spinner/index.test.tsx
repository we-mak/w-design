import * as React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Spinner from "./index";
import Provider from "../../layout/Provider";

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

  it("should renders large sizecorrectly", () => {
    const { container } = render(
      <Provider>
        <Spinner large />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
