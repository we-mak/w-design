import * as React from "react";
// import * as renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "jest-styled-components";
import DisplayElement from "./index";

describe("<DisplayElement/>", () => {
  // Column Style test
  it("should has display none with xs", () => {
    const { container } = render(<DisplayElement display={["block"]} />);
    expect(container).toMatchSnapshot();
  });

  // it("should has display none with sm", () => {
  //   const wrapper = renderer.create(<DisplayElement sm />).toJSON();
  //   expect(wrapper).toHaveStyleRule("display", "none", {
  //     media: "screen and (min-width: 24em) and (max-width: 32em)"
  //   });
  // });
});
