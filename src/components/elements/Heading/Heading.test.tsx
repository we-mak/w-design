import * as React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
import Heading from "./Heading";

describe("<Heading/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toMatchSnapshot();
  });

  it("render as span element", () => {
    const wrapper = mount(<Heading.H1 as="span" />);
    expect(wrapper.find("span").length).toBe(1);
  });

  // Child test
  it("should render Child component", () => {
    const wrapper = mount(
      <Heading>
        <Heading.H1>Child</Heading.H1>
      </Heading>
    );
    expect(wrapper.contains(<Heading.H1>Child</Heading.H1>)).toBeTruthy();
  });
});
