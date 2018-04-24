import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import { ContainerWrap } from "./ContainerWrap";

describe("<ContainerWrap/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<ContainerWrap />);
    expect(wrapper).toMatchSnapshot();
  });
});
