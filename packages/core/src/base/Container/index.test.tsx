// This component is based on styled-components, unnecessary to do overtest
import * as React from "react";
import { render } from "@testing-library/react";
import Container from "./index";
import Provider from "../../layout/Provider";

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
