import * as React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("<Container/>", () => {
  // Render test
  it("it should renders correctly", () => {
    const wrapper = shallow(<Container>Children</Container>);
    expect(wrapper).toMatchSnapshot();
  });
});
