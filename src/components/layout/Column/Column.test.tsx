import * as React from "react";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-styled-components";
import Column from "./Column";

describe("<Grid/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Column />);
    expect(wrapper).toMatchSnapshot();
  });

  // Column Style test
  it("should has display none with hideXs", () => {
    const wrapper = renderer.create(<Column />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (max-width: 24em)"
    });
  });

  it("should has display none with hideSm", () => {
    const wrapper = renderer.create(<Column />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 24em) and (max-width: 32em)"
    });
  });

  it("should has display none with hideMd", () => {
    const wrapper = renderer.create(<Column />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 32em) and (max-width: 48em)"
    });
  });

  it("should has display none with hideLg", () => {
    const wrapper = renderer.create(<Column />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 48em) and (max-width: 64em)"
    });
  });

  it("should has display none with hideXl", () => {
    const wrapper = renderer.create(<Column />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 64em) and (max-width: 80em)"
    });
  });

  it("should has display none with hideXxl", () => {
    const wrapper = renderer.create(<Column />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 80em)"
    });
  });
});
