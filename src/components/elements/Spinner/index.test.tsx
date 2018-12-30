import * as React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Spinner from "./index";

describe("<Spinner/>", () => {
  // Render test
  it("should renders correctly", () => {
    const container = renderer.create(<Spinner />).toJSON();
    expect(container).toMatchSnapshot();
  });

  // Style test
  it("should have large style spinner", () => {
    const container = renderer.create(<Spinner large />).toJSON();
    expect(container).toHaveStyleRule("min-height", "2rem");
  });
});
