import * as React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
import Grid from "./Grid";

describe("<Grid/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props test: no necessary to do too much test with styled-system
  it("should has width props", () => {
    const wrapper = shallow(<Grid />);
    wrapper.setProps({ width: [1, 1 / 2] });
    expect(wrapper).toMatchSnapshot();
  });

  it("should has m props", () => {
    const wrapper = shallow(<Grid />);
    wrapper.setProps({ width: 1, m: "auto" });
    expect(wrapper).toMatchSnapshot();
  });

  // Child test

  it("should render Child component", () => {
    const wrapper = mount(
      <Grid>
        <div>Child</div>
      </Grid>
    );
    expect(wrapper.contains(<div>Child</div>)).toBeTruthy();
  });
});
