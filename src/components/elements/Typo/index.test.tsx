import * as React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";
import Typo from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Typo/>", () => {
  it("should render correct with heading style", () => {
    const { container } = render(
      <Provider>
        <Typo>Hello</Typo>
        <Typo appearance="h1">Hello</Typo>
        <Typo appearance="h2">Hello</Typo>
        <Typo appearance="h3">Hello</Typo>
        <Typo appearance="h4">Hello</Typo>
        <Typo appearance="h5">Hello</Typo>
        <Typo appearance="h6">Hello</Typo>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render div with H1 style", () => {
    const { container } = render(
      <Provider>
        <Typo appearance="h1" tag="div">
          Hello
        </Typo>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
