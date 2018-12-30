import * as React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";
import Spinner from "./index";

describe("<Spinner/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = render(<Spinner>Test</Spinner>);
    expect(wrapper).toMatchSnapshot();
  });

  // Style test
  // it("should normal style spinner", () => {
  //   const wrapper = render(
  //       <Spinner>Test</Spinner>
  //   );
  //   expect(wrapper).toHaveStyleRule("min-height", ".8rem");
  // });

  // it("should have large style spinner", () => {
  //   const wrapperLg = render(
  //       <Spinner large>Test</Spinner>
  //   );
  //   expect(wrapperLg).toHaveStyleRule("min-height", "2rem");
  // });
});
