import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import Container from "./Container";

describe("<Container/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Container>Children</Container>);
    expect(wrapper).toMatchSnapshot();
  });

  // Props test
  it("should has class", () => {
    const wrapper = shallow(<Container className="test">Children</Container>);
    expect(wrapper.prop("className")).toEqual("test");
  });
});
