// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import { render } from "@testing-library/react";
import Provider from "../Provider";
import Container from "./index";

describe("<Container/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Container />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
