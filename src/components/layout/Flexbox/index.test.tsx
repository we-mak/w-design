import * as React from "react";
import { render } from "@testing-library/react";
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
