import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import { ContainerWrap, fixed } from "./ContainerWrap";

describe("<ContainerWrap/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<ContainerWrap />);
    expect(wrapper).toMatchSnapshot();
  });

  test("return right result", () => {
    expect(fixed("xlarge")()).toBe("1296px");
    expect(fixed("large")()).toBe("976px");
    expect(fixed("medium")()).toBe("856px");
    expect(fixed("small")()).toBe("616px");
    expect(fixed("xsmall")()).toBe("496px");
  });
});
