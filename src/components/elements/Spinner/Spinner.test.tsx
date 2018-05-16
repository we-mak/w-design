import * as React from "react";
import * as renderer from "react-test-renderer";
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
  it("should large style spinner", () => {
    const wrapper = renderer.create(<Spinner largeSpinner />).toJSON();
    expect(wrapper).toHaveStyleRule("min-height", "2rem");
  });
});
