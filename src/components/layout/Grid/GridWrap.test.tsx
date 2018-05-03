import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import { GridWrap } from "./GridWrap";

describe("<GridWrap/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<GridWrap />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props test
  it("should has gapless props", () => {
    const wrapper = shallow(<GridWrap />);
    wrapper.setProps({ gapless: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("should has oneline props", () => {
    const wrapper = shallow(<GridWrap />);
    wrapper.setProps({ oneline: true });
    expect(wrapper).toMatchSnapshot();
  });
});
