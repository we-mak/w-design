import * as React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";
import Button from "./index";
import Provider from "../../layout/Provider";

describe("<Button/>", () => {
  it("should render with different appearance style", () => {
    const { container } = render(
      <Provider>
        <Button>Hello</Button>
        <Button appearance="primary">Hello</Button>
        <Button appearance="link">Hello</Button>
        <Button appearance="warning">Hello</Button>
        <Button appearance="success">Hello</Button>
        <Button appearance="danger">Hello</Button>
        <Button appearance="subtle">Hello</Button>
        <Button appearance="clean">Hello</Button>
        <Button appearance="help">Hello</Button>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
