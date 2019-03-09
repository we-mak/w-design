import * as React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";
import Heading from "./index";
import Provider from "../../layout/Provider";

describe("<Heading/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Heading.H1 />
        <Heading.H2 />
        <Heading.H3 />
        <Heading.H4 />
        <Heading.H5 />
        <Heading.H6 />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
