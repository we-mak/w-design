import * as React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
import Button from "./Button";
import theme from "../../../common/theme";

const { colors } = theme;

describe("<Button/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  // Tag render test
  it("render as a link element", () => {
    const wrapper = mount(<Button href="#" appearance="link" />);
    expect(wrapper.find("a").length).toBe(1);
  });

  // Test render style
  it("render right style", () => {
    const wrapper = mount(<Button appearance="primary" />);
    expect(wrapper).toHaveStyleRule("background", `${colors.B50}`);
  });

  // Child test
  it("should render Child component", () => {
    const wrapper = mount(
      <Button>
        <div>Child</div>
      </Button>
    );
    expect(
      wrapper.contains(
        <Button>
          <div>Child</div>
        </Button>
      )
    ).toBeTruthy();
  });

  // Props test
  it("should has className", () => {
    const wrapper = shallow(<Button className="test" />);
    expect(wrapper.prop("className")).toEqual("test");
  });
});
