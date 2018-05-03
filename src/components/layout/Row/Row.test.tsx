import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import Row from "./Row";

describe("<GridWrap/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props test
  it("should has gapless props", () => {
    const wrapper = shallow(<Row />);
    wrapper.setProps({ gapless: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("should has oneline props", () => {
    const wrapper = shallow(<Row />);
    wrapper.setProps({ oneline: true });
    expect(wrapper).toMatchSnapshot();
  });
});
