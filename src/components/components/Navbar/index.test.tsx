import * as React from "react";
import { cleanup, render } from "react-testing-library";
import "jest-styled-components";
import Nav from "./index";
import Provider from "../../layout/Provider";

describe("<Nav/>", () => {
  afterEach(cleanup);

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
