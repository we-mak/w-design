import * as React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
import Container from "./Container";

describe("<Container/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props test
  it("should has class", () => {
    const wrapper = shallow(<Container className="test">Children</Container>);
    expect(wrapper.prop("className")).toEqual("test");
  });

  it("should has passed spread prop", () => {
    const wrapper = mount(
      <Container {...{ randomProp: 1 }}>Children</Container>
    );
    expect(wrapper.prop("randomProp")).toEqual(1);
  });

  // Children test
  it("should render Child component", () => {
    const wrapper = mount(
      <Container>
        <div>Child</div>
      </Container>
    );
    expect(wrapper.contains(<div>Child</div>)).toBeTruthy();
  });
});
