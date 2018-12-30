// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import { render } from "react-testing-library";
import Container from "./index";

describe("<Container/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
  });
});
