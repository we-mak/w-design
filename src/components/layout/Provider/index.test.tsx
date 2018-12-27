// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import "jest-styled-components";
import { render, cleanup } from "react-testing-library";
import Provider from "./index";

afterEach(cleanup);

describe("<Provider/>", () => {
  // Default theme
  it("should renders correctly", () => {
    const wrapper = render(<Provider />);
    expect(wrapper).toMatchSnapshot();
  });

  // Custom theme
  it("renders with custom theme", () => {
    const wrapper = render(
      <Provider
        theme={{
          fonts: "Roboto",
          fontSizes: [12, 16, 18, 24, 36, 48, 72],
          space: [0, 6, 12, 18, 24, 30, 36]
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Test hook
});
