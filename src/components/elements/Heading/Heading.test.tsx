import * as React from "react";
import * as renderer from "react-test-renderer";
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
    const h1 = renderer.create(<Heading.H1 />).toJSON();
    const h2 = renderer.create(<Heading.H2 />).toJSON();
    const h3 = renderer.create(<Heading.H3 />).toJSON();
    const h4 = renderer.create(<Heading.H4 />).toJSON();
    const h5 = renderer.create(<Heading.H5 />).toJSON();
    const h6 = renderer.create(<Heading.H6 />).toJSON();
    expect(h1).toHaveStyleRule("color", colors.N90);
    expect(h2).toHaveStyleRule("color", colors.N90);
    expect(h3).toHaveStyleRule("color", colors.N90);
    expect(h4).toHaveStyleRule("color", colors.N90);
    expect(h5).toHaveStyleRule("color", colors.N70);
    expect(h6).toHaveStyleRule("color", colors.N70);
  });
});
