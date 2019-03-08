import * as React from "react";
import { render } from "react-testing-library";
import Flexbox from "./index";

describe("<Flex/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Flexbox>
        <Flexbox.Column />
      </Flexbox>
    );
    expect(container).toMatchSnapshot();
  });
});
