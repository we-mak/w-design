import * as React from "react";
import * as renderer from "react-test-renderer";
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
  it("should has props", () => {
    const wrapper = shallow(<Grid />);
    wrapper.setProps({ width: [1, 1 / 2], m: "auto", hideSm: true });
    expect(wrapper).toMatchSnapshot();
  });

  // Column Style test
  it("should has display none with hideXs", () => {
    const wrapper = renderer.create(<Grid.Column hideXs />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (max-width: 24em)"
    });
  });

  it("should has display none with hideSm", () => {
    const wrapper = renderer.create(<Grid.Column hideSm />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 24em) and (max-width: 32em)"
    });
  });

  it("should has display none with hideMd", () => {
    const wrapper = renderer.create(<Grid.Column hideMd />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 32em) and (max-width: 48em)"
    });
  });

  it("should has display none with hideLg", () => {
    const wrapper = renderer.create(<Grid.Column hideLg />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 48em) and (max-width: 64em)"
    });
  });

  it("should has display none with hideXl", () => {
    const wrapper = renderer.create(<Grid.Column hideXl />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 64em) and (max-width: 80em)"
    });
  });

  it("should has display none with hideXxl", () => {
    const wrapper = renderer.create(<Grid.Column hideXxl />).toJSON();
    expect(wrapper).toHaveStyleRule("display", "none", {
      media: "screen and (min-width: 80em)"
    });
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
