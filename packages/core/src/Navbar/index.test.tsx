import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import Provider from "../Provider";
import Nav from "./index";

afterEach(cleanup);

describe("<Nav/>", () => {
  it("should render correct icon styled", () => {
    const { container } = render(
      <Provider>
        <Nav>
          <Nav.Center>Center</Nav.Center>
          <Nav.Section>Section</Nav.Section>
        </Nav>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
