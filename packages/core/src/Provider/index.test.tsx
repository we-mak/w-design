import * as React from "react";
//import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import Provider from "./index";

afterEach(cleanup);

describe("<Provider/>", () => {
  // Default theme
  it("should renders correctly", () => {
    const { container } = render(<Provider />);
    expect(container).toMatchSnapshot();
  });

  // Custom theme
  it("renders with custom theme", () => {
    const { container } = render(
      <Provider
        theme={{
          fonts: "Roboto",
          fontSizes: [12, 16, 18, 24, 36, 48, 72],
          space: [0, 6, 12, 18, 24, 30, 36]
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });

  // Test hook
});
