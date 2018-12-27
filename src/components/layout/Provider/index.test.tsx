// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import "jest-styled-components";
import { render } from "react-testing-library";
import Provider from "./index";

describe("<Provider/>", () => {
  it("should renders correctly", () => {
    const wrapper = render(<Provider />);
    expect(wrapper).toMatchSnapshot();
  });
});
