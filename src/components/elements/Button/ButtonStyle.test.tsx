import * as React from "react";
import * as renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";
import Button from "./Button";
import Provider from "../../layout/Provider/Provider";

describe("test Button style", () => {
  // render test
  it("should render right style", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    const fullTree = renderer
      .create(
        <Provider>
          <Button>Test</Button>
        </Provider>
      )
      .toJSON();
    expect(fullTree).toMatchSnapshot();
  });

  // get style test
  it("should renders correctly with theme provider", () => {
    const defaultBtn = mount(
      <Provider>
        <Button>Test</Button>
      </Provider>
    );
    expect(defaultBtn.find("button")).toHaveStyleRule("background", "#E2EAF2");
    const primaryBtn = mount(
      <Provider>
        <Button appearance="primary">Test</Button>
      </Provider>
    );
    expect(primaryBtn.find("button")).toHaveStyleRule("background", "#008CC0");
  });

  // appearance
  it("should has right appearance style", () => {
    const defaultBtn = mount(<Button />);
    const primaryBtn = mount(<Button appearance="primary" />);
    const dangerBtn = mount(<Button appearance="danger" />);
    const warnBtn = mount(<Button appearance="warning" />);
    const successBtn = mount(<Button appearance="success" />);
    expect(defaultBtn).toHaveStyleRule("background", "#E2EAF2");
    expect(primaryBtn).toHaveStyleRule("background", "#008CC0");
    expect(dangerBtn).toHaveStyleRule("background", "#DC1F1F");
    expect(warnBtn).toHaveStyleRule("background", "#FA9B00");
    expect(successBtn).toHaveStyleRule("background", "#29A634");
  });
  // button size
  it("should has right size style", () => {
    const smBtn = mount(<Button elementSize="sm" />);
    const defaultBtn = mount(<Button />);
    const lgBtn = mount(<Button elementSize="lg" />);
    expect(smBtn).toHaveStyleRule("padding", "0.15rem 0.3rem");
    expect(smBtn).toHaveStyleRule("font-size", "0.7rem");
    expect(defaultBtn).toHaveStyleRule("padding", "0.35rem 0.4rem");
    expect(defaultBtn).toHaveStyleRule("font-size", "0.8rem");
    expect(lgBtn).toHaveStyleRule("padding", "0.45rem 0.6rem");
    expect(lgBtn).toHaveStyleRule("font-size", "0.9rem");
  });
  // loading style
  it("should render loading style", () => {
    const btn = mount(<Button isLoading />);
    expect(btn).toHaveStyleRule("animation", "loading 500ms infinite linear", {
      modifier: "::after"
    });

    const primaryBtn = mount(<Button isLoading appearance="primary" />);
    expect(primaryBtn).toHaveStyleRule("border-color", "#FFF", {
      modifier: "::after"
    });
  });
  // selected style
  it("should render selected style", () => {
    const btn = mount(<Button isSelected />);
    expect(btn).toHaveStyleRule("background", "#004660");

    const warnBtn = mount(<Button isSelected appearance="warning" />);
    expect(warnBtn).toHaveStyleRule("background", "#EF8100");
    expect(warnBtn).toHaveStyleRule("background", "#EF8100", {
      modifier: ":hover"
    });

    const dangerBtn = mount(<Button isSelected appearance="danger" />);
    expect(dangerBtn).toHaveStyleRule("background", "#DC1F1F");
  });
  // fluid button
  it("should render fluid style", () => {
    const btn = mount(<Button fluid />);
    expect(btn).toHaveStyleRule("width", "100%");
  });
});
