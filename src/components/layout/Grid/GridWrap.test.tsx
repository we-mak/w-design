import * as React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { GridWrap } from "./GridWrap";

describe("<GridWrap/>", () => {
  // Style test
  it("should have gapless", () => {
    const container = renderer.create(<GridWrap gapless />).toJSON();
    expect(container).toHaveStyleRule("margin-left", "0 !important");
    expect(container).toHaveStyleRule("margin-right", "0 !important");
  });

  it("should have online", () => {
    const container = renderer.create(<GridWrap oneline />).toJSON();
    expect(container).toHaveStyleRule("flex-wrap", "nowrap !important");
    expect(container).toHaveStyleRule("overflow-x", "auto !important");
  });
});
