import * as React from "react";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-styled-components";
import Hide from "./Hide";

describe("<Hide/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Hide />);
    expect(wrapper).toMatchSnapshot();
  });

  // Column Style test
  it("should has display none with xs", () => {
    const wrapper = renderer.create(<Hide xs />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (max-width: 24em)"
    });
  });

  it("should has display none with sm", () => {
    const wrapper = renderer.create(<Hide sm />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 24em) and (max-width: 32em)"
    });
  });

  it("should has display none with md", () => {
    const wrapper = renderer.create(<Hide md />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 32em) and (max-width: 48em)"
    });
  });

  it("should has display none with lg", () => {
    const wrapper = renderer.create(<Hide lg />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 48em) and (max-width: 64em)"
    });
  });

  it("should has display none with xl", () => {
    const wrapper = renderer.create(<Hide xl />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 64em) and (max-width: 80em)"
    });
  });

  it("should has display none with xxl", () => {
    const wrapper = renderer.create(<Hide xxl />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 80em)"
    });
  });
});
