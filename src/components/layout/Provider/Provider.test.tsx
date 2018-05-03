// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import Provider from "./Provider";

describe("<Provider/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Provider />);
    expect(wrapper).toMatchSnapshot();
  });
});
