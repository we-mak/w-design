import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Dropdown from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Dropdown/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Dropdown
          title="Dropdown"
          content={
            <ul>
              <li key="1">Item 1</li>
              <li key="2">Item 2</li>
              <li key="3">Item 3</li>
              <li key="4">Item 4</li>
            </ul>
          }
        />
        <Dropdown title="bottomCenter" position="bottomCenter" />
        <Dropdown title="topLeft" position="topLeft" />
        <Dropdown title="topCenter" position="topCenter" />
        <Dropdown title="topRight" position="topRight" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
