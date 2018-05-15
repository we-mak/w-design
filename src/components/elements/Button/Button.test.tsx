import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import Button from "./Button";

describe("<Button/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
