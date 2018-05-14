// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-styled-components";
import Provider from "./index";

describe("<Provider/>", () => {
  it("should renders correctly", () => {
    const wrapper = shallow(<Provider />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with custom theme", () => {
    const wrapper = renderer
      .create(
        <Provider
          theme={{
            fonts: "Avenir Next",
            fontSizes: [12, 16, 18, 24, 36, 48, 72],
            space: [0, 6, 12, 18, 24, 30, 36]
          }}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should set stylesheet", () => {
    const wrapper = shallow(<Provider />);
    const instance = wrapper.instance() as Provider;
    instance.componentDidMount();

    const stylesheet = instance.stylesheet;

    if (document && document.head) {
      expect(document.head.appendChild(stylesheet)).toMatchSnapshot();
    }
  });
  // TODO: test delete stylesheet after unmount
});
