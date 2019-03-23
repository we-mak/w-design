import * as React from "react";
import { render, cleanup } from "react-testing-library";
import Portal from "./index";

afterEach(cleanup);

describe("<Portal/>", () => {
  it("should render correctly", () => {
    const { container } = render(<Portal />);

    expect(container).toMatchSnapshot();
  });
});
