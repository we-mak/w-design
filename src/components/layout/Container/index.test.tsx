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

  // Props test
  // it("should has class", () => {
  //   const wrapper = render(<Container className="test">Children</Container>);
  //   expect(wrapper.prop("className")).toEqual("test");
  // });
});
