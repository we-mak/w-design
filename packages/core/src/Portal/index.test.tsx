import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Portal from "./index";

afterEach(cleanup);

describe("<Portal/>", () => {
  it("should render a div element", () => {
    const { container } = render(<Portal />);

    expect(container).toMatchSnapshot();
  });
});
