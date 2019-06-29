import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Flexbox from "./index";

afterAll(cleanup);

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

  it("should renders gapless", () => {
    const { container } = render(<Flexbox gapless />);
    expect(container).toMatchSnapshot();
  });

  it("should renders correctly", () => {
    const { container } = render(<Flexbox oneline />);
    expect(container).toMatchSnapshot();
  });
});
