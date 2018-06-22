import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import Spinner from "./Spinner";

describe("<Spinner/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Spinner>Test</Spinner>);
    expect(wrapper).toMatchSnapshot();
  });

  // Style test

  it("should right style spinner", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toHaveStyleRule("min-height", ".8rem");

    const wrapperLg = shallow(<Spinner largeSpinner />);
    expect(wrapperLg).toHaveStyleRule("min-height", "2rem");
  });
});
