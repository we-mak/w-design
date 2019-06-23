import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Radio from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Radio/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Radio groupName="Checkbox" groupLabel="Test checkbox" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
