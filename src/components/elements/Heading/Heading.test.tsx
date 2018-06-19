import * as React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
import Heading from "./Heading";
import defaultTheme from "../../../common/theme";

const { colors } = defaultTheme;

describe("<Heading/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toMatchSnapshot();
  });

  it("render as span element", () => {
    const wrapper = mount(<Heading.H1 customComponent="span" />);
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

  it("should render right style", () => {
    const h1 = mount(<Heading.H1 />);
    const h2 = mount(<Heading.H2 />);
    const h3 = mount(<Heading.H3 />);
    const h4 = mount(<Heading.H4 />);
    const h5 = mount(<Heading.H5 />);
    const h6 = mount(<Heading.H6 />);
    expect(h1).toHaveStyleRule("color", colors.N90);
    expect(h2).toHaveStyleRule("color", colors.N90);
    expect(h3).toHaveStyleRule("color", colors.N90);
    expect(h4).toHaveStyleRule("color", colors.N90);
    expect(h5).toHaveStyleRule("color", colors.N70);
    expect(h6).toHaveStyleRule("color", colors.N70);
  });
});
