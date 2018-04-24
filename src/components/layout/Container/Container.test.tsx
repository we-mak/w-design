import * as React from "react";
// import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import "jest-styled-components";
import Container from "./Container";

describe("<Container/>", () => {
  // Render test
  it("it should renders correctly", () => {
    const wrapper = renderer.create(<Container>Children</Container>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
